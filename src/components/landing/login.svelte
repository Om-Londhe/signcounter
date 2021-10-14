<script>
	import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
	import { slide, fly } from 'svelte/transition';
	import Snackbar from '../commons/snackbar.svelte';
	import { blur } from 'svelte/transition';
	import { getFirebaseApp } from '../../../services/firebase';

	let email = '';
	let isFocused = false;
	let showSnackbar = false;
	let loading = false;

	const hideSnackbar = () => (showSnackbar = false);

	const actionCodeSettings = {
		url: 'http://localhost:3000/verify',
		handleCodeInApp: true
	};

	const toggleFocus = () => (isFocused = !isFocused);

	const submit = () => {
		localStorage.setItem('loginEmail', email);
		loading = true;
		sendSignInLinkToEmail(getAuth(getFirebaseApp()), email, actionCodeSettings)
			.then(() => {
				showSnackbar = true;
				loading = false;
			})
			.catch((error) => alert(error));
	};
</script>

<div class="loginContainer">
	<Snackbar
		{showSnackbar}
		{hideSnackbar}
		outTransition={slide}
		text={`Click the link in your email '${email} to login.'`}
	/>
	<form class="formField" class:isFocused on:submit|preventDefault={submit}>
		{#if loading}
			<progress style="margin: auto;" in:blur />
		{:else}
			<input
				placeholder="Enter your E-mail to login"
				type="email"
				bind:value={email}
				on:blur={toggleFocus}
				on:focus={toggleFocus}
				required
				in:fly={{ x: -100, opacity: 0 }}
			/>
			<button type="submit" class="icon" class:isFocused in:fly={{ x: 100, opacity: 0 }}>
				<ion-icon name="chevron-forward-outline" />
			</button>
		{/if}
	</form>
</div>

<style>
	.loginContainer {
		width: 100%;
		padding: 7px;
		display: grid;
		place-items: center;
		height: 124px;
	}
	.formField {
		display: flex;
		align-items: center;
		width: 100%;
		max-width: 521px;
		border-radius: 51px;
		background: #1c0522;
		transition: 271ms;
		height: 50%;
	}
	.formField input {
		flex: 1;
		background: transparent;
		outline: none;
		border: none;
		font-size: 16px;
		padding: 11px;
		padding-left: 17px;
		color: #fff;
		font-weight: 500;
	}
	.icon {
		width: 60px;
		height: calc(100% - 4px);
		margin-right: 2px;
		border-radius: 50%;
		border: none;
		display: grid;
		place-items: center;
		background: #03dac5;
		cursor: pointer;
		transition: 271ms;
	}
	.isFocused {
		box-shadow: none;
	}
</style>
