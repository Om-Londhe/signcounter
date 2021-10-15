<script>
	import { user } from '../../../services/stores';
	import EditForm from '../../components/editForm.svelte';
	import { flip } from 'svelte/animate';
	import { fade, blur, fly } from 'svelte/transition';
	import { backInOut } from 'svelte/easing';

	$: passwords = $user?.passwords.sort((a, b) => b.timestamp - a.timestamp);
</script>

<main
	in:fly|local={{ x: 500, duration: 444, delay: 444, opacity: 0, easing: backInOut }}
	out:fly|local={{ x: 500, opacity: 0, easing: backInOut }}
>
	{#each passwords as password (password.timestamp.toDate())}
		<div animate:flip={{ duration: 200 }} in:fade>
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
