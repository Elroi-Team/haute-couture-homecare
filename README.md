# Haute Couture Home Care Website

A luxury, quiet-luxury website for Haute Couture Home Care - a premium in-home care service in Wellington and Palm Beach County, FL.

## Features

- **11 Pages**: Home, Services, How It Works, About, Request Care, Careers, Contact, FAQ, Privacy Policy, Terms, Accessibility
- **Request Care Form**: Comprehensive intake form with all required fields
- **Client Portal**: Login/signup for clients to view request history (Phase 1)
- **Admin Dashboard**: User management with roles (Admin, Intake Coordinator)
- **Calendly Integration**: Embedded scheduling widget
- **Google Sheets Integration**: Form submissions stored automatically
- **Email Notifications**: Confirmation to clients, alerts to intake team
- **SEO Optimized**: Meta tags, Open Graph, structured data for local business
- **Mobile-First Design**: Responsive, accessible, WCAG compliant

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Authentication**: Supabase Auth (to be configured)
- **Database**: Supabase PostgreSQL (to be configured)
- **Form Storage**: Google Sheets API
- **Email**: Resend or SendGrid
- **Hosting**: Vercel (recommended)

## Getting Started

### 1. Clone and Install

```bash
cd haute-couture-homecare
npm install
```

### 2. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values (see Configuration section below).

### 3. Add Your Logo

Replace the placeholder logo in `public/`:

```
public/logo.png      # Main logo (recommended: 180x60px, transparent PNG)
public/logo-light.png # Light version for dark backgrounds
public/og-image.jpg  # Social sharing image (1200x630px)
public/hero-image.jpg # Hero section background image
public/why-us-image.jpg # About section image
public/about-hero.jpg # About page hero image
```

### 4. Update Configuration

Edit `src/lib/config.ts` to update:

- Phone number
- Email addresses
- Service area cities
- Calendly URL
- Social media links

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Configuration

### Required Environment Variables

See `.env.example` for all variables. Key ones:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `GOOGLE_SHEETS_ID` | Google Sheet ID for form submissions |
| `RESEND_API_KEY` | Email service API key |
| `INTAKE_EMAIL` | Email for intake notifications |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly scheduling link |

### Google Sheets Setup

1. Create a Google Cloud project
2. Enable the Google Sheets API
3. Create a service account and download credentials
4. Create a Google Sheet with columns:
   - Timestamp, Name, Phone, Email, Relationship, ZIP, Address, Start Date, Schedule, Services, Assistance Level, Mobility, Notes, Status
5. Share the sheet with your service account email
6. Add the Sheet ID and credentials to `.env.local`

### Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Copy the project URL and anon key to `.env.local`
3. Create the following tables:

```sql
-- Users table (extends auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  full_name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'client',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Care requests table
CREATE TABLE care_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  relationship TEXT,
  client_zip TEXT,
  client_address TEXT,
  start_date DATE,
  schedule_needed TEXT,
  service_types TEXT[],
  level_of_assistance TEXT,
  mobility_needs TEXT,
  notes TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain
3. Create an API key
4. Add to `.env.local`

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Domain Setup

1. Add your domain in Vercel project settings
2. Update DNS records as instructed
3. Update `NEXT_PUBLIC_SITE_URL` in environment variables

## Customization

### Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --ivory: #FFFEF7;
  --champagne: #F7E7CE;
  --charcoal: #2C2C2C;
  --gold: #C9A86C;
  /* ... */
}
```

### Services

Edit `src/lib/config.ts` to add, remove, or modify services.

### Pages

All pages are in `src/app/`. Edit any page directly.

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx           # Home
│   ├── services/          # Services page
│   ├── request-care/      # Request form page
│   ├── admin/             # Admin dashboard
│   ├── account/           # Client portal
│   └── api/               # API routes
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── ui/                # Reusable components
│   └── forms/             # Form components
└── lib/
    └── config.ts          # Site configuration
```

## Support

For questions about this website implementation, contact the development team.

For care inquiries, use the Request Care form on the website.
