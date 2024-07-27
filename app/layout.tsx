import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "GOMAD Craft Show",
    description: "GOMAD Craft Show",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div
                    className="h-dvh"
                    style={{
                        backgroundImage: "url(./grid-tile-4.png)",
                        backgroundPositionX: "50%",
                        backgroundPositionY: "20%",
                    }}
                >
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
