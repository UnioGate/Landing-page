import { render } from '@react-email/render';
import { EmailTemplate } from '@/components/email-template';
import { ContactAckTemplate } from '@/components/contact-ack-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(email: string) {
    const html = render(EmailTemplate({ email }));

    const { data, error } = await resend.emails.send({
        from: 'support@uniogate.com',
        to: email,
        subject: "You're on the list! Welcome to UnioGate 🎉",
        react: EmailTemplate({ email })
    });

    if (error) throw error;

    return data;
}

export type ContactMessage = {
    name: string;
    email: string;
    message: string;
    topic?: string;
    business?: string;
    volume?: string;
};

export async function sendContactMessage({
    name,
    email,
    message,
    topic,
    business,
    volume,
}: ContactMessage) {
    const details = [
        `Name:     ${name}`,
        `Email:    ${email}`,
        `Topic:    ${topic || '—'}`,
        `Business: ${business || '—'}`,
        `Volume:   ${volume || '—'}`,
    ].join('\n');

    const { data, error } = await resend.emails.send({
        from: 'support@uniogate.com',
        to: 'uniogate@gmail.com',
        replyTo: email,
        subject: `${topic ? `[${topic}] ` : ''}New contact message from ${name}`,
        text: `${details}\n\n---\n\n${message}`,
    });

    if (error) throw error;

    return data;
}

/** Confirmation back to the person who filled in the contact form. */
export async function sendContactAcknowledgement({
    name,
    email,
    message,
    topic,
}: Pick<ContactMessage, 'name' | 'email' | 'message' | 'topic'>) {
    const { data, error } = await resend.emails.send({
        from: 'support@uniogate.com',
        to: email,
        replyTo: 'support@uniogate.com',
        subject: "We got your message — UnioGate",
        react: ContactAckTemplate({ name, message, topic }),
    });

    if (error) throw error;

    return data;
}