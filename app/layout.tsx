import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://banclubs.com"),
  title: "BAnCLUBS | Crea un Club de Business Angels",
  description:
    "Servicios especializados para la creación y llevanza de clubs de inversión en startups.",
  icons: {
    icon: "/favicon.png"
  },
  openGraph: {
    title: "BAnCLUBS | Crea un Club de Business Angels",
    description:
      "Servicios especializados para la creación y llevanza de clubs de inversión en startups.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/banclubs-logo.png",
        width: 1200,
        height: 630,
        alt: "BAnCLUBS"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BAnCLUBS | Crea un Club de Business Angels",
    description:
      "Servicios especializados para la creación y llevanza de clubs de inversión en startups.",
    images: ["/banclubs-logo.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={manrope.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
