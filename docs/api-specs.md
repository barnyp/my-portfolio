# API Specifications

@context7:API

## Overview

This document outlines the API endpoints available in the portfolio application, their request/response formats, and authentication requirements. The application primarily uses Next.js API routes for backend functionality.

## Base URL

All API endpoints are relative to the application's base URL: `/api`

## Endpoints

### 1. Contact Form Submission

**Endpoint:** `/api/contact`

**Method:** `POST`

**Description:** Processes contact form submissions with reCAPTCHA verification and sends email notifications.

**Request Headers:**

```json
{
  "Content-Type": "application/json"
}
```

**Request Body:**

```json
{
  "name": "string", // Sender's name
  "email": "string", // Sender's email address
  "subject": "string", // Email subject
  "message": "string", // Email message content
  "recaptchaToken": "string" // Google reCAPTCHA v3 token
}
```

**Response (Success - 200):**

```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Response (Error - 400):**

```json
{
  "error": "string" // Error message
}
```

**Response (Error - 500):**

```json
{
  "error": "string" // Error message
}
```

**Implementation Details:**

```typescript
// From src/app/api/contact/route.ts
export async function POST(request: Request) {
  const { name, email, subject, message, recaptchaToken } = await request.json();

  // 1. Validate reCAPTCHA token
  if (!recaptchaToken) {
    return NextResponse.json({ error: "Missing reCAPTCHA token." }, { status: 400 });
  }
  
  // reCAPTCHA verification with Google's API
  // Email sending with nodemailer
  // Returns success or error response
}
```

## Authentication

Currently, the application does not implement user authentication for its public-facing API routes. Authentication could be added in future versions for protected resources or admin functionality.

## Error Handling

API errors follow a consistent format:

```json
{
  "error": "Error message describing what went wrong"
}
```

Error status codes:

- **400** - Bad Request (invalid input, validation failure)
- **401** - Unauthorized (authentication failure)
- **403** - Forbidden (permission issue)
- **404** - Not Found (resource doesn't exist)
- **429** - Too Many Requests (rate limiting)
- **500** - Internal Server Error (server-side issue)

## Environment Variables

The API relies on the following environment variables:

```env
RECAPTCHA_SECRET_KEY=<google_recaptcha_secret>
SMTP_HOST=<smtp_server_host>
SMTP_PORT=<smtp_server_port>
SMTP_USER=<smtp_username>
SMTP_PASS=<smtp_password>
```

## Future API Extensions

Future API endpoints could include:

1. **Blog Content Management:** API for managing blog posts via admin interface
2. **Analytics:** Endpoints for capturing site engagement metrics
3. **Project Management:** API for managing portfolio project entries
4. **Authentication:** User login/logout for admin access
