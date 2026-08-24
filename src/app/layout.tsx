import type { Metadata } from "next";
import { Fira_Code, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alasaad.de"),

  title: {
    default: "Mostafa Alasaad | Android Developer & Software Engineer",
    template: "%s | Mostafa Alasaad",
  },

  description:
    "Portfolio of Mostafa Alasaad, an Android Developer and Software Engineering student based in Germany. Building modern mobile apps and responsive web applications with Kotlin, Java, React, Next.js and TypeScript.",

  keywords: [
    "Mostafa Alasaad",
    "Android Developer",
    "Software Engineer",
    "Portfolio",
    "Kotlin",
    "Java",
    "React",
    "Next.js",
    "TypeScript",
    "Germany",
    "Essen",
    "Web Developer",
  ],

  authors: [
    {
      name: "Mostafa Alasaad",
      url: "https://alasaad.de",
    },
  ],

  creator: "Mostafa Alasaad",

  openGraph: {
    title: "Mostafa Alasaad | Android Developer",
    description:
      "Personal portfolio showcasing Android development, web development and software engineering projects.",

    url: "https://alasaad.de",

    siteName: "Mostafa Alasaad",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mostafa Alasaad Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mostafa Alasaad | Android Developer",

    description:
      "Android Developer & Software Engineering student based in Germany.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${firaCode.variable} ${shareTechMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
