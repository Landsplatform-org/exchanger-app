/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'focus': '0 0 0 0.2rem rgba(96, 165, 250, 0.3)',
        'required': '0 0 0 0.2rem rgba(252, 165, 165, 0.3)',
      },
    },
  },
  plugins: [],
};
