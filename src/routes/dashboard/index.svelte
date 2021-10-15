<script>
	import PasswordCard from '../../components/passwordCard.svelte';
	import InputForm from '../../components/inputForm.svelte';
	import { user } from '../../../services/stores';
	import { flip } from 'svelte/animate';
	import { blur, fly, fade } from 'svelte/transition';
	import { backInOut } from 'svelte/easing';

	$: passwords = $user?.passwords.sort((a, b) => b.timestamp - a.timestamp);
</script>

<main
	in:fly|local={{ x: -500, duration: 444, delay: 444, opacity: 0, easing: backInOut }}
	out:fly|local={{ x: -500, opacity: 0, easing: backInOut }}
>
	<InputForm />
	<div class="passwords">
		{#each passwords as password (password.timestamp)}
			<div animate:flip in:fade|local out:blur|local>
				<PasswordCard title={password.title} password={password.password} />
			</div>
		{/each}
	</div>
</main>

<style>
	main {
		max-width: 750px;
		margin-left: auto;
		margin-right: auto;
		padding: 11px;
	}
	.passwords {
		margin-top: 24px;
	}
</style>
