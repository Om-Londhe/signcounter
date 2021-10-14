<script>
	import PasswordCard from '../../components/passwordCard.svelte';
	import InputForm from '../../components/inputForm.svelte';
	import { user } from '../../../services/stores';
</script>

<main>
	<InputForm />
	<div class="passwords">
		{#each $user?.passwords as password (password.timestamp)}
			<PasswordCard title={password.title} password={password.password} />
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
