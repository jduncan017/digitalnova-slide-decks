import { Resend } from "resend";
import { NextResponse } from "next/server";
import { env } from "~/env";

interface SendDeckLinkRequest {
  email: string;
  deckId: string;
  deckTitle?: string;
  preparedFor?: string;
}

export async function POST(request: Request) {
  try {
    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please add RESEND_API_KEY to your .env file." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    let body: SendDeckLinkRequest;
    try {
      body = (await request.json()) as SendDeckLinkRequest;
    } catch {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }
    const { email, deckId, deckTitle, preparedFor } = body;

    if (!email || !deckId) {
      return NextResponse.json(
        { error: "Email and deckId are required" },
        { status: 400 }
      );
    }

    // Build the deck URL
    const baseUrl = env.NEXT_PUBLIC_BASE_URL ?? "https://decks.digitalnovastudio.com";
    const deckUrl = `${baseUrl}/${deckId}`;

    const { data, error } = await resend.emails.send({
      from: "DigitalNova Studio <noreply@digitalnovastudio.com>",
      replyTo: "josh@digitalnovastudio.com",
      to: email,
      subject: `Your Proposal: ${deckTitle ?? "Growth Proposal"}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px;">
                    <!-- Logo -->
                    <tr>
                      <td style="padding-bottom: 32px;">
                        <img src="https://decks.digitalnovastudio.com/logo.png" alt="DigitalNova Studio" width="180" style="display: block;" />
                      </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%); border-radius: 16px; padding: 40px; border: 1px solid #2a2a3e;">
                        <h1 style="margin: 0 0 16px 0; font-size: 28px; font-weight: 600; color: #ffffff;">
                          ${preparedFor ? `Hi ${preparedFor},` : "Hi there,"}
                        </h1>

                        <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #a0a0a0;">
                          Thanks for taking the time to chat. I've put together a proposal based on our conversation.
                        </p>

                        <p style="margin: 0 0 32px 0; font-size: 16px; line-height: 1.6; color: #a0a0a0;">
                          Click below to view your interactive proposal:
                        </p>

                        <!-- CTA Buttons -->
                        <table cellpadding="0" cellspacing="0" style="margin-bottom: 12px;">
                          <tr>
                            <td style="background: linear-gradient(135deg, #0b90b3 0%, #0a7a99 100%); border-radius: 8px;">
                              <a href="${deckUrl}" target="_blank" style="display: inline-block; padding: 14px 28px; font-size: 14px; font-weight: 600; color: #ffffff; text-decoration: none;">
                                View Your Proposal
                              </a>
                            </td>
                          </tr>
                        </table>

                        <table cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                          <tr>
                            <td style="border: 1px solid #0b90b3; border-radius: 8px;">
                              <a href="https://cal.com/digitalnovastudio/follow-up" target="_blank" style="display: inline-block; padding: 14px 28px; font-size: 14px; font-weight: 600; color: #0b90b3; text-decoration: none;">
                                Book a Follow-up Call
                              </a>
                            </td>
                          </tr>
                        </table>

                        <p style="margin: 0 0 8px 0; font-size: 14px; color: #666666;">
                          Or copy this link:
                        </p>
                        <p style="margin: 0; font-size: 14px; color: #0b90b3; word-break: break-all;">
                          <a href="${deckUrl}" style="color: #0b90b3; text-decoration: none;">${deckUrl}</a>
                        </p>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding-top: 24px; text-align: center;">
                        <p style="margin: 0 0 12px 0; font-size: 14px; color: #ffffff;">
                          Want interactive proposals like this for your business? Ask about our proposal services.
                        </p>
                        <p style="margin: 0 0 4px 0; font-size: 14px; color: #666666;">
                          Questions? Just reply to this email.
                        </p>
                        <p style="margin: 0; font-size: 12px; color: #444444;">
                          DigitalNova Studio
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Send email error:", error);
    const message = error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
