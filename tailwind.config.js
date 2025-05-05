/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                'fadeIn': 'fadeIn 0.3s ease-out',
                'fadeInScale': 'fadeInScale 0.3s ease-out',
                'slideIn': 'slideIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
                fadeInScale: {
                    '0%': {opacity: '0', transform: 'scale(0.9)'},
                    '100%': {opacity: '1', transform: 'scale(1)'},
                },
                slideIn: {
                    '0%': {opacity: '0', transform: 'translateY(20px)'},
                    '100%': {opacity: '1', transform: 'translateY(0)'},
                },
            },
        },
    },
    plugins: [],
};
