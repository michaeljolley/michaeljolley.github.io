const headerStyles = {
	fontFamily: "Cairo",
	fontWeight: "bold",
	marginTop: "1.5rem",
	marginBottom: ".75rem",
	textTransform: "uppercase",
};

module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		darkSelector: '.dark-mode',
		fontFamily: {
			cairo: ["Cairo", "sans-serif"],
			sourceSans: ["Source Sans Pro", "sans-serif"],
			robotoMono: ["Roboto Mono", "sans-serif"],
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
				100: '#dedce9',
				200: '#beb9d3',
				300: '#9d97bd',
				400: '#7d74a7',
				500: '#5c5191',
				600: '#4a4174',
				700: '#373157',
				800: '#25203a',
				900: '#12101d',
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
		extend: {
			zIndex: {
				'-10': '-10',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
