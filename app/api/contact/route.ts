// app/api/contact/route.ts
import { supabase } from '@/config/supabaseClient';
import { sendContactAcknowledgement, sendContactMessage } from '@/lib/email';

export async function POST(req: Request) {
    const { name, email, message, topic, business, volume } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return Response.json(
            { error: 'Name, email and message are required.' },
            { status: 400 }
        );
    }

    const payload = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        topic: topic?.trim() || null,
        business: business?.trim() || null,
        volume: volume?.trim() || null,
    };

    // Store it first — the row is the record of truth even if the emails fail.
    const { error: dbError } = await supabase
        .from('contact_messages')
        .insert([payload]);

    if (dbError) {
        console.error('contact_messages insert failed', dbError);
    }

    const emailArgs = {
        ...payload,
        topic: payload.topic ?? undefined,
        business: payload.business ?? undefined,
        volume: payload.volume ?? undefined,
    };

    const [notified, acknowledged] = await Promise.allSettled([
        sendContactMessage(emailArgs),
        sendContactAcknowledgement(emailArgs),
    ]);

    // The acknowledgement is a courtesy — never fail the submission over it.
    if (acknowledged.status === 'rejected') {
        console.error('contact acknowledgement email failed', acknowledged.reason);
    }

    if (notified.status === 'rejected') {
        console.error('contact notification email failed', notified.reason);

        // The message is safely stored, so don't ask the user to send it again.
        if (!dbError) {
            return Response.json({
                stored: true,
                emailed: false,
                acknowledged: acknowledged.status === 'fulfilled',
            });
        }

        return Response.json({ error: 'Could not send your message.' }, { status: 500 });
    }

    return Response.json({
        stored: !dbError,
        emailed: true,
        acknowledged: acknowledged.status === 'fulfilled',
    });
}
