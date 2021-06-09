<template>
	<section>
		<div>
			<h3>Community Events</h3>
			<span>June 7th &nbsp;Sean Whitesell</span>
			<p>Microservices - The Easy Way is the Wrong Way</p>
			<a href="#">learn more ></a>
		</div>
	</section>
</template>
<script>
export default {}
</script>
<style scoped>
section {
	@apply flex flex-row gap-4;
	@apply bg-black;
	@apply rounded-xl;
	@apply font-robotoMono;
	@apply p-6;
	@apply text-indigo-800;
}

div {
	@apply flex flex-col justify-between;
}

h3 {
	@apply inline text-lg font-bold uppercase;

	background: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	-webkit-text-fill-color: transparent;
	@apply bg-clip-text;
}
span {
	@apply text-sm;
	@apply text-gray-200;
}
p {
	@apply text-white text-lg;
	@apply font-sourceSans font-bold;
}
.a,
.a:hover {
	@apply text-pink-500 text-sm;
	@apply font-bold;
	@apply flex justify-end;
}
</style>
