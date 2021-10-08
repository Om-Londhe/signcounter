<script>
	import ParallaxHero from '../components/landing/parallaxHero.svelte';
	import Header from '../components/landing/header.svelte';
	import { blur } from 'svelte/transition';
	import WavedTagline from '../components/landing/wavedTagline.svelte';
	import Footer from '../components/landing/footer.svelte';
	import Goals from '../components/landing/goals.svelte';

	let scrollY;
</script>

<svelte:window bind:scrollY />
<svelte:head>
	<title>SignCounter | Landing page</title>
</svelte:head>
<main>
	<ParallaxHero {scrollY} />
	<div class="content" in:blur>
		<Header />
		<WavedTagline />
		<Goals />
	</div>
	<Footer />
</main>

<style>
	main {
		min-height: 100vh;
		width: 100vw;
		background: linear-gradient(#2b1055, #7597de);
		overflow-x: hidden;
	}
	.content {
		position: relative;
		background: #1c0522;
		padding-top: 111px;
		height: 500vh;
	}
</style>
