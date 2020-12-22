<template>
	<header v-scroll>
		<div class="navBar">
			<nav class="container">
				<NuxtLink to="/" title="back home" class="flex">
					<div class="logo"></div>
					<div class="text flex flex-col">
						<h2>bald. bearded. builder.</h2>
						<p>Building Better Builders</p>
					</div>
				</NuxtLink>
				<ul class="links">
					<li>
						<NuxtLink to="/blog/" title="Blog posts">Blog</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/talks/" title="Talks">Speaking</NuxtLink>
					</li>
					<li>
						<a href="https://bbb.dev/shop" rel="noreferrer" title="Swag"
							>Swag</a
						>
					</li>
				</ul>
				<ul class="permanent">
					<li>
						<a
							:title="`Switch to ${
								this.$colorMode.value === 'light' ? 'dark' : 'light'
							}`"
							@click.prevent="toggleColor"
						>
							<font-awesome-icon
								:icon="[
									'fas',
									this.$colorMode.value === 'light' ? 'lightbulb' : 'moon',
								]"
							></font-awesome-icon
						></a>
					</li>
					<li class="search">
						<NuxtLink to="/search/" title="Search">
							<font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon
						></NuxtLink>
					</li>
					<li ref="menuButton" class="menu">
						<a title="Menu" @click.prevent="toggleNav">
							<font-awesome-icon
								v-if="!navExpanded"
								:icon="['fas', 'bars']"
							></font-awesome-icon
							><font-awesome-icon
								v-if="navExpanded"
								:icon="['fas', 'times']"
							></font-awesome-icon
						></a>
					</li>
				</ul>
			</nav>
		</div>
		<transition name="slide">
			<ul v-if="navExpanded" class="mobile-links">
				<li>
					<NuxtLink to="/blog/" title="Blog posts">Blog</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/talks/" title="Talks">Speaking</NuxtLink>
				</li>
				<li>
					<a href="https://bbb.dev/shop" rel="noreferrer" title="Swag">Swag</a>
				</li>
			</ul>
		</transition>
	</header>
</template>
<script>
import Vue from 'vue'

export default {
	data() {
		return {
			navExpanded: false,
		}
	},
	computed: {
		lightMode() {
			return this.$colorMode.value === 'dark' ? 'moon' : 'lightbulb'
		},
	},
	methods: {
		toggleColor() {
			this.$colorMode.preference =
				this.$colorMode.value === 'dark' ? 'light' : 'dark'
			localStorage.setItem('bbb-color-mode', this.$colorMode.value)
		},
		toggleNav() {
			this.navExpanded = !this.navExpanded
			if (this.navExpanded) {
				Vue.nextTick(this.bindClicks())
			}
		},
		bindClicks() {
			document.addEventListener('click', this.testClickOrTouch)
			document.addEventListener('touchstart', this.testClickOrTouch)
		},
		unbindClicks() {
			document.removeEventListener('click', this.testClickOrTouch)
			document.removeEventListener('touchstart', this.testClickOrTouch)
		},
		testClickOrTouch(e) {
			const menuButton = this.$refs.menuButton

			if (
				e.target !== menuButton &&
				menuButton !== undefined &&
				!menuButton.contains(e.target)
			) {
				Vue.nextTick(() => {
					this.toggleNav()
					this.unbindClicks()
				})
			}
		},
	},
}
</script>
<style scoped>
header {
	@apply mb-12;
	@apply z-10;
	@apply shadow-lg;
}
.navBar {
	border-bottom: 4px solid;
	border-image-source: linear-gradient(
		90deg,
		rgba(255, 0, 255, 1) 0%,
		rgba(0, 255, 255, 1) 100%
	);
	border-image-slice: 1;
	@apply bg-white;

	@apply dark:bg-gray-500;
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
	@apply ml-2;

	@apply lg:ml-3;
}
.text {
	@apply hidden;
}
.logo {
	background-image: url('/images/bbb-logo-black.svg');
	height: 50px;
	width: 50px;
	@apply bg-no-repeat;
	@apply mr-2;
}

.dark-mode .logo {
	background-image: url('/images/bbb-logo.svg');
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
	@apply text-xs;
	@apply text-gray-900;

	@apply dark:text-gray-50;
}

ul {
	@apply hidden;

	@apply lg:flex;
	@apply lg:justify-between;
	@apply lg:w-5/12;
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
	@apply text-pink-500;
	@apply dark:text-white;
}

ul.mobile-links {
	@apply relative;
	left: 0;
	right: 0;
	@apply w-full;
	@apply flex;
	@apply flex-col;
	@apply lg:hidden;
	@apply shadow-xl;
}

ul.mobile-links li {
	@apply py-5;
	border-bottom-width: 1px;

	@apply border-gray-200;
	@apply bg-white;

	@apply dark:border-gray-300;
	@apply dark:bg-gray-500;
}

ul.mobile-links li:hover {
	@apply bg-gray-100;
	@apply dark:bg-gray-700;
}

ul.permanent {
	@apply flex;
	@apply justify-end;
	@apply w-1/2;

	@apply md:w-1/12;
}

ul.permanent li {
	@apply mx-6;
	@apply lg:mr-3;
}

ul.permanent li.menu {
	@apply flex;
	@apply mr-3;
	@apply lg:hidden;
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
.slide-enter-active {
	animation: slide 0.3s ease-in;
}
.slide-leave-active {
	animation: slide 0.3s ease-in reverse;
}
@keyframes slide {
	0% {
		height: 0;
		opacity: 0;
	}
	100% {
		height: 100%;
		opacity: 100%;
	}
}
</style>
