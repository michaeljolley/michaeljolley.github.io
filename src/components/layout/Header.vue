<template>
  <header>
		<g-link to="/" class="title" title="back home" aria-label="Bald Bearded Builder Logo" aria-role="img">
			<div class="logo"></div>
			<div class="text">
				<h1>
					Michael Jolley
				</h1> 
				<p>bald. bearded. builder.</p>
			</div>
		</g-link>
		<Nav/>
  </header>
</template>

<script>
import Nav from './Nav';

export default {
  components: { Nav }
};
</script>
<style lang="scss" scoped>
header {
	justify-content: space-evenly;
 
	background-color: $lightgray;

	border-bottom: 4px solid;
  border-image-source: linear-gradient(90deg, rgba(255,0,255,1) 0%, rgba(0,255,255,1) 100%);
	border-image-slice: 1;
	
	.title {
		display: flex;
		text-decoration: none;
		margin-left: 5px;

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
 
</style>