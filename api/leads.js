
const MAX_BODY_LENGTH = 12000;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.LEAD_FROM_EMAIL;
    const toEmail = process.env.LEAD_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.error("Missing email configuration");
      return res.status(500).json({
        error: "Email service is not configured.",
      });
    }

    const rawBody =
      typeof req.body === "string"
        ? req.body
        : JSON.stringify(req.body ?? {});

    if (rawBody.length > MAX_BODY_LENGTH) {
      return res.status(413).json({
        error: "Enquiry is too large.",
      });
    }

    const body = JSON.parse(rawBody);

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return res.status(400).json({
        error: "Invalid enquiry.",
      });
    }

    const fields = [
      "name",
      "phone",
      "email",
      "interest",
      "purpose",
      "budget",
      "paymentPlan",
      "timeframe",
      "location",
      "message",
      "source",
    ];

    const lead = {};

    for (const field of fields) {
      if (
        body[field] != null &&
        typeof body[field] !== "string"
      ) {
        return res.status(400).json({
          error: `Invalid field: ${field}`,
        });
      }

      lead[field] = (body[field] || "").trim();

      if (lead[field].length > 2000) {
        return res.status(400).json({
          error: `Field is too long: ${field}`,
        });
      }
    }

    if (
      !lead.name ||
      !lead.phone ||
      !lead.interest ||
      !lead.purpose
    ) {
      return res.status(400).json({
        error: "Please complete all required fields.",
      });
    }

    if (
      lead.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)
    ) {
      return res.status(400).json({
        error: "Invalid email address.",
      });
    }

    const content = [
      "New Riverside Azure Enquiry",
      "",
      `Name: ${lead.name}`,
      `Phone / WhatsApp: ${lead.phone}`,
      `Email: ${lead.email || "Not provided"}`,
      `Residence: ${lead.interest}`,
      `Purpose: ${lead.purpose}`,
      `Budget: ${lead.budget || "Not specified"}`,
      `Payment Plan: ${lead.paymentPlan || "Not specified"}`,
      `Purchase Timeframe: ${lead.timeframe || "Not specified"}`,
      `Location: ${lead.location || "Not specified"}`,
      "",
      "Additional Information:",
      lead.message || "None",
      "",
      `Source: ${lead.source || "Contact Page"}`,
      `Received: ${new Date().toISOString()}`,
    ].join("\n");

    const emailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject: "New Riverside Azure Sales Enquiry",
          text: content,
        }),
      }
    );

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();

      console.error("Resend error:", {
        status: emailResponse.status,
        details: errorText,
      });

      return res.status(502).json({
        error: "Unable to deliver enquiry.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Lead submission error:", error);

    return res.status(500).json({
      error: "Unable to process enquiry.",
    });
  }
}
