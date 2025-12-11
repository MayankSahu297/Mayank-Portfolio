import { Award, Users, Code } from 'lucide-react';

const About = () => {
    const achievements = [
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Creator-in-Residence',
            description: 'Masai School',
            link: 'https://drive.google.com/file/d/1xD-RkEqme8fEOrlq-wyTAHX-SD-tlyJY/view?usp=sharing'
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: 'Top 30 in CSE101',
            description: 'Masai School',
            link: 'https://drive.google.com/file/d/1D_mydh3WzWApx1WPl262ZQq7ev3AtMAg/view?usp=sharing'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Top 30 in MTH101',
            description: 'Masai School',
            link: 'https://drive.google.com/file/d/1JFX8gqrLDM-af7MnPZm48HGFw8HQpd0c/view?usp=sharing'
        },
    ];

    return (
        <section id="about" className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">About Me</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Passionate about solving real-world problems with AI and building impactful technologies
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <div className="glass-card p-8 space-y-6">
                            <h3 className="text-2xl font-bold text-accent-cyan">My Journey</h3>
                            <p className="text-gray-300 leading-relaxed">
                                I'm Mayank Sahu, a Data Science & AI student at <span className="text-accent-green font-semibold">IIT Guwahati</span> with
                                strong skills in machine learning, deep learning, and full-stack development.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                I enjoy building real-world projects that combine AI with clean, scalable engineering.
                                I'm always excited to learn, solve problems, and work on impactful technologies.
                            </p>

                            {/* Education Timeline */}
                            <div className="mt-6 pt-6 border-t border-gray-800">
                                <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
                                <div className="space-y-4">
                                    {/* IIT Guwahati */}
                                    <div className="relative pl-6 border-l-2 border-accent-cyan">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-cyan"></div>
                                        <div className="mb-1">
                                            <span className="text-sm text-gray-400">2024 - 2028</span>
                                        </div>
                                        <h5 className="text-lg font-semibold text-white">Bachelor of Science (Hons) in AI and Data Science</h5>
                                        <p className="text-accent-cyan font-medium">Indian Institute of Technology Guwahati</p>
                                        <p className="text-gray-400 text-sm mt-1">Guwahati, India</p>
                                    </div>

                                    {/* Masai School */}
                                    <div className="relative pl-6 border-l-2 border-accent-green">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-green"></div>
                                        <div className="mb-1">
                                            <span className="text-sm text-gray-400">2024 - 2025</span>
                                        </div>
                                        <h5 className="text-lg font-semibold text-white">Micro-Credit Program in Computer Science Domain</h5>
                                        <p className="text-accent-green font-medium">IIT Guwahati x Masai School</p>
                                        <p className="text-gray-400 text-sm mt-1">Bengaluru, India (from Daksh Gurukul)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Stats */}
                    <div className="space-y-6">
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold text-accent-green mb-6">Quick Stats</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Projects Completed</span>
                                    <span className="text-2xl font-bold gradient-text">10+</span>
                                </div>
                                <div className="h-px bg-gray-800"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Technologies Mastered</span>
                                    <span className="text-2xl font-bold gradient-text">15+</span>
                                </div>
                                <div className="h-px bg-gray-800"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">GitHub Repositories</span>
                                    <span className="text-2xl font-bold gradient-text">20+</span>
                                </div>
                                <div className="h-px bg-gray-800"></div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Certifications</span>
                                    <span className="text-2xl font-bold gradient-text">3+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <h3 className="text-3xl font-bold text-center mb-8 gradient-text">Achievements & Recognition</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <a
                                key={index}
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card p-6 text-center card-hover group"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent-cyan to-accent-green text-dark-bg mb-4 group-hover:scale-110 transition-transform">
                                    {achievement.icon}
                                </div>
                                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-accent-cyan transition-colors">
                                    {achievement.title}
                                </h4>
                                <p className="text-gray-400">{achievement.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
