/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        blue: '#061d49',
      },
      backgroundImage: {
        'bg-overlay': "url('styles/img/bg-overlay.png')",
        'logo': "url('styles/img/logo.svg')",
      },
      zIndex: {
        "-1": "-1",
      },
      transformOrigin: {
        "0": "0%",
      },
    },
  },
  plugins: [
    
  ],
}
