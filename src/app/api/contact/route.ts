import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Load environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

if (!SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined in environment variables');
}

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

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

    // Send both emails
    const [notificationResult, autoReplyResult] = await Promise.all([
      sgMail.send(notificationEmail),
      sgMail.send(autoReplyEmail)
    ]);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Emails sent successfully',
        notificationResult,
        autoReplyResult
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 