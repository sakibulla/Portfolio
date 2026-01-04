# EmailJS Setup Instructions for Portfolio Contact Form

To enable direct email sending from your contact form (from sakibfahmid2002@gmail.com to hasanfahmidul2002@gmail.com), follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account using **sakibfahmid2002@gmail.com**
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Connect your **sakibfahmid2002@gmail.com** account
5. Name your service: "Portfolio Contact Service"
6. Note down your **Service ID** (e.g., service_portfolio)

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Name it: "Portfolio Contact Template"
4. Use this exact template:

**Subject:** `New Contact from Portfolio - {{from_name}}`

**Content:**
```
Hello Fahmidul,

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent automatically from your portfolio contact form.
Reply directly to {{from_email}} to respond to this inquiry.
```

5. Set the "To Email" to: hasanfahmidul2002@gmail.com
6. Set the "Reply To" to: {{reply_to}}
7. Note down your **Template ID** (e.g., template_portfolio)

## 4. Get Your Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (starts with something like "user_...")

## 5. Update Contact Component
Replace these values in `components/Contact.tsx`:

```typescript
const EMAILJS_SERVICE_ID = 'your_actual_service_id'     // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'your_actual_template_id'   // Replace with your template ID  
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key'     // Replace with your public key
```

## 6. Test the Setup
1. Save the file and restart your development server
2. Fill out the contact form on your website
3. Submit the form
4. Check hasanfahmidul2002@gmail.com for the email

## Email Flow
- **Sender**: sakibfahmid2002@gmail.com (your EmailJS account)
- **Recipient**: hasanfahmidul2002@gmail.com (your main email)
- **Reply-To**: The visitor's email address (so you can reply directly)

## Fallback System
If EmailJS fails for any reason, the form will automatically fall back to opening the user's email client with a pre-filled message.

## Free Tier Limits
- 200 emails per month
- Perfect for a portfolio contact form

## Security Note
The public key is safe to use in frontend code - it's designed for client-side use and has built-in rate limiting.