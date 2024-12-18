"use client";
import { ThirdwebProvider } from "thirdweb/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThirdwebProvider>
    <html lang="en">
        {children}
    </html>
    </ThirdwebProvider>
  );
}
