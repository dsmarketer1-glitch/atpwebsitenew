import { NextResponse } from 'next/server';
import { sendLeadEmail, submittedAt } from '@/lib/email';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, smsConsent } = body;

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const consent = smsConsent ? 'Yes — opted in to SMS/text messages' : 'No';

        await sendLeadEmail(process.env.EMAILJS_TEMPLATE_BOOKING, {
            name,
            email,
            phone,
            message: `${message}\n\n— SMS consent: ${consent}`,
            sms_consent: consent,
            submitted_at: submittedAt(),
        });

        return NextResponse.json({ success: true, message: 'Booking request received!' }, { status: 200 });
    } catch (error) {
        console.error('Booking API error:', error);
        return NextResponse.json({ error: 'Something went wrong. Please call us at 214-307-4264.' }, { status: 500 });
    }
}
