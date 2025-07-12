import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Load environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

console.log('=== API Route Debug Info ===');
console.log('SENDGRID_API_KEY exists:', !!SENDGRID_API_KEY);
console.log('SENDGRID_API_KEY length:', SENDGRID_API_KEY?.length || 0);
console.log('SENDGRID_API_KEY starts with SG:', SENDGRID_API_KEY?.startsWith('SG') || false);

if (!SENDGRID_API_KEY) {
  console.error('❌ SENDGRID_API_KEY is not defined in environment variables');
  throw new Error('SENDGRID_API_KEY is not defined in environment variables');
}

console.log('✅ SENDGRID_API_KEY loaded successfully');

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST(request: NextRequest) {
  console.log('=== Contact Form Submission Started ===');
  
  try {
    console.log('📥 Parsing request body...');
    const body = await request.json();
    console.log('📋 Request body:', JSON.stringify(body, null, 2));
    
    const { name, email, message } = body;

    // Validate required fields
    console.log('🔍 Validating required fields...');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message length:', message?.length || 0);

    if (!name || !email || !message) {
      console.error('❌ Missing required fields');
      console.log('Name exists:', !!name);
      console.log('Email exists:', !!email);
      console.log('Message exists:', !!message);
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('✅ All required fields present');

    // Email to portfolio owner (notification)
    const notificationEmail = {
      to: 'abhinavkotta.io@gmail.com', // Your email
      from: 'abhinavkotta.io@gmail.com', // Must be verified in SendGrid
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    console.log('📧 Notification email prepared:', {
      to: notificationEmail.to,
      from: notificationEmail.from,
      subject: notificationEmail.subject
    });

    // Auto-reply email to the user
    const autoReplyEmail = {
      to: email,
      from: 'abhinavkotta.io@gmail.com', // Must be verified in SendGrid
      subject: 'Thank you for reaching out - Abhinav Kotta',
      text: `Hello ${name},

Thank you for contacting me through my portfolio! I've received your message and will get back to you as soon as possible.

Your message:
${message}

I typically respond within 24-48 hours. If you have an urgent inquiry, feel free to reach out to me directly at abhinavkotta.io@gmail.com.

Best regards,
Abhinav Kotta
Software Developer`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Hello ${name},</h2>
          
          <p>Thank you for contacting me through my portfolio! I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #4F46E5; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your message:</h3>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          
          <p>I typically respond within 24-48 hours. If you have an urgent inquiry, feel free to reach out to me directly at <a href="mailto:abhinavkotta.io@gmail.com">abhinavkotta.io@gmail.com</a>.</p>
          
          <p>Best regards,<br>
          <strong>Abhinav Kotta</strong><br>
          Software Developer</p>
        </div>
      `
    };

    console.log('📧 Auto-reply email prepared:', {
      to: autoReplyEmail.to,
      from: autoReplyEmail.from,
      subject: autoReplyEmail.subject
    });

    console.log('🚀 Sending emails via SendGrid...');

    // Send both emails
    const [notificationResult, autoReplyResult] = await Promise.all([
      sgMail.send(notificationEmail),
      sgMail.send(autoReplyEmail)
    ]);

    console.log('✅ Emails sent successfully!');
    console.log('📊 Notification result:', notificationResult);
    console.log('📊 Auto-reply result:', autoReplyResult);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Emails sent successfully',
        notificationResult,
        autoReplyResult
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ SendGrid error details:');
    console.error('Error type:', typeof error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    if (error.response) {
      console.error('SendGrid response error:');
      console.error('Status:', error.response.status);
      console.error('Body:', error.response.body);
      console.error('Headers:', error.response.headers);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 