// import { GeistSans } from "geist/font/sans";
import {Inter as FontSans} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

  export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "ToDo App",
    description: "A todo app with Next.js and Supabase",
  };  

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <html lang="en" >
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body> 
    </html>
  );
}
