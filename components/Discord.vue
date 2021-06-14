<template>
	<a
		href="https://discord.gg/XSG7HJm"
		title="Join the Discord server"
		target="_blank"
		noreferrer
	>
		<div>
			<h3>Join Us on Discord</h3>
			<p>
				Our Discord community brings developers together to learn together,
				build each other up, and have fun.
			</p>
			<p class="link">join in the fun ></p>
		</div>
		<svg viewBox="0 0 89 102" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M59.0451 48.45C59.0451 51.561 56.7566 54.111 53.8577 54.111C51.0097 54.111 48.6703 51.561 48.6703 48.45C48.6703 45.339 50.9589 42.789 53.8577 42.789C56.7566 42.789 59.0451 45.339 59.0451 48.45ZM35.2949 42.789C32.396 42.789 30.1074 45.339 30.1074 48.45C30.1074 51.561 32.4469 54.111 35.2949 54.111C38.1937 54.111 40.4823 51.561 40.4823 48.45C40.5331 45.339 38.1937 42.789 35.2949 42.789ZM89 10.506V102C76.1876 90.6457 80.2852 94.4042 65.4023 80.529L68.0977 89.964H10.4257C4.67886 89.964 0 85.272 0 79.458V10.506C0 4.692 4.67886 0 10.4257 0H78.5743C84.3211 0 89 4.692 89 10.506ZM74.5057 58.854C74.5057 42.432 67.1823 29.121 67.1823 29.121C59.8589 23.613 52.8914 23.766 52.8914 23.766L52.1794 24.582C60.8251 27.234 64.8429 31.059 64.8429 31.059C52.7621 24.4192 38.5712 24.418 26.8526 29.58C24.9709 30.447 23.852 31.059 23.852 31.059C23.852 31.059 28.0731 27.03 37.2274 24.378L36.7189 23.766C36.7189 23.766 29.7514 23.613 22.428 29.121C22.428 29.121 15.1046 42.432 15.1046 58.854C15.1046 58.854 19.3766 66.249 30.616 66.606C30.616 66.606 32.4977 64.311 34.0234 62.373C27.5646 60.435 25.1234 56.355 25.1234 56.355C25.8716 56.8801 27.1053 57.5609 27.2086 57.63C35.7927 62.4507 47.9861 64.0301 58.9434 59.415C60.7234 58.752 62.7069 57.783 64.792 56.406C64.792 56.406 62.2491 60.588 55.5869 62.475C57.1126 64.413 58.9434 66.606 58.9434 66.606C70.1829 66.249 74.5057 58.854 74.5057 58.854Z"
				fill="white"
			/>
		</svg>
	</a>
</template>
<script>
export default {}
</script>
<style scoped>
a {
	@apply flex flex-row gap-6;
	@apply rounded-xl;
	@apply font-robotoMono;
	@apply p-4;
	@apply shadow-md;

	background: linear-gradient(
		180deg,
		rgba(114, 137, 218, 1) 0%,
		rgba(114, 137, 218, 0.9) 100%
	);
}

div {
	@apply flex flex-col justify-between;
}

h3 {
	@apply flex-nowrap;
	@apply text-lg font-bold uppercase text-gray-700;
}
p {
	@apply text-white text-xs;
}
.link,
.link:hover {
	@apply text-gray-700 text-xs;
	@apply font-bold;
	@apply ml-auto mt-auto;
}
svg {
	@apply w-1/2;
}
</style>
