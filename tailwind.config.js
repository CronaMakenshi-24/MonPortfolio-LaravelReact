/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js",
    ], theme: {
        extend: {
            fontFamily: {
                'body': ['Courier New', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
                'title': ['Courier New bold', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
            },
        },
    }, plugins: [
        require('flowbite/plugin')
    ],
};

