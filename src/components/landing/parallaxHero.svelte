<script>
	import { blur, fly } from 'svelte/transition';

	export let scrollY;

	let stars;
	let moon;
	let mountains_behind;
	let mountains_front;
	let text;
	let button;

	$: stars && (stars.style.left = `${scrollY * 0.25}px`);
	$: moon && (moon.style.top = `${scrollY * 1.05}px`);
	$: mountains_behind && (mountains_behind.style.top = `${scrollY * 0.5}px`);
	$: mountains_front && (mountains_front.style.top = `${scrollY * 0}px`);
	$: text && (text.style.marginRight = `${scrollY * 4}px`);
	$: text && (text.style.marginTop = `${scrollY * 1.5}px`);
	$: button && (button.style.marginTop = `${scrollY * 1.5}px`);
</script>

<section>
	<img
		src="/stars.png"
		alt="stars"
		id="stars"
		bind:this={stars}
		in:blur={{ delay: 271, duration: 751 }}
	/>
	<img src="/moon.png" alt="moon" id="moon" bind:this={moon} in:blur={{ duration: 1121 }} />
	<img
		src="/mountains_behind.png"
		alt="mountains_behind"
		id="mountains_behind"
		bind:this={mountains_behind}
		in:blur={{ duration: 444 }}
	/>
	<h2 id="text" bind:this={text} in:blur>SignCounter</h2>
	<a href="/dashboard" id="button" bind:this={button} in:fly={{ y: 500, opacity: 0 }}>Let's go!</a>
	<img
		src="/mountains_front.png"
		alt="mountains_front"
		id="mountains_front"
		bind:this={mountains_front}
	/>
</section>

<style>
	section::before {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100px;
		background: linear-gradient(to top, #1c0522, transparent);
		z-index: 100;
	}
	section {
		position: relative;
		width: 100%;
		height: 100vh;
		display: grid;
		place-items: center;
		overflow: hidden;
	}
	section img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		pointer-events: none;
	}
	section img#moon {
		mix-blend-mode: screen;
	}
	section img#mountains_front {
		z-index: 10;
	}
	#text {
		position: absolute;
		color: #fff;
		white-space: nowrap;
		font-size: 5rem;
		z-index: 9;
		font-family: 'Poppins', sans-serif;
		right: -500px;
		-webkit-text-stroke: 1px solid grey;
	}
	#button {
		text-decoration: none;
		padding: 8px 30px;
		border-radius: 40px;
		background: #fff;
		color: #2b1055;
		font-size: 1.5em;
		display: inline-block;
		z-index: 9;
		transform: translateY(111px);
		font-family: 'Poppins', sans-serif;
		border: 1px solid grey;
	}
</style>
