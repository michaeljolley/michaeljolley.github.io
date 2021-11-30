const headerStyles = {
  fontFamily: 'Source Sans Pro',
  fontWeight: 'bold',
  marginTop: '1.5rem',
  marginBottom: '.75rem',
}

module.exports = {
  mode: "jit",
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    "./app.vue",
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      cairo: ['Cairo', 'sans-serif'],
      fira: ['Fira Code', 'sans-serif'],
      sourceSans: ["'Source Sans Pro'", 'sans-serif'],
    },
    typography: {
      DEFAULT: {
        css: {
          h1: { ...headerStyles },
          h2: { ...headerStyles },
          h3: { ...headerStyles },
          h4: { ...headerStyles },
          h5: { ...headerStyles },
          h6: { ...headerStyles },
        },
      },
    },
    extend: {
      colors: {
        bbbpink: "#c04b9b",
        bbbblue: "#21c0db"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}