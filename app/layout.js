import { Roboto, Poppins, Oswald } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
// import Social from "@/components/Landingpage/Social";
import Stickybutton from "@/components/Landingpage/Stickybutton";
import Script from "next/script";
import WhatsAppSticky from "@/components/Landingpage/WhatsAppSticky";
import Popup from "@/components/Popup";
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
  title: " machine airless",
  description:
    "machine airless",
  icons: {
    icon: "/vands-logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${roboto.variable} ${poppins.variable} ${oswald.variable} antialiased`}>
        <LayoutWrapper>
         <Popup/>
          <Stickybutton />
          <WhatsAppSticky/>
          {children}
        </LayoutWrapper>
      </body>

    </html>
  );
}