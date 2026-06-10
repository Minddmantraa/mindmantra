# Mind Mantra

Mind Mantra is a comprehensive single-page web portal for a Mental Health & Psychological Wellness Center.

## Project Architecture & Tech Stack

This repository uses a **Single-App Monorepo** layout:
* **Frontend Framework:** Next.js (App Router, JavaScript)
* **Styling:** Custom Vanilla CSS via CSS Modules (`page.module.css`) for pixel-perfect reproduction of premium layouts and curves.
* **Integrations:** Direct client-side WhatsApp redirection for secure, instant appointment booking.
* **Hosting:** Vercel (Production URL: [mindmantraa.com](https://mindmantraa.com) | Default: [mindmantra.vercel.app](https://mindmantra.vercel.app))

## Custom Domain Setup

The custom domain **mindmantraa.com** is registered on GoDaddy and configured with Vercel DNS.

### DNS Settings (GoDaddy)
* **Apex Domain (`mindmantraa.com`):**
  * Type: `A`
  * Name: `@`
  * Value: `216.198.79.1`
* **Subdomain (`www.mindmantraa.com`):**
  * Type: `CNAME`
  * Name: `www`
  * Value: `0828f323d552e89d.vercel-dns-017.com`

---

## Directory Structure

```text
mindmantra/
├── src/
│   └── frontend/
│       └── web/               # Next.js Application
│           ├── public/images/ # Visual assets & therapist photos
│           └── src/app/       # Routing page, styles, and layouts
├── docs/                      # Documentation
│   └── features.md            # Features directory
└── README.md                  # Development guide
```

---

## Running Locally

To run the Next.js web portal locally, navigate to the web directory and execute the package scripts:

```bash
# Navigate to web application directory
cd src/frontend/web

# Install dependencies (if not already installed)
npm install

# Start the local development server (port 3000)
npm run dev

# Compile optimized production build
npm run build
```
