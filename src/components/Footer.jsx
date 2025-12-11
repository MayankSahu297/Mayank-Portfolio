import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-card border-t border-gray-800 py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">Mayank Sahu</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Data Science & AI Engineer passionate about building intelligent solutions
                            and impactful technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="block text-gray-400 hover:text-accent-cyan transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                        <div className="flex gap-4 mb-4">
                            <a
                                href="https://github.com/MayankSahu297"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark-bg border border-gray-800 rounded-lg hover:border-accent-cyan 
                         transition-all duration-300 hover:scale-110 group"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5 group-hover:text-accent-cyan transition-colors" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mayank-sahu-0a2bb42ba"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark-bg border border-gray-800 rounded-lg hover:border-accent-cyan 
                         transition-all duration-300 hover:scale-110 group"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 group-hover:text-accent-cyan transition-colors" />
                            </a>
                            <a
                                href="mailto:mayanksahu297@gmail.com"
                                className="p-3 bg-dark-bg border border-gray-800 rounded-lg hover:border-accent-cyan 
                         transition-all duration-300 hover:scale-110 group"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5 group-hover:text-accent-cyan transition-colors" />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            mayanksahu297@gmail.com
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Mayank Sahu. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
