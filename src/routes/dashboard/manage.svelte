<script>
	import { user } from '../../../services/stores';
	import EditForm from '../../components/editForm.svelte';
	import { flip } from 'svelte/animate';
	import { fade, blur } from 'svelte/transition';

	$: passwords = $user?.passwords.sort((a, b) => b.timestamp - a.timestamp);
</script>

<main>
	{#each passwords as password (password.timestamp)}
		<div animate:flip={{ duration: 444, delay: 271 }} in:fade out:blur|local>
			<EditForm
				timestamp={password.timestamp}
				title={password.title}
				oldPassword={password.password}
			/>
		</div>
	{/each}
</main>

<style>
	main {
		max-width: 750px;
		margin-left: auto;
		margin-right: auto;
		padding: 11px;
	}
</style>
