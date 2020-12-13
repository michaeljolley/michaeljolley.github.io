<template>
	<header v-scroll>
		<nav class="container">
			<NuxtLink to="/" title="back home" class="flex">
				<div class="logo"></div>
				<div class="text flex flex-col">
					<h2>bald. bearded. builder.</h2>
					<p>Building Better Builders</p>
				</div>
			</NuxtLink>
			<ul>
				<li class="flex-1">
					<NuxtLink to="/blog" title="Blog posts">Blog</NuxtLink>
				</li>
				<li class="flex-1">
					<NuxtLink to="/talks" title="Talks">Speaking</NuxtLink>
				</li>
				<li class="flex-1">
					<a href="https://bbb.dev/shop" rel="noreferrer" title="Swag">Swag</a>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script>
export default {}
</script>
<style scoped>
header {
	@apply mb-12;
	@apply bg-gray-500;
	border-bottom: 4px solid;
	border-image-source: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	border-image-slice: 1;
	@apply z-10;
}

.sticky {
	@apply fixed;
	@apply w-full;
	@apply top-0;
}

nav {
	@apply m-auto;
	@apply flex;
	@apply justify-between;
	@apply pt-2;
	@apply pb-2;
}
.logo {
	@apply ml-3;
}
.text {
	@apply hidden;
}
.logo {
	background-image: url('/images/bbb-logo.svg');
	height: 50px;
	width: 50px;
	@apply bg-no-repeat;
	@apply mr-2;
}
h2 {
	background: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	@apply bg-clip-text;
	-webkit-text-fill-color: transparent;
	@apply border-0;
	@apply m-0;
	@apply p-0;
	@apply text-xl;
	@apply font-bold;
}
p {
	@apply m-0;
	@apply p-0;
	@apply text-gray-50;
	@apply text-xs;
}
ul {
	@apply flex;
	@apply justify-evenly;
	@apply w-1/2;
}
li {
	@apply flex;
	@apply justify-center;
}
li a {
	@apply content-center;
	@apply font-bold;
	@apply grid;
	font-family: 'SpeziaWide', sans-serif;
}
li a:hover {
	@apply text-white;
}

@screen md {
	.logo {
		@apply ml-0;
	}
	.text {
		@apply flex;
		@apply justify-center;
		@apply visible;
	}
}
</style>
