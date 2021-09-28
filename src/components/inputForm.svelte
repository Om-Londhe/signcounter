<script>
	import FormField from './formField.svelte';
	import SubmitButton from './submitButton.svelte';

	let title = '';
	let password = '';
</script>

<form class="inputForm">
	<p class="title">Add a new Password</p>
	<FormField type="text" placeholder="Title" id={'title-input'} value={title}>
		<span class="material-icons-round icon" slot="icon"> alternate_email </span>
	</FormField>
	<div class="gap" />
	<FormField type="password" placeholder="Password" id={'password-input'} value={password}>
		<span class="material-icons-round icon" slot="icon"> password </span>
	</FormField>
	<div class="gap" />
	<SubmitButton />
</form>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	.title {
		color: #e3e3e3;
		margin: 0;
		padding: 0;
		margin-bottom: 14px;
		margin-left: 4px;
		font-size: 18px;
		font-weight: bold;
		font-family: 'Poppins', sans-serif;
		letter-spacing: 0.4px;
	}
	.inputForm {
		border: 1px solid #49375e;
		border-radius: 11px;
		padding: 21px;
		background: #1f1a24;
	}
	.gap {
		height: 11px;
	}
	.icon {
		font-size: 18px;
		color: white;
	}
</style>
