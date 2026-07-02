import { render } from '@react-email/render';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(email: string) {
    const html = render(EmailTemplate({ email }));

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'Hello world',
        react: EmailTemplate({ email })
    });

    if (error) throw error;

    return data;
}