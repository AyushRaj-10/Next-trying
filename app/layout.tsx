
import type { Metadata } from "next";

import "./globals.css";
import ClientProvider from "@/ClientProvider";



export const metadata: Metadata = {
  title: "Next JS",
  description: "this is my first project of Ultimate Backend Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
   <ClientProvider>

        {children}

    </ClientProvider>
      
      </body>
    </html>
  );
}