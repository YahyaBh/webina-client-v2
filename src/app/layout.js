import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Context/ThemeContext";


export const metadata = {
  title: "WEBINA DIGITAL",
  description: "Make your dream digital application with webina digital, using only your ideas",
  icons: {
    icon: '/favicon.ico',
  },
};




export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
