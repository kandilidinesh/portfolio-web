"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
    const careerTimeline = [
        {
            year: "2024 - Present",
            role: "Software Engineer 3",
            company: "Candescent"
        },
        {
            year: "2022 - 2024",
            role: "Senior Software Engineer",
            company: "HCL Technologies"
        },
        {
            year: "2020 - 2022",
            role: "Backend Developer",
            company: "Wiznet India"
        },
        {
            year: "2019 - 2020",
            role: "Associate Software Engineer",
            company: "Iolite Technologies"
        },
        {
            year: "2018 - 2019",
            role: "Associate Software Engineer",
            company: "Microhard Infotech"
        }
    ];

    const techStack = [
        {
            name: "JavaScript",
            icon: "/icons/javascript.svg",
            level: "Advanced"
        },
        { name: "Node.js", icon: "/icons/nodejs.svg", level: "Advanced" },
        { name: "Express.js", icon: "/icons/express.svg", level: "Advanced" },
        { name: "AWS", icon: "/icons/aws.svg", level: "Advanced" },
        { name: "GraphQL", icon: "/icons/graphql.svg", level: "Advanced" },
        { name: "Azure", icon: "/icons/azure.svg", level: "Intermediate" },
        { name: "NestJS", icon: "/icons/nestjs.svg", level: "Intermediate" },
        {
            name: "TypeScript",
            icon: "/icons/typescript.svg",
            level: "Beginner"
        }
    ];

    return (
        <>
            <title>Dinesh K N | About</title>
            <meta name="description" content="About myself" />
            <div className="h-screen bg-gray-900 text-white flex flex-col items-center px-8 pt-20 overflow-hidden">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center neon-text"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    Dinesh K N
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-400 mt-1 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}>
                    Backend Engineer | Cloud Architect | DevOps Enthusiast
                </motion.p>

                {/* Career Timeline */}
                <h2 className="text-2xl font-semibold text-center neon-text mt-8">
                    Career Timeline
                </h2>
                {/* Career Timeline with Hexagons */}
                <div className="mt-6 w-full flex flex-wrap justify-center items-center relative">
                    {careerTimeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative flex justify-center items-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3, duration: 0.8 }}>
                            {/* Hexagon for Career Timeline */}
                            <div className="hexagon">
                                <div className="hexagon-inner">
                                    <div className="flex flex-col items-center justify-center text-center px-4">
                                        {/* Role in one line */}
                                        <h3 className="text-sm font-semibold">
                                            {item.role}
                                        </h3>
                                        {/* Company name in another line */}
                                        <p className="text-gray-300 text-sm">
                                            {item.company}
                                        </p>
                                        {/* Duration in another line */}
                                        <span className="text-sm text-gray-500">
                                            {item.year}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack Showcase */}
                <div className="mt-10 w-full text-center">
                    <h2 className="text-2xl font-semibold neon-text">
                        Tech Stack
                    </h2>
                    <div className="mt-3 flex flex-wrap justify-center gap-6 items-center relative">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center p-3 w-32 bg-gray-800 rounded-lg shadow-md hover:shadow-cyan-400 transition-all"
                                whileHover={{ scale: 1.1 }}>
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-12 h-12"
                                />
                                <p className="text-sm mt-2">{tech.name}</p>
                                <span className="text-xs text-gray-400">
                                    {tech.level}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
