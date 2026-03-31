import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, service_type, message } = body;

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // TODO: Connect to Supabase when credentials are available
        // const { createClient } = require('@supabase/supabase-js');
        // const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
        // await supabase.from('contact_messages').insert([{ name, email, phone, service_type, message }]);

        console.log('Contact submission:', { name, email, phone, service_type, message, created_at: new Date().toISOString() });

        return NextResponse.json({ success: true, message: 'Message received!' }, { status: 200 });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
