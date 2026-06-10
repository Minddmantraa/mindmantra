# 🌿 Mind Mantra — SEO & Google Search Console Documentation

**Domain:** `https://mindmantraa.com`
**Repository:** `https://github.com/Minddmantraa/mindmantra`
**Last Updated:** June 2026

---

## 📋 Table of Contents

1. [What Was Implemented](#1-what-was-implemented)
2. [File Reference](#2-file-reference)
3. [Per-Page SEO Metadata](#3-per-page-seo-metadata)
4. [Google Search Console Setup](#4-google-search-console-setup)
5. [Sitemap](#5-sitemap)
6. [Robots.txt](#6-robotstxt)
7. [Structured Data (JSON-LD Schema)](#7-structured-data-json-ld-schema)
8. [Favicon & Icons](#8-favicon--icons)
9. [Open Graph Image](#9-open-graph-image)
10. [Web App Manifest](#10-web-app-manifest)
11. [Future Tasks](#11-future-tasks)

---

## 1. What Was Implemented

| Feature | Status | Details |
|---|---|---|
| Sitemap | ✅ Done | Auto-generated at `/sitemap.xml` |
| robots.txt | ✅ Done | Auto-generated at `/robots.txt` |
| Per-page metadata | ✅ Done | All 7 pages have unique titles, descriptions, keywords |
| Canonical URLs | ✅ Done | All pages declare canonical URL |
| Open Graph tags | ✅ Done | All pages — for WhatsApp, Facebook, LinkedIn previews |
| Twitter cards | ✅ Done | All pages — `summary_large_image` type |
| JSON-LD Schema | ✅ Done | `MedicalBusiness` + `LocalBusiness` site-wide |
| Favicon (all sizes) | ✅ Done | 16×16, 32×32, 96×96, all Apple & Android sizes |
| Web App Manifest | ✅ Done | `/manifest.json` with brand colors |
| OG Image | ✅ Done | `/images/og-image.jpg` (1200×630) |
| Google Verification | ✅ Done | Token added to `layout.js` |
| Sitemap submitted | ✅ Done | `https://mindmantraa.com/sitemap.xml` |

---

## 2. File Reference

| File | Location | Purpose |
|---|---|---|
| `sitemap.js` | `src/app/sitemap.js` | Generates `/sitemap.xml` |
| `robots.js` | `src/app/robots.js` | Generates `/robots.txt` |
| `layout.js` | `src/app/layout.js` | Global metadata, schema, verification token |
| `JsonLd.js` | `src/components/JsonLd.js` | Injects JSON-LD structured data |
| `manifest.json` | `public/manifest.json` | Web app manifest for PWA support |
| `og-image.jpg` | `public/images/og-image.jpg` | Social media preview image (1200×630) |
| Favicon folder | `public/images/favicon/` | All favicon sizes (ICO, PNG, Apple, Android) |

---

## 3. Per-Page SEO Metadata

### 🏠 Home Page
> Metadata is set in `layout.js` (serves as the home page default)

- **Title:** `Mind Mantra | Mental Health & Psychological Wellness Center`
- **Description:** Where Healing Begins, Growth Continues, and Wellbeing Flourishes. Book a session with Ms. Gauri for Psychological Counseling, OCD Treatment, Relationship Counseling, and Sexual Wellness in India.
- **Canonical:** `https://mindmantraa.com`
- **Keywords:** mental health counseling India, OCD treatment India, clinical psychologist, online therapy India, relationship counseling, sexual wellness therapy, CBT therapy India, ERP therapy OCD, Ms. Gauri psychologist

---

### ℹ️ About Page (`/about`)
- **Title:** `About Us | Mind Mantra - Clinical Psychology & OCD Treatment`
- **Canonical:** `https://mindmantraa.com/about`
- **Keywords:** about Mind Mantra, Ms. Gauri clinical psychologist, evidence-based therapy India, OCD specialist, clinical psychology center

---

### 🩺 Services Page (`/services`)
- **Title:** `Clinical Psychological & Mental Health Services | Mind Mantra`
- **Canonical:** `https://mindmantraa.com/services`
- **Keywords:** OCD therapy India, CBT ERP therapy, relationship counseling India, sexual wellness therapy India, DBT ACT EMDR therapy

---

### 🧠 Clinical Expertise (`/clinical-expertise`)
- **Title:** `Clinical Expertise | Ms. Gauri - OCD, Anxiety & Psychological Therapy`
- **Canonical:** `https://mindmantraa.com/clinical-expertise`
- **Keywords:** OCD specialist India, ERP treatment OCD, anxiety specialist India, trauma therapy India, ADHD treatment, Ms. Gauri OCD specialist

---

### 📅 Appointment (`/appointment`)
- **Title:** `Book a Therapy Session Online | Mind Mantra`
- **Canonical:** `https://mindmantraa.com/appointment`
- **Keywords:** book therapy session India, online mental health appointment, book OCD therapist India, Mind Mantra appointment

---

### 📞 Contact (`/contact`)
- **Title:** `Contact Us | Mind Mantra - Mental Health Center, New Delhi`
- **Canonical:** `https://mindmantraa.com/contact`
- **Keywords:** Mind Mantra contact, mental health clinic New Delhi, therapy center Safdarjung Enclave

---

### 📖 DSM-5 Guide (`/dsm-5`)
- **Title:** `Mental Health Conditions Guide (DSM-5) | Mind Mantra`
- **Canonical:** `https://mindmantraa.com/dsm-5`
- **Keywords:** DSM-5 mental disorders list, psychological disorders India, OCD symptoms classification, ADHD symptoms guide

---

## 4. Google Search Console Setup

### Verification
- **Method:** HTML meta tag (Next.js `verification.google` in metadata)
- **Token:** `jSboQyJPTMovKwsFgEcIep0CQSqe1tD8xxeX8TeQXa4`
- **Where set:** `src/app/layout.js` → `metadata.verification.google`
- **Status:** ✅ Token live in codebase and pushed to GitHub

> [!IMPORTANT]
> If you ever lose access to Google Search Console or need to re-verify, the token is stored in `layout.js`. Do NOT delete or change this value.

### Steps Completed
1. ✅ Added property `mindmantraa.com` (Domain type) in Google Search Console
2. ✅ Google verification token added to `layout.js`
3. ✅ Sitemap submitted: `https://mindmantraa.com/sitemap.xml`

### Accessing Search Console
- URL: [search.google.com/search-console](https://search.google.com/search-console)
- Property: `mindmantraa.com`

---

## 5. Sitemap

- **URL:** `https://mindmantraa.com/sitemap.xml`
- **File:** `src/app/sitemap.js`
- **Generated by:** Next.js 13+ native sitemap support
- **Submitted to Google:** ✅ Yes

### Pages in Sitemap

| URL | Priority | Update Frequency |
|---|---|---|
| `https://mindmantraa.com` | 1.0 | Weekly |
| `https://mindmantraa.com/services` | 0.9 | Weekly |
| `https://mindmantraa.com/appointment` | 0.9 | Weekly |
| `https://mindmantraa.com/about` | 0.8 | Monthly |
| `https://mindmantraa.com/clinical-expertise` | 0.8 | Monthly |
| `https://mindmantraa.com/dsm-5` | 0.7 | Monthly |
| `https://mindmantraa.com/contact` | 0.7 | Monthly |

---

## 6. Robots.txt

- **URL:** `https://mindmantraa.com/robots.txt`
- **File:** `src/app/robots.js`

```
User-agent: *
Allow: /
Disallow: /_next/
Disallow: /api/
Sitemap: https://mindmantraa.com/sitemap.xml
Host: https://mindmantraa.com
```

---

## 7. Structured Data (JSON-LD Schema)

**Type:** `MedicalBusiness` + `LocalBusiness`
**Injected via:** `JsonLd.js` component in `layout.js` `<head>`
**Visible to Google:** Yes — enables rich results in search

### Schema Fields Set

| Field | Value |
|---|---|
| `@type` | MedicalBusiness, LocalBusiness |
| `name` | Mind Mantra |
| `url` | https://mindmantraa.com |
| `logo` | https://mindmantraa.com/images/logo.png |
| `image` | https://mindmantraa.com/images/hero.jpg |
| `priceRange` | ₹₹ |
| `currenciesAccepted` | INR |
| `paymentAccepted` | Cash, Online Transfer, UPI |
| `medicalSpecialty` | Psychiatry, Clinical Psychology, Behavioral Health |
| `founder` | Ms. Gauri (Clinical Psychologist) |
| `availableLanguage` | English, Hindi |

> [!TIP]
> To add your address, phone number, opening hours and social media links to the schema (improves rich results significantly), update the `businessSchema` object in `src/app/layout.js`.

---

## 8. Favicon & Icons

All favicon files are located in `public/images/favicon/`.

| Type | Sizes | Files |
|---|---|---|
| Standard ICO | Any | `favicon.ico` |
| PNG | 16×16, 32×32, 96×96 | `favicon-16x16.png`, etc. |
| Apple iOS | 57–180px (9 sizes) | `apple-icon-*.png` |
| Android | 36–192px (6 sizes) | `android-icon-*.png` |
| Microsoft | 70–310px (4 sizes) | `ms-icon-*.png` |

The `src/app/favicon.ico` is also replaced with the Mind Mantra brand favicon.

---

## 9. Open Graph Image

- **File:** `public/images/og-image.jpg`
- **Dimensions:** 1200 × 630 px
- **Used for:** WhatsApp, Facebook, LinkedIn, Twitter link previews
- **Content:** Mind Mantra branding — logo, name, tagline, domain on dark teal background

All pages reference this image via the `openGraph.images` metadata field.

---

## 10. Web App Manifest

- **File:** `public/manifest.json`
- **Referenced in:** `layout.js` → `metadata.manifest`

```json
{
  "name": "Mind Mantra — Mental Health & Psychological Wellness",
  "short_name": "Mind Mantra",
  "theme_color": "#1f3f43",
  "background_color": "#1f3f43",
  "display": "standalone"
}
```

Enables "Add to Home Screen" on Android and iOS for a PWA-like experience.

---

## 11. Future Tasks

> [!NOTE]
> These items are pending and should be completed when ready.

| Task | Details |
|---|---|
| Add Razorpay API key | Replace dummy payment in appointment form with live key |
| Add address to JSON-LD schema | Add full address object to `businessSchema` in `layout.js` |
| Add phone to JSON-LD schema | Add `telephone` field to `businessSchema` |
| Add opening hours to schema | Add `openingHoursSpecification` array |
| Add social media links | Add Instagram/Facebook URLs to `businessSchema.sameAs` array |
| Add Google Analytics | Add GA4 tracking ID via `@next/third-parties` |
| Add more pages to sitemap | Blog posts, new service pages as site grows |
| Monitor Search Console | Check indexing status, coverage errors, and keyword rankings weekly |
