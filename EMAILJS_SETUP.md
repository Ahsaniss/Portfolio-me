# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Note your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Message - {{subject}}

Hello Ahsan,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save and note your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

## Step 5: Update Contact.tsx
Replace these values in your Contact.tsx file:

```typescript
const serviceID = 'your_service_id_here';
const templateID = 'your_template_id_here';
const publicKey = 'your_public_key_here';
```

## Step 6: Test
1. Fill out your contact form
2. Submit it
3. Check your email for the message

## Troubleshooting
- Make sure your email service is properly configured
- Check the browser console for any errors
- Verify all IDs are correct
- Ensure your EmailJS account is verified

## Monthly Limits
- Free tier: 200 emails per month
- Perfect for portfolio websites
