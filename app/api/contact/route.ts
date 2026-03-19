import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  try {
    const body = await request.json();
    const { name, organization, email, phone, inquiryType, message, num1, num2, op, captchaAnswer } = body;

    // Validate required fields
    if (!name || !organization || !email || !inquiryType || !captchaAnswer) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify CAPTCHA
    const expected = op === '+' ? num1 + num2 : num1 - num2;
    if (parseInt(captchaAnswer) !== expected) {
      return NextResponse.json(
        { error: 'Invalid security answer. Please try again.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const htmlContent = `
        <div style="font-family: 'Courier New', monospace; max-width: 600px; margin: 0 auto; background: #05050F; color: #F0F0F8; padding: 32px; border-radius: 8px;">
          <div style="border-left: 4px solid #0057FF; padding-left: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 4px; color: #F0F0F8;">New Website Inquiry</h1>
            <p style="font-size: 12px; color: #8888AA; margin: 0; text-transform: uppercase; letter-spacing: 2px;">via axcendinc.com contact form</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #F0F0F8; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Organization</td>
              <td style="padding: 8px 0; color: #F0F0F8; font-size: 14px;">${organization}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 8px 0; color: #0057FF; font-size: 14px;"><a href="mailto:${email}" style="color: #0057FF;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
              <td style="padding: 8px 0; color: #F0F0F8; font-size: 14px;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Inquiry Type</td>
              <td style="padding: 8px 0;">
                <span style="background: rgba(0,87,255,0.15); color: #0057FF; border: 1px solid rgba(0,87,255,0.3); padding: 2px 10px; border-radius: 4px; font-size: 12px;">${inquiryType}</span>
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.08);">
            <p style="color: #8888AA; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">Message</p>
            <p style="color: #F0F0F8; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message || 'No message provided'}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08);">
            <p style="color: #8888AA; font-size: 11px; margin: 0;">Axcend, Inc. · 8950 Colesbury Pl, Fairfax, VA 22031 · 8(a) GSA STARS III Awardee</p>
          </div>
        </div>
      `;

    // Brevo API Request
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY || '',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: "Axcend Website", email: "akadaan310@gmail.com" },
        to: [{ email: "rrafaels@axcendinc.com" }],
        replyTo: { email: email },
        subject: `New Inquiry: ${inquiryType} — ${name} (${organization})`,
        htmlContent: htmlContent
      })
    });

    const result = await res.json();

    if (!res.ok) {
      console.error('Brevo error:', result);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or call us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: result.messageId });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
