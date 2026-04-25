import { Roboto, Poppins, Oswald } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
// import Social from "@/components/Landingpage/Social";

import Script from "next/script";

// Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Oswald
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Airless Painting Machine Manufacturer | Vands Engineering",
  description:
    "Buy from a reliable airless painting machine manufacturer. Vands Engineering Solutions offers advanced technology, durability, and wholesale pricing.",
icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${roboto.variable} ${poppins.variable} ${oswald.variable} antialiased`}>
        <LayoutWrapper>
    
          {children}
        </LayoutWrapper>
      </body>

    </html>
  );
}