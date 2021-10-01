<script>
	import BottomNav from '../../components/bottomNav.svelte';
	import Navbar from '../../components/navbar.svelte';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
		rel="stylesheet"
	/>
</svelte:head>
<main>
	<Navbar />
	<div class="content">
		<slot />
	</div>
	<BottomNav />
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.content {
		flex: 1;
	}
</style>
