/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			height: {
				header: '48px',
			},
			colors: {
				main: '#84B1ED',
				background: '#fafafa',
				kakao: '#FFDE00',
				naver: '#00C73C',
			},
		},
	},
	plugins: [],
};
