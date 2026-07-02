// app/api/send/route.ts
import { sendConfirmationEmail } from '@/lib/email';

export async function POST(req: Request) {
    const { email } = await req.json();

    try {
        const data = await sendConfirmationEmail(email);
        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}