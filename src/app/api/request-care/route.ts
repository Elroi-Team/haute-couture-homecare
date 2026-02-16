import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Log the submission (for development)
    console.log("Care request received:", data);

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "careRecipient",
      "careType",
      "urgency",
      "privacyConsent",
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: In production, integrate with:
    // 1. Email service (SendGrid/Resend)
    // 2. Database (Supabase)
    // 3. Google Sheets

    return NextResponse.json(
      {
        message: "Thank you for your request. We will contact you within 24 hours.",
        success: true
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing care request:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
