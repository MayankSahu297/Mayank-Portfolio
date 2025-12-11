const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            color: 'from-accent-cyan to-blue-500',
            skills: ['C++', 'Python', 'SQL', 'JavaScript', 'R'],
        },
        {
            title: 'Web Development',
            color: 'from-accent-green to-emerald-500',
            skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'Flask', 'REST APIs'],
        },
        {
            title: 'AI & Machine Learning',
            color: 'from-purple-500 to-pink-500',
            skills: ['Machine Learning', 'NLP', 'Forecasting Models', 'AI Agents', 'Data Analysis', 'Optimization'],
        },
        {
            title: 'Core CS Skills',
            color: 'from-orange-500 to-red-500',
            skills: ['Data Structures & Algorithms', 'Problem Solving'],
        },
        {
            title: 'Tools',
            color: 'from-yellow-500 to-amber-500',
            skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-dark-card/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building intelligent, scalable solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 card-hover group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                                <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-4 py-2 bg-dark-bg border border-gray-800 rounded-lg text-sm text-gray-300 
                             hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 
                             hover:scale-105 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Info */}
                <div className="mt-12 text-center">
                    <div className="glass-card p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 gradient-text">Always Learning</h3>
                        <p className="text-gray-300 leading-relaxed">
                            I'm constantly expanding my skill set and staying up-to-date with the latest technologies
                            in AI, machine learning, and web development. Currently exploring advanced deep learning
                            architectures and cloud deployment strategies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
