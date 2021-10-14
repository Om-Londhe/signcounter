<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Loader from '../components/commons/loader.svelte';

	let showLoading = true;

	onMount(() => {
		const userID = localStorage.getItem('userID');
		if (!userID) {
			showLoading = false;
		} else {
			goto('/dashboard');
			showLoading = false;
		}
	});
</script>

{#if showLoading}
	<Loader />
{:else}
	<slot />
{/if}
