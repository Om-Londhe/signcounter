<script>
	import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
	import { slide } from 'svelte/transition';
	import Snackbar from '../commons/snackbar.svelte';
	import { blur } from 'svelte/transition';
	import { getApp } from '@firebase/app';

	let email = '';
	let isFocused = false;
	let showSnackbar = false;
	let loading = false;

	const hideSnackbar = () => (showSnackbar = false);

	const actionCodeSettings = {
		// URL you want to redirect back to. The domain (www.example.com) for this
		// URL must be in the authorized domains list in the Firebase Console.
		url: 'https://www.example.com/finishSignUp?cartId=1234',
		// This must be true.
		handleCodeInApp: true
	};

	const toggleFocus = () => (isFocused = !isFocused);

	const submit = () => {
		loading = !loading;
		// localStorage.setItem('loginEmail', email);
		// loading = true;
		// sendSignInLinkToEmail(getAuth(getApp()), email, actionCodeSettings)
		// 	.then(() => (showSnackbar = true))
		// 	.catch((error) => alert(error));
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
			/>
			<button type="submit" class="icon" class:isFocused>
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
