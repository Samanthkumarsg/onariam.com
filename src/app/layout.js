import { MuseoModerno, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-museo-moderno",
});
export const metadata = {
  title: "Onariam",
  description: "Stunning designs, seamless experiences, and websites that drive results crafted just for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${museoModerno.variable} ${plusJakartaSans.variable} antialiased `}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
