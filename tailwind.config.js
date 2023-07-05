/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
        fontFamily:{
            narrow:"'PT Sans Narrow', sans-serif"
        }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

