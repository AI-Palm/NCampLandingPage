import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import Provider from "@/components/Provider";

import { cn } from "@/lib/utils"


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Landing Page NCamp",
  description: "Ncamp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-black font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          <main className='app'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
