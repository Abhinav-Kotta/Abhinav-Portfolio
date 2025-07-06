# Contact Form Setup Guide

Your contact form is now configured to use EmailJS for sending emails with auto-replies to users.

## Setup Instructions

### 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

### 2. Set Up Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your email provider
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create Auto-Reply Template

1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Name it "Contact Form Auto-Reply"
4. Use this template content:

```html
Subject: Thank you for reaching out - Abhinav Kotta

Hello {{from_name}},

Thank you for contacting me through my portfolio! I've received your message and will get back to you as soon as possible.

Your message:
{{message}}

I typically respond within 24-48 hours. If you have an urgent inquiry, feel free to reach out to me directly at abhinavkotta.io@gmail.com.

Best regards,
Abhinav Kotta
Software Developer
```

5. Note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

1. Go to "Account" → "API Keys" in EmailJS dashboard
2. Copy your **Public Key**

### 5. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_auto_reply_template_id_here
```

### 6. How It Works

- **Notification to You**: Uses EmailJS default template to send form data to your email
- **Auto-Reply to User**: Uses your custom template to send a professional confirmation email to the user

## Testing Your Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your email to confirm you received the notification
5. Check the sender's email to confirm they received the auto-reply

## Troubleshooting

- **"Service not found"**: Make sure your Service ID is correct
- **"Template not found"**: Ensure your Auto-Reply Template ID is correct
- **"Public key invalid"**: Check your Public Key in the EmailJS dashboard
- **Emails not received**: Check your spam folder and email service settings
- **Auto-replies not working**: Make sure the template ID is correct

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Basic email templates
- Gmail, Outlook, and other email providers

## Benefits of Auto-Replies

- **Professional**: Users know their message was received
- **Better UX**: Immediate confirmation reduces anxiety
- **Set Expectations**: Let users know when to expect a response
- **Reduce Spam**: Confirms the form is working

## Alternative: Next.js API Route (Most Secure)

If you prefer a more secure approach, I can help you set up a Next.js API route instead. This would involve:

1. Creating a Next.js API route (`/api/contact`)
2. Using a service like SendGrid, Resend, or Nodemailer
3. Handling the email sending on the server side

Let me know if you need help with any of these steps! 