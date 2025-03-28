
import emailjs from 'emailjs-com';

interface EmailParams {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

// EmailJS configuration constants
const SERVICE_ID = 'service_yse16h6'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'template_7hjy0ud'; // Replace with your EmailJS template ID
const USER_ID = 'EEZmzs3ggUgygw5EF'; // Replace with your EmailJS user ID

export const sendEmail = async (params: EmailParams): Promise<any> => {
  try {
    const templateParams = {
      from_name: `${params.firstName} ${params.lastName}`,
      reply_to: params.email,
      phone: params.mobile,
      subject: params.subject,
      message: params.message,
      to_email: 'suryakamal494@gmail.com'
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    
    return response;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

// Instructions for setup:
// 1. Sign up at https://www.emailjs.com/
// 2. Create a service (e.g., Gmail, Outlook)
// 3. Create an email template with these template variables:
//    - from_name
//    - reply_to
//    - phone
//    - subject
//    - message
//    - to_email (recipient will be suryakamal494@gmail.com)
// 4. Replace the SERVICE_ID, TEMPLATE_ID, and USER_ID constants with your credentials
