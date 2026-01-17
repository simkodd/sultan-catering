import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { fullName, phone, email, eventType, eventDate, location, budget, guests, vision } = data;

    // 1. Transporter Ayarları (Gmail örneği)
    // NOT: Gmail kullanıyorsan "App Password" (Uygulama Şifresi) almalısın.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Senin gönderici mailin
        pass: process.env.EMAIL_PASS, // Senin uygulama şifren
      },
    });

    // 2. İngilizce Mail İçeriği (HTML formatında)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'younes@sultancatering.co.uk', // Alıcı Adresi
      replyTo: email, // Formdan gelen kullanıcı maili
      subject: `New Event Inquiry: ${eventType} from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #556B2F;">New Event Booking Request</h2>
          <p>You have received a new booking inquiry from your website.</p>
          <hr />
          <h3>Contact Details</h3>
          <ul>
            <li><strong>Full Name:</strong> ${fullName}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
          </ul>
          
          <h3>Event Details</h3>
          <ul>
            <li><strong>Event Type:</strong> ${eventType}</li>
            <li><strong>Date:</strong> ${eventDate}</li>
            <li><strong>Location:</strong> ${location}</li>
            <li><strong>Guest Count:</strong> ${guests}</li>
            <li><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</li>
          </ul>

          <h3>Vision / Notes</h3>
          <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #F59E0B;">
            ${vision}
          </p>
        </div>
      `,
    };

    // 3. Maili Gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}