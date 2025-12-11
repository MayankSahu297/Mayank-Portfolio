/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#0d0d0d',
                    card: '#111827',
                    lighter: '#1f2937',
                },
                accent: {
                    cyan: '#22d3ee',
                    green: '#4ade80',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(34, 211, 238, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)' },
                },
            },
        },
    },
    plugins: [],
}
