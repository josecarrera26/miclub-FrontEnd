/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'club-blue': '#3F3D91',
                'club-green': '#91C141',
                'club-pink': '#E61D6E',
                'club-orange': '#F5A623',
                'club-purple': '#7A2E87',
            }
        },
    },
    plugins: [],
}