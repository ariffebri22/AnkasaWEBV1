/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                abu: "#414141",
                main: "#2395FF",
            },
            height: {
                height: "30rem",
                custom: "26rem",
                custom1: "34rem",
                custom2: "33rem",
                custom3: "37rem",
            },
            width: {
                custom: "21rem",
            },
            letterSpacing: {
                wild: "0.3rem",
            },
            fontSize: {
                small: "9px",
                little: "10px",
            },
        },
    },
    plugins: [],
};
