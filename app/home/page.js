"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./styles.css"; // Importing the external CSS file

const generateStars = (count) => {
    if (typeof window === "undefined") return []; // ✅ Prevents SSR errors

    return Array.from({ length: count }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1.5 + 0.5
    }));
};

// Typing Effect Hook
const useTypingEffect = (text, speed = 100) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.slice(0, i + 1)); // Take only the first i+1 characters
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return displayText;
};

export default function Home() {
    const canvasRef = useRef(null);
    const starsRef = useRef(generateStars(150));
    const glowRef = useRef(null);

    const tagline = useTypingEffect(
        "Backend | Cloud | JavaScript | Node.js",
        80
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const animateStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00eaff";

            starsRef.current.forEach((star) => {
                star.y += star.speed;
                if (star.y > canvas.height) star.y = 0;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animateStars);
        };

        animateStars();

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            starsRef.current = generateStars(150);
        });

        // Mouse move event for glow effect
        const handleMouseMove = (e) => {
            if (glowRef.current) {
                const glowSize = 100; // Keep it same as CSS
                glowRef.current.style.left = `${e.clientX - glowSize / 2}px`;
                glowRef.current.style.top = `${e.clientY - glowSize / 2}px`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <title>Dinesh K N | Home</title>
            <meta
                name="description"
                content="Welcome to my portfolio. I am a Backend Engineer specializing in Node.js, AWS, and GraphQL."
            />
            <div className="home-container">
                {/* Starry Background */}
                <canvas ref={canvasRef} className="starry-background"></canvas>

                {/* Glow Effect (Mouse Follower) */}
                <div ref={glowRef} className="mouse-glow"></div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}>
                    Innovating the Future, One Line of Code at a Time{" "}
                    <span className="ml-2">
                        <svg
                            className="thunder-icon"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13 2L3 14H12L11 22L21 10H13L13 2Z"
                                stroke="#00eaff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </motion.h1>
                {/* Typing Subtitle with Glow */}
                <motion.p
                    className="hero-subtitle"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 15px #00eaff"
                    }}>
                    {tagline}
                </motion.p>

                {/* Glow Effect Overlay */}
                <div className="overlay"></div>
            </div>
        </>
    );
}
