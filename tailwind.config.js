const headerStyles = {
  fontFamily: "Cairo",
  fontWeight: "bold",
  marginTop: "1.5rem",
  marginBottom: ".75rem",
  textTransform: "uppercase",
};

module.exports = {
  darkMode: false,
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      cairo: ["'Cairo'", "sans-serif"],
      robotoMono: ["'Roboto Mono'", "sans-serif"]
    },
    typography: {
      default: {
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
    colors: {
      black: '#000000',
      white: '#ffffff',
      brand: {
        discord: '#7289da',
        facebook: '#3B5998',
        github: '#181717',
        instagram: '#bc2a8d',
        linkedin: '#0077B5',
        reddit: '#ff4500',
        rss: '#FFA500',
        twitch: '#6441A4',
        twitter: '#1da1f2',
        youtube: '#e52d27',
      },
      pink: {
        100: '#ffccff',
        200: '#ff99ff',
        300: '#ff66ff',
        400: '#ff33ff',
        500: '#ff00ff',
        600: '#cc00cc',
        700: '#990099',
        800: '#660066',
        900: '#330033',
      },
      blue: {
        100: '#ccffff',
        200: '#99ffff',
        300: '#66ffff',
        400: '#33ffff',
        500: '#00ffff',
        600: '#00cccc',
        700: '#009999',
        800: '#006666',
        900: '#003333',
      },
      indigo: {
        100: '#CCCCFF',
        500: '#7F80FF',
        700: '#6666CC',
        900: '#404080',
      },
      gray: {
        50: '#f3f3f5',
        100: '#d1d1d1',
        200: '#a3a3a4',
        300: '#747676',
        400: '#464849',
        500: '#181a1b',
        600: '#131516',
        700: '#0e1010',
        800: '#0a0a0b',
        900: '#050505',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
