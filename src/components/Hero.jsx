import { useState } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, Play, Image as ImageIcon } from 'lucide-react';

const Hero = () => {
    const [showVideo, setShowVideo] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDownload = async () => {
        try {
            const response = await fetch('/assets/Mayank-Sahu-Resume.pdf');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Mayank-Sahu-Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            // Fallback: open in new tab
            window.open('/assets/Mayank-Sahu-Resume.pdf', '_blank');
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden animated-bg">
            {/* Animated background particles */}
            <div className="particles absolute inset-0">
                <div className="absolute top-20 left-10 w-2 h-2 bg-accent-cyan rounded-full animate-ping"></div>
                <div className="absolute top-40 right-20 w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent-cyan rounded-full animate-ping delay-75"></div>
                <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-accent-green rounded-full animate-pulse delay-100"></div>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
                    {/* Left Column - Profile Photo + Info */}
                    <div className="space-y-6 animate-fade-in">
                        {/* Profile Photo with Video */}
                        <div className="flex flex-col items-center md:items-start mb-8">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-green rounded-full blur-2xl opacity-30 animate-pulse"></div>

                                {/* Photo or Video Container */}
                                <div className="relative w-48 h-48 rounded-full border-4 border-accent-cyan shadow-2xl shadow-accent-cyan/50 overflow-hidden bg-dark-bg">
                                    {!showVideo ? (
                                        // Profile Photo
                                        <img
                                            src="/assets/profile.jpg"
                                            alt="Mayank Sahu - Data Science & AI Developer"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x400/111827/22d3ee?text=Mayank+Sahu';
                                            }}
                                        />
                                    ) : (
                                        // Video Player
                                        <video
                                            className="w-full h-full object-cover"
                                            controls
                                            autoPlay
                                            src="/assets/intro-video.mp4"
                                            onError={(e) => {
                                                e.target.parentElement.innerHTML = `
                          <div class="flex flex-col items-center justify-center w-full h-full p-4 text-center bg-dark-bg">
                            <div class="text-4xl mb-2">🎥</div>
                            <p class="text-xs text-gray-400 mb-2">Video Not Found</p>
                            <p class="text-xs text-gray-500">Add intro-video.mp4 to public/assets/</p>
                          </div>
                        `;
                                            }}
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            </div>

                            {/* Toggle Button */}
                            <button
                                onClick={() => setShowVideo(!showVideo)}
                                className="mt-4 px-6 py-2 bg-gradient-to-r from-accent-cyan to-accent-green text-dark-bg font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all duration-300 flex items-center gap-2"
                            >
                                {showVideo ? (
                                    <>
                                        <ImageIcon className="w-4 h-4" />
                                        Show Photo
                                    </>
                                ) : (
                                    <>
                                        <Play className="w-4 h-4" />
                                        Play Intro Video
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Name and Bio */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold">
                                Hi, I'm <span className="gradient-text">Mayank Sahu</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300">
                                Data Science & AI Engineer | Full-Stack Developer
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                I'm a Data Science & AI student at IIT Guwahati with strong skills in machine learning,
                                deep learning, and full-stack development. I enjoy building real-world projects that combine
                                AI with clean, scalable engineering.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/MayankSahu297"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark-card border border-gray-800 rounded-lg hover:border-accent-cyan 
                         transition-all duration-300 hover:scale-110 group"
                                aria-label="GitHub Profile"
                            >
                                <Github className="w-6 h-6 group-hover:text-accent-cyan transition-colors" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mayank-sahu-587224318/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-dark-card border border-gray-800 rounded-lg hover:border-accent-cyan 
                         transition-all duration-300 hover:scale-110 group"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin className="w-6 h-6 group-hover:text-accent-cyan transition-colors" />
                            </a>
                            <a
                                href="mailto:mayanksahu297@gmail.com"
                                className="p-3 bg-dark-card border border-gray-800 rounded-lg hover:border-accent-cyan 
                         transition-all duration-300 hover:scale-110 group"
                                aria-label="Email"
                            >
                                <Mail className="w-6 h-6 group-hover:text-accent-cyan transition-colors" />
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={handleDownload}
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="btn-secondary"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>

                    {/* Right Column - 3D Model */}
                    <div className="relative glow-effect">
                        <div className="relative w-full h-[600px] glass-card p-8 overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                                <model-viewer
                                    src="/assets/mayank-3d.glb"
                                    alt="3D avatar of Mayank Sahu"
                                    camera-controls
                                    auto-rotate
                                    exposure="1"
                                    shadow-intensity="1"
                                    style={{ width: '100%', height: '100%', minHeight: '500px' }}
                                    role="img"
                                    aria-label="Interactive 3D model of Mayank Sahu"
                                >
                                    {/* Fallback for browsers that don't support model-viewer */}
                                    <div slot="poster" className="flex items-center justify-center h-full">
                                        <div className="text-center">
                                            <div className="w-20 h-20 mx-auto mb-4 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin"></div>
                                            <p className="text-gray-400">Loading 3D Model...</p>
                                            <p className="text-gray-500 text-sm mt-2">Add mayank-3d.glb to public/assets/</p>
                                        </div>
                                    </div>
                                </model-viewer>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="flex flex-col items-center gap-2 text-accent-cyan hover:text-accent-green transition-colors"
                        aria-label="Scroll to About section"
                    >
                        <span className="text-sm">Scroll Down</span>
                        <ChevronDown className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
