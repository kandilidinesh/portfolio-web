"use client";
import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Digital Banking Portal",
            description:
                "Developing and maintaining scalable backend APIs using NestJS and Typescript.",
            technologies: [
                "NestJS",
                "Typescript",
                "Redis",
                "JWT Authentication",
                "PostgreSQL",
                "AWS S3"
            ],
            company: "Candescent",
            timeline: "Sep 2024 – Present"
        },
        {
            title: "Welbilt Kitchen Connect IoT Dashboard",
            description:
                "Developed high-performance REST APIs for seamless third-party integrations and optimized data flow.",
            technologies: [
                "Node.js",
                "AWS Lambda",
                "API Gateway",
                "IoT Core",
                "PostgreSQL"
            ],
            company: "HCL Technologies",
            timeline: "Apr 2022 – Sep 2024"
        },
        {
            title: "HRMS & Recruitment Management System",
            description:
                "Designed GraphQL APIs for HRMS & RMS platforms, improving system scalability and efficiency.",
            technologies: ["GraphQL", "Node.js", "Azure Cloud", "PostgreSQL"],
            company: "Wiznet India Pvt Ltd",
            timeline: "Jul 2020 – Mar 2022"
        },
        {
            title: "Background Removal Mobile App",
            description:
                "Developed a mobile app using Machine Learning models for image background removal.",
            technologies: [
                "React Native",
                "Python",
                "Machine Learning",
                "Android & iOS"
            ],
            company: "Iolite Technologies Pvt Ltd",
            timeline: "Jun 2019 – Jun 2020"
        },
        {
            title: "Research & Proof of Concept ML Projects",
            description:
                "Implemented multiple Machine Learning use cases for Research & Proof of Concept purposes.",
            technologies: ["Machine Learning", "Python"],
            company: "Microhard Infotech LLC",
            timeline: "Jun 2018 – Jun 2019"
        }
    ];

    return (
        <>
            <title>Dinesh K N | Contact</title>
            <meta
                name="description"
                content="Get in touch with Dinesh K N via email, LinkedIn, or GitHub."
            />
            <motion.div
                className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 md:px-16 pt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}>
                <div className="w-full max-w-[1400px] mx-auto">
                    {/* First Row: 3 projects */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}>
                        {projects.slice(0, 3).map((project, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-6 rounded-lg shadow-lg transition-transform"
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                whileHover={{ scale: 1.05 }}>
                                <div className="max-w-lg">
                                    <h2 className="text-xl font-bold">
                                        {project.title}
                                    </h2>
                                    <p className="mt-2 text-gray-300">
                                        {project.description}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="tech-badge px-3 py-1 text-sm rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="block mt-4 text-gray-500">
                                        <strong>{project.company}</strong> |{" "}
                                        {project.timeline}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Second Row: 2 projects centered */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mx-auto mt-8 w-full md:max-w-[900px]"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}>
                        {projects.slice(3, 5).map((project, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-6 rounded-lg shadow-lg transition-transform"
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                whileHover={{ scale: 1.05 }}>
                                <div className="max-w-lg">
                                    <h2 className="text-xl font-bold">
                                        {project.title}
                                    </h2>
                                    <p className="mt-2 text-gray-300">
                                        {project.description}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="tech-badge px-3 py-1 text-sm rounded-md">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="block mt-4 text-gray-500">
                                        <strong>{project.company}</strong> |{" "}
                                        {project.timeline}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}
