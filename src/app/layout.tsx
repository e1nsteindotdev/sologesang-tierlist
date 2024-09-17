import "@/styles/globals.css";
import "@/styles/icons.css";
import "@/styles/tier-colors.css";
import localFont from 'next/font/local'
import { Montserrat } from "next/font/google"

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "TFT TIERLIST",
  description: "a tft tierlist created by sologesang",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


const montserrat = Montserrat({ subsets: ['latin'], variable: "--font-montserrat", display: "swap" })
const druk = localFont({
  src: [
    {
      path: '../../public/fonts/druk/DrukText-Super-Trial.otf',
      weight: '900',
      style: "normal"
    },
    {
      path: '../../public/fonts/druk/DrukText-Heavy-Trial.otf',
      weight: '800',
      style: "normal"
    },
    {
      path: '../../public/fonts/druk/DrukText-Bold-Trial.otf',
      weight: '700',
      style: "normal"
    },
    {
      path: '../../public/fonts/druk/DrukText-Medium-Trial.otf',
      weight: '500',
      style: "normal"
    },
  ],
  variable: "--font-druk",
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${druk.className} ${montserrat.className}`}>
      <body>{children}</body>
    </html>
  );
}


// Font files can be colocated inside of `app`
