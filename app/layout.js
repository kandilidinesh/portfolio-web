import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-900 text-white">
                <Navbar />
                <main className="min-h-screen flex flex-col justify-center">
                    {children}
                </main>
                <Analytics />
            </body>
        </html>
    );
}
