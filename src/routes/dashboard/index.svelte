<script>
	import PasswordCard from '../../components/passwordCard.svelte';
	import InputForm from '../../components/inputForm.svelte';
	import { user } from '../../../services/stores';
	import { flip } from 'svelte/animate';
	import { blur } from 'svelte/transition';

	$: passwords = $user?.passwords.sort((a, b) => b.timestamp - a.timestamp);
</script>

<main>
	<InputForm />
	<div class="passwords">
		{#each passwords as password (password.timestamp)}
			<div animate:flip={{ duration: 444, delay: 271 }} in:blur out:blur|local>
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
