import { Toaster } from "react-hot-toast";

import "./globals.css";


import ClientWrapper from "./client";
import Head from "next/head";
import GoogleAnalytics from "./lib/GoogleAnalyze";


export const metadata = {
  title: "WEBINA DIGITAL",
  description: "Make your dream digital application with webina digital, using only your ideas",
  icons: {
    icon: '/favicon.ico',
  },
};




export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" />

        <title>WEBINA DIGITAL</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Make your business visible online with webina digital" />
        <meta name="keywords" content="web development services, professional website design, custom web development, affordable website design, responsive web design, ecommerce website development, digital marketing services, SEO optimization, website redesign services, website maintenance, mobile app development, UI/UX design services, graphic design services" />
        <meta name="author" content="Webina Digital" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#ffe662" />

        <meta property="og:title" content="Webina Digital , Digitalize your business and take the attention of new clients" />
        <meta property="og:description" content="Make your business visible online with webina digital" />
        <meta property="og:url" content="https://webinadigital.com/" />
        <meta property="og:site_name" content="Webina Digital" />
        <meta property="og:keywords" content="web development services, professional website design, custom web development, affordable website design, responsive web design, ecommerce website development, digital marketing services, SEO optimization, website redesign services, website maintenance, mobile app development, UI/UX design services, graphic design services" />
        <meta property="og:image" content="/favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />

      </Head>
      <body>
        <ClientWrapper>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: '#fff',
                color: '#000',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '16px',
                borderRadius: '8px',
              },
            }} />
        </ClientWrapper>


        <GoogleAnalytics />
      </body>



    </html>
  );
}
