<template>
  <header>
		<nav>
			<g-link to="/" title="back home" aria-label="Bald Bearded Builder Logo" aria-role="img">
				<div class="logo"></div>
				<div class="text">
					<h1>
						Michael Jolley
					</h1> 
					<p>bald. bearded. builder.</p>
				</div>
			</g-link>
			<g-link to="/posts" title="Blog posts">Blog</g-link>
			<g-link to="/talks" title="Speaking">Speaking</g-link>
			<g-link to="/shop" title="Swag">Swag</g-link>
		</nav>
  </header>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
header {
	background-color: $lightgray;

	border-bottom: 4px solid;
	border-image-source: linear-gradient(90deg, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 100%);
	border-image-slice: 1;

	nav {
		display: flex;
		justify-content: space-between;

		padding-left: calc((100vw - 1000px) / 2);
		padding-right: calc((100vw - 1000px) / 2);

		a {
			display: flex;
			text-decoration: underline;
			align-items: center;
			color: $midblue;
			font-size: .9em;
			font-weight: bold;

			&:hover {
				color: $neonpink;
			}
 		
			&:first-child {
				text-decoration: none;
				font-size: 1em;
				font-weight: normal;
				.logo {
					background: $logo-svg no-repeat;
					height: 45px;
					width: 45px;
				}

				.text {
					display: flex;
					flex-direction: column;
					margin-left: 15px;

					h1 {
						color: $black;
						font-size: 1.2em;
						margin: 0;
					}

					p {
						margin: 1px 0 0 0;
						font-size: .7em;
						color: $darkblue;
					}
				}
			}
		}
	}
}
</style>