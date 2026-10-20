import { NextResponse } from 'next/server';
import { sendLeadEmail, submittedAt } from '@/lib/email';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, address, zip, service_type, message, smsTransactional, smsMarketing } = body;

        // All fields are optional — no required validation.
        const consent = `Transactional (reminders/updates): ${smsTransactional ? 'Yes' : 'No'} | Marketing (offers/promos): ${smsMarketing ? 'Yes' : 'No'}`;

        // Fold address/ZIP into the message body so the office always sees them,
        // even if the email template has no dedicated fields for them.
        const details = [
            address ? `Address: ${address}` : null,
            zip ? `ZIP: ${zip}` : null,
        ].filter(Boolean).join('\n');

        await sendLeadEmail(process.env.EMAILJS_TEMPLATE_CONTACT, {
            name: name || 'Not provided',
            email: email || 'Not provided',
            phone: phone || 'Not provided',
            address: address || 'Not provided',
            zip: zip || 'Not provided',
            service_type: service_type || 'Not specified',
            message: `${message || '(no message)'}\n\n${details ? details + '\n\n' : ''}— SMS consent — ${consent}`,
            sms_consent: consent,
            submitted_at: submittedAt(),
        });

        return NextResponse.json({ success: true, message: 'Message received!' }, { status: 200 });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ error: 'Something went wrong. Please call us at 214-307-4264.' }, { status: 500 });
    }
}
