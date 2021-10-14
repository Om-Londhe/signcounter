<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Loader from '../components/commons/loader.svelte';
	import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
	import { getFirebaseApp } from '../../services/firebase';
	import { user } from '../../services/stores';

	let showLoading = true;

	onMount(() => {
		const userID = localStorage.getItem('userID');
		if (!userID) {
			showLoading = false;
		} else {
			onSnapshot(doc(getFirestore(getFirebaseApp()), 'Users', userID), (value) => {
				user.update((_) => ({
					id: value.id,
					email: value.data().email,
					passwords: value.data().passwords
				}));
				goto('/dashboard');
				showLoading = false;
			});
		}
	});
</script>

{#if showLoading}
	<Loader />
{:else}
	<slot />
{/if}
