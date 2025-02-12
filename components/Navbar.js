"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                        (item, index) => (
                            <Link
                                key={index}
                                href={
                                    item === "Home"
                                        ? "/"
                                        : `/${item.toLowerCase()}`
                                }
                                className="group">
                                {item}
                            </Link>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
}
