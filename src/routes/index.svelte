<script>
	import ParallaxHero from '../components/landing/parallaxHero.svelte';
	import Header from '../components/landing/header.svelte';
	import { blur } from 'svelte/transition';
	import WavedTagline from '../components/landing/wavedTagline.svelte';
	import GoalCard from '../components/landing/goalCard.svelte';
	import Footer from '../components/landing/footer.svelte';

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
		<div class="goalsContainer">
			<h2 class="goalTitle">Our Goals</h2>
			<div class="goals">
				<GoalCard
					goalNumber={1}
					content="To protect you online by protecting your CounterSigns/Passwords."
				/>
			</div>
		</div>
	</div>
	<Footer />
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
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
	.goalTitle {
		font-size: 21px;
		font-family: 'Merienda', cursive;
		color: #1c0522;
		border-radius: 44px;
		background: white;
		display: inline-block;
		padding-top: 11px;
		padding-bottom: 11px;
		width: 150px;
		text-align: center;
		margin-left: calc(50% - 75px);
	}
	.goalsContainer {
	}
	.goals {
	}
</style>
