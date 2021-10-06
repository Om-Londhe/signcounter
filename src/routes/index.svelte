<script>
	import { blur } from 'svelte/transition';

	let scrollY;
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

<svelte:window bind:scrollY />
<svelte:head>
	<title>SignCounter | Landing page</title>
</svelte:head>
<main>
	<section>
		<img src="/stars.png" alt="stars" id="stars" bind:this={stars} in:blur />
		<img src="/moon.png" alt="moon" id="moon" bind:this={moon} in:blur />
		<img
			src="/mountains_behind.png"
			alt="mountains_behind"
			id="mountains_behind"
			bind:this={mountains_behind}
			in:blur
		/>
		<h2 id="text" bind:this={text} in:blur>SignCounter</h2>
		<a href="/dashboard" id="button" bind:this={button} in:blur>Dashboard</a>
		<img
			src="/mountains_front.png"
			alt="mountains_front"
			id="mountains_front"
			bind:this={mountains_front}
			in:blur
		/>
	</section>
	<div class="content" in:blur>
		<header>
			<a href="/">
				<img class="logo" src="/logo.svg" alt="" />
			</a>
			<ul>
				<li><a href="#about">About</a></li>
				<li><a href="/dashboard">Dashboard</a></li>
			</ul>
		</header>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	main {
		min-height: 100vh;
		width: 100vw;
		background: linear-gradient(#2b1055, #7597de);
		overflow-x: hidden;
	}
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
		font-size: 7.5vw;
		z-index: 9;
		font-family: 'Poppins', sans-serif;
		right: -350px;
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
	}
	.content {
		position: relative;
		height: 200vh;
		background: #1c0522;
		padding-top: 51px;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #1c0522;
		border: 2px solid grey;
		border-radius: 71px;
		padding-top: 21px;
		padding-bottom: 21px;
		margin-right: 51px;
		margin-left: 51px;
		position: -webkit-sticky;
		position: sticky;
		top: 10px;
		left: 0;
	}
	header > a {
		display: grid;
		place-items: center;
	}
	.logo {
		margin-top: 4px;
		margin-left: 51px;
		cursor: pointer;
	}
	header ul {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 51px;
	}
	header ul li {
		list-style: none;
		margin-left: 20px;
	}
	header ul li a {
		text-decoration: none;
		padding: 6px 15px;
		color: #fff;
		border-radius: 20px;
		font-family: 'Poppins', sans-serif;
	}
</style>
