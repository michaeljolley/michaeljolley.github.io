<template>
	<aside>
		<h3>Table of Contents</h3>
		<ul class="toc">
			<li
				v-for="link of links"
				:key="link.id"
				:class="`link--level${link.depth} ${
					activeLink && activeLink.id === link.id ? 'link--active' : ''
				}`"
				class="py-2 text-xs truncate"
			>
				<NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
			</li>
		</ul>
	</aside>
</template>
<script>
export default {
	props: {
		toc: {
			type: Array,
			required: true,
		},
		levels: {
			type: Array,
			default: () => [2, 3],
		},
	},
	data() {
		return {
			pos: 0,
			links: [],
			activeLink: undefined,
		}
	},
	watch: {
		pos(value) {
			if (process.client) {
				this.links = this.links.map((link, key) => {
					const title = document.getElementById(link.id)
					return {
						...link,
						active: this.linkActive(title),
					}
				})
			}
		},
		toc(value) {
			this.links = value.filter((l) => this.levels.includes(l.depth))
		},
		links(value) {
			this.activeLink = value.filter((l) => l.active).pop()
		},
	},
	mounted() {
		this.links = this.toc.filter((l) => this.levels.includes(l.depth))
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		linkActive(el) {
			let top = el.offsetTop
			const height = el.offsetHeight
			while (el.offsetParent) {
				el = el.offsetParent
				top += el.offsetTop
			}
			return top - height < window.pageYOffset
		},
		handleScroll() {
			this.pos = window.pageYOffset
		},
	},
}
</script>
<style scoped>
aside {
	@apply flex-col;
	@apply w-1/5;
	@apply bg-gray-500;
	@apply rounded-xl;
	@apply p-3;
	@apply text-sm;
	@apply z-0;
	@apply sticky;
	top: 105px;
	@apply hidden;
	@apply lg:flex;
}

.toc a {
	@apply text-gray-300;
}

.toc a:hover {
	@apply text-pink-500;
}

aside a:hover {
}

li.link--active a {
	/* @apply bg-gray-400; */
	@apply text-gray-50;
}
li.link--active a {
}
</style>
