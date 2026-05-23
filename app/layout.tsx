import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laculverde.com"),
  title: "Lacul Verde Sâncrai de Mureș | Pescuit Sportiv",
  description: "Se adresează exclusiv pescarilor pasionați și cu bun simț!",
  openGraph: {
    siteName: "Lacul Verde Sâncrai",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  name: "Lacul Verde Sâncrai",
  description: "Lac de pescuit sportiv în Sâncrai de Mureș, cu crap, somn, știucă și caras.",
  url: "https://www.laculverde.com",
  telephone: "+40744523284",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strada Principala 199B",
    addressLocality: "Sâncrai de Mureș",
    addressRegion: "Mureș",
    addressCountry: "RO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.5444098,
    longitude: 24.517671,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "06:00",
    closes: "20:00",
  },
  sameAs: ["https://facebook.com/lacul.verde"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${manrope.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
