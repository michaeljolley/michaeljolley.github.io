<template>
	<main>
		<div class="container">
			<div>test</div>
			<div>
				<NextEvent />
				<Discord />
			</div>
		</div>
	</main>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
	@apply grid grid-cols-1 gap-6;
	grid-template: 1fr / 1fr 35%;
}
.container > div {
	@apply flex flex-col gap-6;
}
</style>
