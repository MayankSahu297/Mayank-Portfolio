// Vercel Serverless Function for AI Chatbot
// This file handles chat requests and communicates with Google Gemini API

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message } = req.body;

        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: 'Invalid message' });
        }

        // Get Gemini API key from environment variables
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

        if (!GEMINI_API_KEY) {
            console.error('GEMINI_API_KEY not found in environment variables');
            return res.status(500).json({
                error: 'API key not configured',
                response: "I'm not configured yet. Please add your Gemini API key to the environment variables."
            });
        }

        // Portfolio context for the AI
        const portfolioContext = `
You are an AI assistant for Mayank Sahu's portfolio website. Your role is to help visitors learn about Mayank's background, projects, skills, and experience.

ABOUT MAYANK:
- Name: Mayank Sahu
- Title: Data Science & AI Engineer | Full-Stack Developer
- Education: Data Science & AI student at IIT Guwahati
- Email: mayanksahu297@gmail.com
- GitHub: https://github.com/MayankSahu297
- LinkedIn: https://www.linkedin.com/in/mayank-sahu-0a2bb42ba

BIO:
Mayank is a Data Science & AI student at IIT Guwahati with strong skills in machine learning, deep learning, and full-stack development. He enjoys building real-world projects that combine AI with clean, scalable engineering. He's always excited to learn, solve problems, and work on impactful technologies.

TECHNICAL SKILLS:
Languages: C++, Python, SQL, JavaScript, R
Web Development: HTML, CSS, React.js, Node.js, Express.js, Flask, REST APIs
AI & Machine Learning: Machine Learning, NLP, Forecasting Models, AI Agents, Data Analysis, Optimization
Core CS: Data Structures & Algorithms (DSA), Problem Solving
Tools: Git, GitHub, Postman, VS Code

PROJECTS:

1. Wiki Quiz App
- Description: Built a dynamic quiz application that generates interactive questions from any Wikipedia article using automated content extraction
- Technologies: Python, FastAPI, HTML/CSS, JavaScript, PostgreSQL
- Features: Automated content extraction, intelligent question generation, quiz history tracking, scoring system, topic-based exploration
- GitHub: https://github.com/MayankSahu297/Wiki-Quiz-App
- Live Demo: https://wiki-quiz-apps.onrender.com/app.html

2. Automated Resume Grader
- Description: Developed an AI-powered resume evaluation system that analyzes resumes based on keywords, formatting, job-match relevance, and content quality
- Technologies: Python, NLP, Scikit-learn, Machine Learning
- Features: Keyword extraction, formatting analysis, job-match scoring, content quality assessment, structured feedback, automated parsing
- GitHub: https://github.com/MayankSahu297/Anveshan-Hackathon
- Live Demo: https://anveshan-hackathon.onrender.com/

3. Personal Budget Tracker
- Description: Built a full-stack budget management application to track income, expenses, savings, and spending patterns in real time
- Technologies: React.js, Node.js, Express, MongoDB
- Features: Real-time transaction tracking, income and expense categorization, savings goals, interactive dashboards, user authentication, spending pattern analysis
- GitHub: https://github.com/MayankSahu297/Masai-MERN-Project-Final
- Live Demo: https://masai-mern-project-final.onrender.com/

4. LogisTech - Automated Warehouse Management System
- Description: Full-stack automated warehouse orchestration system simulating real-world logistics workflows
- Technologies: Python, FastAPI, SQL, HTML/CSS, JavaScript, Algorithms
- Features: Automated package ingestion, smart storage recommendations (Binary Search), truck loading optimization (Stack logic), fragile shipment validation (Backtracking), centralized Singleton Controller, SQL audit logs
- GitHub: https://github.com/MayankSahu297/Automated-Warehouse-System
- Live Demo: https://logistech-prime.onrender.com/

ACHIEVEMENTS:
- Creator-in-Residence at Masai School
- Top 30 students in CSE101 at Masai School
- Top 30 students in MTH101 at Masai School

INSTRUCTIONS:
- Be friendly, professional, and helpful
- Answer questions about Mayank's projects, skills, education, and experience
- If asked about projects, provide details about the technologies used and key features
- If asked for contact information, provide his email and social links
- If you don't know something, be honest and suggest contacting Mayank directly
- Keep responses concise but informative (2-4 sentences typically)
- Use a conversational tone
- If asked to navigate, suggest scrolling to specific sections (About, Skills, Projects, Contact)
`;

        // Call Google Gemini API
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: portfolioContext
                                },
                                {
                                    text: `User question: ${message}`
                                }
                            ]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500,
                    },
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API error:', errorData);
            throw new Error('Failed to get response from Gemini');
        }

        const data = await response.json();
        const aiResponse = data.candidates[0]?.content?.parts[0]?.text ||
            "I'm having trouble generating a response. Please try again.";

        return res.status(200).json({ response: aiResponse });

    } catch (error) {
        console.error('Chat API error:', error);
        return res.status(500).json({
            error: 'Internal server error',
            response: "I'm experiencing technical difficulties. Please try again or contact Mayank directly at mayanksahu297@gmail.com"
        });
    }
}
