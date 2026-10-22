import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/header/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-fraunces",
});

export const metadata: Metadata = {
    title: "GOMAD Craft Show",
    description:
        "Western New York's largest winter craft show, featuring over 100 vendors at Greece Olympia School.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
            {/* Extensions like Grammarly add attributes to <body> before
             * React hydrates; ignore those attribute mismatches. */}
            <body className="font-sans" suppressHydrationWarning>
                <div className="flex min-h-dvh flex-col">
                    <Navbar />
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
