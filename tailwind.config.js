    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            custom: '#89b6b3',
            Gold: '#ffd700',
            // Add more custom colors as needed
          },
        },
      },
      plugins: [],
    }
    