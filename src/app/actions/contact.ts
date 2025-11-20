"use server";

import { Resend } from "resend";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  try {
    // Validate input
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        message: "All fields are required.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return {
        success: false,
        message: "Email service is not configured. Please contact me directly at adamobriendev@gmail.com",
      };
    }

    // Send email using Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return {
        success: false,
        message: "Email service is not configured. Please contact me directly at adamobriendev@gmail.com",
      };
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    
    const { data: emailData, error } = await resend.emails.send({
      from: fromEmail,
      to: "adamobriendev@gmail.com",
      replyTo: data.email,
      subject: `New contact form submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `,
      text: `New contact form submission from ${data.name}\n\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    });

    if (error) {
      console.error("Resend error details:", JSON.stringify(error, null, 2));
      return {
        success: false,
        message: `Failed to send email: ${error.message || "Unknown error"}. Please try again later or contact me directly at adamobriendev@gmail.com`,
      };
    }

    console.log("Email sent successfully:", emailData);

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}

