<script>
	import PasswordCard from '../../components/passwordCard.svelte';
	import InputForm from '../../components/inputForm.svelte';
</script>

<main>
	<InputForm />
	<div class="passwords">
		<PasswordCard title="Instagram" password="Password" />
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
