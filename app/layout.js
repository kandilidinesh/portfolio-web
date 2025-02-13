import "@/globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
    icons: {
        icon: "/bg_removed.png" // This points to your favicon inside the public folder
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
            </body>
        </html>
    );
}
