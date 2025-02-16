"use client";
import { useEffect, useRef } from "react";
import "./styles.css";

const generateSnowflakes = (count) => {
    if (typeof window === "undefined") return [];

    return Array.from({ length: count }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 1.5 + 0.5
    }));
};

export default function Home() {
    const canvasRef = useRef(null);
    const snowflakesRef = useRef(generateSnowflakes(100));

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            snowflakesRef.current = generateSnowflakes(100);
        };

        const animateSnow = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";

            snowflakesRef.current.forEach((flake) => {
                flake.y += flake.speed;
                flake.x += Math.sin(flake.y * 0.02) * 0.5;

                if (flake.y > canvas.height) {
                    flake.y = 0;
                    flake.x = Math.random() * canvas.width;
                }

                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animateSnow);
        };

        resizeCanvas();
        animateSnow();

        window.addEventListener("resize", resizeCanvas);
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <title>Dinesh K N | Home</title>

            <div className="home-container">
                {/* Snowfall Effect */}
                <canvas
                    ref={canvasRef}
                    className="snowfall-background"></canvas>

                {/* Hero Title (Removed Snowflake Effect Here) */}
                <h1 className="hero-title">
                    One Line of Code at a Time
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle">
                    Backend | Cloud | JavaScript | Node.js
                </p>
            </div>
        </>
    );
}
