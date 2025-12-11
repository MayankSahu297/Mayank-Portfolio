import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Wiki Quiz App',
            short: 'Dynamic quiz generation from Wikipedia articles',
            description: 'Built a dynamic quiz application that generates interactive questions from any Wikipedia article using automated content extraction.',
            fullDescription: `A comprehensive quiz application that transforms Wikipedia articles into engaging learning experiences. 
      
      **Key Features:**
      - Automated content extraction from Wikipedia
      - Intelligent question generation
      - Quiz history tracking
      - Scoring system with difficulty levels
      - Topic-based exploration
      - Responsive, modern UI
      
      **Technical Highlights:**
      - Backend built with Python and FastAPI for high performance
      - Frontend using HTML, CSS, and JavaScript
      - RESTful API architecture
      - PostgreSQL database for data persistence`,
            tech: ['Python', 'FastAPI', 'HTML/CSS', 'JavaScript', 'PostgreSQL'],
            github: 'https://github.com/MayankSahu297/Wiki-Quiz-App',
            live: 'https://wiki-quiz-apps.onrender.com/app.html',
            image: '/assets/wiki-quiz.png',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Automated Resume Grader',
            short: 'AI-powered resume evaluation system',
            description: 'Developed an AI-powered resume evaluation system that analyzes resumes based on keywords, formatting, job-match relevance, and content quality.',
            fullDescription: `An intelligent resume screening system that automates the evaluation process using NLP and machine learning.
      
      **Key Features:**
      - Keyword extraction and matching
      - Formatting quality analysis
      - Job-match relevance scoring
      - Content quality assessment
      - Structured, actionable feedback
      - Automated parsing pipeline
      
      **Technical Highlights:**
      - NLP techniques for text analysis
      - Scikit-learn for ML models
      - Python backend
      - Significantly reduces manual screening effort
      - Improves shortlisting accuracy`,
            tech: ['Python', 'NLP', 'Scikit-learn', 'Machine Learning'],
            github: 'https://github.com/MayankSahu297/Anveshan-Hackathon',
            live: 'https://anveshan-hackathon.onrender.com/',
            image: '/assets/resume-grader.png',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Personal Budget Tracker',
            short: 'Full-stack budget management application',
            description: 'Built a full-stack budget management application to track income, expenses, savings, and spending patterns in real time.',
            fullDescription: `A comprehensive financial management tool that helps users track and visualize their spending habits.
      
      **Key Features:**
      - Real-time transaction tracking
      - Income and expense categorization
      - Savings goals and progress
      - Interactive visual dashboards
      - User authentication and security
      - Spending pattern analysis
      
      **Technical Highlights:**
      - React.js frontend with responsive design
      - Node.js and Express backend
      - MongoDB for flexible data storage
      - RESTful API architecture
      - Clean, intuitive UI/UX
      - Optimized for performance`,
            tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/MayankSahu297/Masai-MERN-Project-Final',
            live: 'https://masai-mern-project-final.onrender.com/',
            image: '/assets/budget-tracker.png',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            title: 'LogisTech',
            short: 'Automated Warehouse Management System',
            description: 'Full-stack automated warehouse orchestration system simulating real-world logistics workflows.',
            fullDescription: `A sophisticated warehouse management system that demonstrates advanced algorithms and data structures in action.
      
      **Key Features:**
      - Automated package ingestion
      - Smart storage bin recommendations using Binary Search
      - Truck loading optimization with Stack logic
      - Fragile shipment validation via Backtracking
      - Centralized Singleton Controller
      - SQL audit logs for full traceability
      - Modern, responsive UI
      
      **Technical Highlights:**
      - Full-stack architecture
      - Algorithm-driven decision making
      - Real-time task orchestration
      - Database-backed reliability
      - Simulates real-world logistics
      - Production-ready deployment`,
            tech: ['Python', 'FastAPI', 'SQL', 'HTML/CSS', 'JavaScript', 'Algorithms'],
            github: 'https://github.com/MayankSahu297/Automated-Warehouse-System',
            live: 'https://logistech-prime.onrender.com/',
            image: '/assets/logistech.png',
            gradient: 'from-orange-500 to-red-500',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-dark-bg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Real-world applications combining AI, full-stack development, and clean engineering
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-card overflow-hidden card-hover group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-dark-lighter overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `
                      <div class="flex items-center justify-center h-full">
                        <div class="text-center">
                          <div class="text-4xl mb-2">🚀</div>
                          <p class="text-gray-400">${project.title}</p>
                        </div>
                      </div>
                    `;
                                    }}
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-dark-bg border border-gray-800 rounded-full text-xs text-accent-cyan"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-accent-cyan text-accent-cyan rounded-lg hover:bg-accent-cyan hover:text-dark-bg transition-all duration-300"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-cyan to-accent-green text-dark-bg rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all duration-300"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex-1 px-4 py-2 border border-accent-green text-accent-green rounded-lg hover:bg-accent-green hover:text-dark-bg transition-all duration-300"
                                    >
                                        Case Study
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Case Study */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-dark-card/95 backdrop-blur-lg p-6 border-b border-gray-800 flex justify-between items-center">
                            <h3 className="text-3xl font-bold gradient-text">{selectedProject.title}</h3>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="p-2 hover:bg-dark-lighter rounded-lg transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Project Image */}
                            <div className="relative h-64 bg-dark-lighter rounded-lg overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-20`}></div>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Full Description */}
                            <div className="prose prose-invert max-w-none">
                                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                    {selectedProject.fullDescription}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-xl font-bold text-accent-cyan mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-dark-bg border border-accent-cyan rounded-lg text-accent-cyan"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 pt-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-accent-cyan text-accent-cyan rounded-lg hover:bg-accent-cyan hover:text-dark-bg transition-all duration-300 font-semibold"
                                >
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a>
                                <a
                                    href={selectedProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-green text-dark-bg rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all duration-300 font-semibold"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
