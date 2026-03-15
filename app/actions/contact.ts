"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function sendContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("honeypot") as string;

  if (honeypot) return { success: false, message: "Er is iets misgegaan." };

  if (!name || !email || !message) {
    return { success: false, message: "Vul alle verplichte velden in." };
  }

  try {
    await resend.emails.send({
      from: "Özad Elektrotechniek <onboarding@resend.dev>",
      to: "akosgultekin@gmail.com",
      replyTo: email,
      subject: `Nieuw bericht van ${name}`,
      html: `
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Telefoonnummer:</strong> ${phone || "Niet opgegeven"}</p>
        <p><strong>E-mailadres:</strong> ${email}</p>
        <p><strong>Bericht:</strong><br/>${message}</p>
      `,
    });

    return { success: true, message: "Uw bericht is verzonden!" };
  } catch (error) {
    return {
      success: false,
      message: "Er is iets misgegaan. Probeer het opnieuw.",
    };
  }
}
