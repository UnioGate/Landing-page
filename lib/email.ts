import { render } from '@react-email/render';
import { EmailTemplate } from '@/components/email-template';
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