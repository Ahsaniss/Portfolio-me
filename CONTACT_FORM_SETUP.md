# Contact Form Setup Guide

## Option 1: Web3Forms (Recommended - Simpler Setup)

### Step 1: Get Your Access Key
1. Go to [Web3Forms.com](https://web3forms.com)
2. Enter your email: `ahsanraza858585@gmail.com`
3. Click "Create Access Key"
4. Copy the access key you receive

### Step 2: Update Contact.tsx
Replace `YOUR_ACCESS_KEY_HERE` in Contact.tsx with your actual access key:

```typescript
access_key: 'your_actual_access_key_here',
```

### Step 3: Test
- Fill out the contact form
- Submit it
- Check your email for messages

**Features:**
- ✅ No signup required
- ✅ 250 free submissions per month
- ✅ Spam protection included
- ✅ Works immediately

---

## Option 2: EmailJS (More Features)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key

### Step 2: Update Contact.tsx
If you prefer EmailJS, I can switch back to that implementation.

---

## Troubleshooting

### If Web3Forms doesn't work:
1. Check that you replaced the access key correctly
2. Verify your email address is correct
3. Check browser console for errors

### If you get CORS errors:
- This is normal in development
- The form will work when deployed to production

### Alternative: Direct mailto
If both services fail, the form can fall back to opening the user's email client with pre-filled content.

---

## Which should you choose?

**Web3Forms** - Choose this if you want:
- ✅ Simple setup (5 minutes)
- ✅ No account registration
- ✅ Works immediately

**EmailJS** - Choose this if you want:
- ✅ Custom email templates
- ✅ More customization options
- ✅ Direct integration with your email service

**Recommendation:** Start with Web3Forms since it's simpler and works immediately!
