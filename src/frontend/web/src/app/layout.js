import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";
import JsonLd from "../components/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://mindmantraa.com";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mind Mantra | Mental Health & Psychological Wellness Center",
    template: "%s | Mind Mantra",
  },
  description:
    "Where Healing Begins, Growth Continues, and Wellbeing Flourishes. Book a session with Ms. Gauri for Psychological Counseling, OCD Treatment, Relationship Counseling, and Sexual Wellness in India.",
  keywords: [
    "mental health counseling India",
    "psychological therapy",
    "OCD treatment India",
    "clinical psychologist",
    "online therapy India",
    "relationship counseling",
    "sexual wellness therapy",
    "anxiety treatment",
    "depression counseling",
    "Mind Mantra",
    "Ms. Gauri psychologist",
    "CBT therapy India",
    "ERP therapy OCD",
    "mental wellness center",
    "book therapy session online",
  ],
  authors: [{ name: "Mind Mantra", url: BASE_URL }],
  creator: "Mind Mantra",
  publisher: "Mind Mantra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Mind Mantra",
    title: "Mind Mantra | Mental Health & Psychological Wellness Center",
    description:
      "Where Healing Begins, Growth Continues, and Wellbeing Flourishes. Expert psychological counseling, OCD treatment & relationship therapy in India.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Mind Mantra - Mental Health & Psychological Wellness Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind Mantra | Mental Health & Psychological Wellness Center",
    description:
      "Expert psychological counseling, OCD treatment & relationship therapy in India. Book a session today.",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/favicon/favicon.ico",
    apple: [
      { url: "/images/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "jSboQyJPTMovKwsFgEcIep0CQSqe1tD8xxeX8TeQXa4",
  },
};

// Site-wide MedicalBusiness structured data
const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "Mind Mantra",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/images/hero.jpg`,
  description:
    "Mind Mantra is a specialized mental health and psychological wellness center offering clinical therapy, OCD treatment, relationship counseling, and sexual wellness services.",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Online Transfer, UPI",
  medicalSpecialty: [
    "Psychiatry",
    "Clinical Psychology",
    "Behavioral Health",
  ],
  availableService: [
    { "@type": "MedicalTherapy", name: "Psychological Counseling" },
    { "@type": "MedicalTherapy", name: "OCD Treatment (ERP & CBT)" },
    { "@type": "MedicalTherapy", name: "Relationship Counseling" },
    { "@type": "MedicalTherapy", name: "Sexual Wellness Therapy" },
  ],
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  founder: {
    "@type": "Person",
    name: "Ms. Gauri",
    jobTitle: "Clinical Psychologist",
    worksFor: { "@type": "Organization", name: "Mind Mantra" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <head>
        <JsonLd data={businessSchema} />
        <meta name="msapplication-TileColor" content="#1f3f43" />
        <meta name="theme-color" content="#1f3f43" />
      </head>
      <body className="min-h-full flex flex-col justify-between">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}


