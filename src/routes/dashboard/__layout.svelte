<script>
	import { goto } from '$app/navigation';
	import { collection, getDoc, getFirestore } from 'firebase/firestore';
	import { user } from '../../../services/stores';
	import { onMount } from 'svelte';
	import { getFirebaseApp } from '../../../services/firebase';
	import BottomNav from '../../components/bottomNav.svelte';
	import Navbar from '../../components/navbar.svelte';
	import Loader from '../../components/commons/loader.svelte';

	// onMount(() => {
	// 	const userID = localStorage.getItem('userID');
	// 	if (userID) {
	// 	} else {
	// 		goto('/');
	// 	}
	// });
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
		rel="stylesheet"
	/>
</svelte:head>
{#if $user?.id}
	<main>
		<Navbar />
		<div class="content">
			<slot />
		</div>
		<BottomNav />
	</main>
{:else}
	<Loader text="Loading your passwords!" />
{/if}

<style>
	main {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		background: #121212;
	}
	.content {
		flex: 1;
	}
</style>
