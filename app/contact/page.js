"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(null);
    const [lightTrails, setLightTrails] = useState([]);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setLightTrails((prev) => [
                ...prev.slice(-15),
                {
                    x: e.clientX,
                    y: e.clientY,
                    id: Math.random()
                }
            ]);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        // Generate a large number of particles instantly at the start
        const initialParticles = Array.from({ length: 50 }).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 6 + 2,
            opacity: Math.random() * 0.6 + 0.4, // Make them more visible initially
            id: Math.random()
        }));
        setParticles(initialParticles);

        // Gradual addition of particles after initial load
        const particleInterval = setInterval(() => {
            setParticles((prev) => [
                ...prev.slice(-100), // Keep max 100 particles
                {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 6 + 2,
                    opacity: Math.random() * 0.6 + 0.2,
                    id: Math.random()
                }
            ]);
        }, 800); // Reduced interval to speed up appearance

        return () => clearInterval(particleInterval);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const res = await fetch("https://formspree.io/f/meoelkyp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            setStatus("success");
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus(null), 3000);
        } else {
            setStatus("error");
            toast.error("Failed to send message. Try again!");
            setTimeout(() => setStatus(null), 3000);
        }
    };

    return (
        <>
            <title>Dinesh K N | Contact</title>
            <meta
                name="description"
                content="Get in touch with Dinesh K N via email, LinkedIn, or GitHub."
            />
            <Toaster position="bottom-right" reverseOrder={false} />

            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none bg-black overflow-hidden">
                {/* Futuristic Wave Effect */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(0, 200, 255, 0.3) 10%, rgba(0,0,0,0) 80%)",
                        filter: "blur(80px)"
                    }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating Glowing Particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-cyan-400 rounded-full pointer-events-none"
                        style={{
                            left: `${particle.x}px`,
                            top: `${particle.y}px`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            opacity: particle.opacity,
                            boxShadow: `0 0 ${
                                particle.size * 2
                            }px rgba(0, 255, 255, 0.5)`
                        }}
                        animate={{
                            y: [particle.y, particle.y - 100, particle.y], // Moves up & down
                            x: [
                                particle.x,
                                particle.x + (Math.random() * 10 - 5),
                                particle.x
                            ], // Slight sideways drift
                            opacity: [0.3, 0.7, 0.3] // Glowing effect
                        }}
                        transition={{
                            duration: Math.random() * 6 + 4, // Random duration for natural movement
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Light Trails */}
            {lightTrails.map((trail) => (
                <motion.div
                    key={trail.id}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full opacity-50 pointer-events-none"
                    style={{
                        left: `${trail.x}px`,
                        top: `${trail.y}px`
                    }}
                    initial={{ scale: 0.3 }}
                    animate={{ opacity: [0.8, 0.3, 0], scale: [1, 0.6, 0] }}
                    transition={{ duration: 0.4 }}
                />
            ))}

            <div className="h-screen flex flex-col justify-center items-center px-8 pt-20 relative text-white">
                <motion.h1
                    className="text-4xl font-bold mb-6 neon-text flex items-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    Let&apos;s Connect.
                </motion.h1>

                <motion.div
                    className="flex space-x-10 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}>
                    <motion.a
                        href="https://www.linkedin.com/in/kandili/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-blue-400 transition-all"
                        whileHover={{
                            scale: 1.2,
                            textShadow: "0px 0px 12px rgba(10, 102, 194, 0.8)"
                        }}>
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="https://github.com/kandilidinesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-gray-300 transition-all"
                        whileHover={{
                            scale: 1.2,
                            textShadow: "0px 0px 12px rgba(255, 255, 255, 0.8)"
                        }}>
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="mailto:kandilindinesh@gmail.com"
                        className="text-4xl text-red-400 transition-all"
                        whileHover={{
                            scale: 1.2,
                            textShadow: "0px 0px 12px rgba(255, 87, 51, 0.8)"
                        }}>
                        <FaEnvelope />
                    </motion.a>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="mt-6 w-full max-w-lg bg-black bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-blur-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <label className="block text-sm font-bold text-gray-300">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded mt-2 bg-gray-800 text-white border border-gray-600 focus:ring-cyan-400"
                    />

                    <label className="block text-sm font-bold mt-4 text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded mt-2 bg-gray-800 text-white border border-gray-600 focus:ring-cyan-400"
                    />

                    <label className="block text-sm font-bold mt-4 text-gray-300">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 h-32 rounded mt-2 bg-gray-800 text-white border border-gray-600 focus:ring-cyan-400"></textarea>

                    <motion.button
                        type="submit"
                        className="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded text-white font-bold text-lg shadow-md transition-all">
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </motion.button>
                </motion.form>
            </div>
        </>
    );
}
