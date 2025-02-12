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
            link: "#" // Private project
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
            link: "#" // Private project
        },
        {
            title: "HRMS & Recruitment Management System",
            description:
                "Designed GraphQL APIs for HRMS & RMS platforms, improving system scalability and efficiency.",
            technologies: ["GraphQL", "Node.js", "Azure Cloud", "PostgreSQL"],
            link: "#" // Private project
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
            link: "#" // Private project
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-8 pt-20">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 w-full max-w-5xl">
                {projects.map((project, index) => (
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
                                Private Project
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
