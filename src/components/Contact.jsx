import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Please fill in all fields',
            });
            setIsSubmitting(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address',
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // EmailJS Configuration
            const SERVICE_ID = 'service_rs7ac5r';
            const TEMPLATE_ID = 'template_st6ru93';
            const PUBLIC_KEY = 'kHcxX2J2Y7Nq3LlOG';

            // Send email via EmailJS
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.',
            });
            setFormData({ name: '', email: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setStatus({ type: '', message: '' });
            }, 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            console.error('Error details:', {
                text: error.text,
                status: error.status,
                message: error.message
            });

            let errorMessage = 'Failed to send message. Please try again or email me directly at mayanksahu297@gmail.com';

            // Provide more specific error messages
            if (error.text) {
                if (error.text.includes('template')) {
                    errorMessage = 'Email template error. Please contact me directly at mayanksahu297@gmail.com';
                } else if (error.text.includes('service')) {
                    errorMessage = 'Email service error. Please contact me directly at mayanksahu297@gmail.com';
                } else if (error.text.includes('public_key') || error.text.includes('user_id')) {
                    errorMessage = 'Configuration error. Please contact me directly at mayanksahu297@gmail.com';
                }
            }

            setStatus({
                type: 'error',
                message: errorMessage,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-dark-card/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Let's connect!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Talk</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Feel free to reach out!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-dark-bg rounded-lg">
                                        <Mail className="w-6 h-6 text-accent-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Email</h4>
                                        <a
                                            href="mailto:mayanksahu297@gmail.com"
                                            className="text-gray-400 hover:text-accent-cyan transition-colors"
                                        >
                                            mayanksahu297@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-dark-bg rounded-lg">
                                        <MapPin className="w-6 h-6 text-accent-green" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Location</h4>
                                        <p className="text-gray-400">IIT Guwahati, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="glass-card p-8">
                            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                            <div className="space-y-3">
                                <a
                                    href="https://github.com/MayankSahu297"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-gray-400 hover:text-accent-cyan transition-colors"
                                >
                                    → GitHub Profile
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mayank-sahu-0a2bb42ba"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-gray-400 hover:text-accent-cyan transition-colors"
                                >
                                    → LinkedIn Profile
                                </a>
                                <a
                                    href="/assets/Mayank-Sahu-Resume.pdf"
                                    download="Mayank-Sahu-Resume.pdf"
                                    className="block text-gray-400 hover:text-accent-cyan transition-colors"
                                >
                                    → Download Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white 
                           focus:outline-none focus:border-accent-cyan transition-colors"
                                    placeholder="John Doe"
                                    aria-required="true"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white 
                           focus:outline-none focus:border-accent-cyan transition-colors"
                                    placeholder="john@example.com"
                                    aria-required="true"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white 
                           focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                                    placeholder="Your message here..."
                                    aria-required="true"
                                ></textarea>
                            </div>

                            {/* Status Message */}
                            {status.message && (
                                <div
                                    className={`flex items-center gap-2 p-4 rounded-lg ${status.type === 'success'
                                        ? 'bg-accent-green/10 border border-accent-green text-accent-green'
                                        : 'bg-red-500/10 border border-red-500 text-red-500'
                                        }`}
                                >
                                    {status.type === 'success' ? (
                                        <CheckCircle className="w-5 h-5" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5" />
                                    )}
                                    <p className="text-sm">{status.message}</p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
