import { Toaster } from "react-hot-toast";
import "./globals.css";
import CustomCursor from "./lib/Cursor";


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
      <head>
        <title>WEBINA DIGITAL</title>
        <link rel="icon" href="faviconI.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Study Abroad Services , For Students Looking For International Opportunities" />
        <meta name="keywords" content="Study Abroad, International Education, Study Abroad Services, Study Abroad Consultation, Study Abroad Opportunities, Study Abroad Programs, Study Abroad Admission, Study Abroad Visa, Study Abroad Scholarship, Study Abroad Financial Aid, Study Abroad Application, Study Abroad Documents, Study Abroad Visa Application, Study Abroad Scholarship Application, Study Abroad Financial Aid Application, Study Abroad Admission Application, Study Abroad Application Process, Study Abroad Application Process Steps, Study Abroad Application Process Step 1, Study Abroad Application Process Step 2, Study Abroad Application Process Step 3, Study Abroad Application Process Step 4, Study Abroad Application Process Step 5, Study Abroad Application Process Step 6, Study Abroad Application Process Step 7, Study Abroad Application Process Step 8, Study Abroad Application Process Step 9, Study Abroad Application Process Step 10" />
        <meta name="author" content="Study Abroad Agency" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffe662" />

        <meta property="og:title" content="Study Abroad Services , For Students Looking For International Opportunities" />
        <meta property="og:description" content="Study Abroad Services , For Students Looking For International Opportunities" />
        <meta property="og:image" content="faviconI.svg" />
        <meta property="og:type" content="website" />

      </head>
      <body>
        <CustomCursor />
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
      </body>



    </html>
  );
}
