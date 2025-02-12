"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={scrolled ? "scrolled" : ""}>
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/bg_removed.png"
                        alt="Dinesh K N Logo"
                        width={45}
                        height={25}
                        className="nav-logo"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-8">
                    {["Home", "About", "Projects", "Contact"].map(
                        (item, index) => {
                            const itemPath =
                                item === "Home"
                                    ? "/"
                                    : `/${item.toLowerCase()}`;
                            const isActive = pathname === itemPath;
                            return (
                                <Link
                                    key={index}
                                    href={itemPath}
                                    className={`group transition duration-300 ${
                                        isActive
                                            ? "text-[#00ffc3]"
                                            : "text-gray-300"
                                    } hover:text-[#00ffc3]`}>
                                    {item}
                                </Link>
                            );
                        }
                    )}
                </div>
            </div>
        </nav>
    );
}
