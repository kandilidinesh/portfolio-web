import "@/globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
    icons: {
        icon: "/favico.svg" // This points to your favicon inside the public folder
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-900 text-white">
                <Navbar />
                <main className="min-h-screen flex flex-col justify-center">
                    {children}
                </main>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
