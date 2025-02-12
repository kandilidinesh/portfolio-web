export const metadata = {
    title: "Dinesh K N | Projects",
    description:
        "Explore projects built by Dinesh K N, including API development, cloud computing, and microservices architecture."
};

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
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 md:px-16 pt-20">
            <h1 className="text-4xl font-bold mb-8">Projects</h1>

            <div className="w-full max-w-[1400px] mx-auto">
                {/* First Row: 3 projects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
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
                        </div>
                    ))}
                </div>

                {/* Second Row: 2 projects centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mx-auto mt-8 w-full md:max-w-[900px]">
                    {projects.slice(3, 5).map((project, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
