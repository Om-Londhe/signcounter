<script>
	import FormField from './formField.svelte';
	import SubmitButton from './submitButton.svelte';
	import { fade } from 'svelte/transition';
	import Snackbar from 'svalte-snackbar';
	import { arrayUnion, doc, getFirestore, updateDoc } from 'firebase/firestore';
	import { getFirebaseApp } from '../../services/firebase';
	import { user } from '../../services/stores';
	import ActivityIndicator from './commons/activityIndicator.svelte';

	let isInputFormExpanded = false;

	let title = '';
	let password = '';
	let titleIcon;
	let loading = false;
	let showTitleError = false;
	let showPasswordError = false;
	let showPasswordAddedSnackbar = false;

	const hideTitleErrorSnackbar = () => (showTitleError = false);
	const hidePasswordErrorSnackbar = () => (showPasswordError = false);
	const hidePasswordAddedSnackbar = () => (showPasswordAddedSnackbar = false);

	const toggleIsInputFormExpanded = () => {
		isInputFormExpanded = !isInputFormExpanded;
		if (isInputFormExpanded) {
			titleIcon.style.transform = 'rotate(360deg)';
		} else {
			titleIcon.style.transform = 'rotate(0deg)';
		}
	};

	const addPassword = () => {
		if (title.length < 2) {
			showTitleError = true;
		} else if (password.length < 8) {
			showPasswordError = true;
		} else {
			loading = true;
			fetch('/api/password/encpass', {
				body: JSON.stringify({
					decryptedPassword: password
				}),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'POST'
			})
				.then((response) => response.json())
				.then((value) =>
					updateDoc(doc(getFirestore(getFirebaseApp()), 'Users', $user?.id), {
						passwords: arrayUnion({
							timestamp: new Date(),
							title,
							password: value.encryptedPassword
						})
					}).then(() => {
						loading = false;
						title = '';
						password = '';
						isInputFormExpanded = false;
						showPasswordAddedSnackbar = true;
					})
				);
		}
	};
</script>

<form
	class="inputForm"
	class:inputFormExpanded={isInputFormExpanded}
	in:fade
	on:submit|preventDefault={addPassword}
>
	<Snackbar
		backgroundColor="#cf6679"
		borderColor="tomato"
		iconColor="black"
		text="Title must be at least 2 characters long."
		showSnackbar={showTitleError}
		hideSnackbar={hideTitleErrorSnackbar}
	/>
	<Snackbar
		backgroundColor="#cf6679"
		borderColor="tomato"
		iconColor="black"
		text="Password cannot be less than 8 letters."
		showSnackbar={showPasswordError}
		hideSnackbar={hidePasswordErrorSnackbar}
	/>
	<Snackbar
		text="Password added successfully!"
		showSnackbar={showPasswordAddedSnackbar}
		hideSnackbar={hidePasswordAddedSnackbar}
	/>
	<div class="titleSection" on:click={toggleIsInputFormExpanded}>
		<p class="title" class:titleExpanded={isInputFormExpanded}>Add a new Password</p>
		<span bind:this={titleIcon} class="material-icons-outlined title-icons">
			{isInputFormExpanded ? 'expand_less' : 'add'}
		</span>
	</div>
	<FormField
		type="text"
		placeholder="Title"
		id={'title-input'}
		value={title}
		on:change={(e) => (title = e.target.value)}
	>
		<span class="material-icons-round icon" slot="icon"> alternate_email </span>
	</FormField>
	<div class="gap" />
	<FormField
		type="password"
		placeholder="Password"
		id={'password-input'}
		value={password}
		on:change={(e) => (password = e.target.value)}
	/>
	<div class="gap" />
	{#if loading}
		<ActivityIndicator />
	{:else}
		<SubmitButton title=" Add " />
	{/if}
</form>

<style>
	.inputForm {
		border-radius: 11px;
		padding: 21px;
		border: 1px solid #49375e;
		background: #1f1b24;
		transition: all 444ms ease-in-out;
		position: relative;
		max-height: 25px;
		overflow: hidden;
	}
	.inputFormExpanded {
		max-height: 251px;
	}
	.titleSection {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 24px;
		cursor: pointer;
	}
	.title {
		color: #e3e3e3;
		margin: 0;
		padding: 0;
		margin-left: 4px;
		font-size: 16px;
		font-weight: 600;
		font-family: 'Poppins', sans-serif;
		letter-spacing: 1px;
		user-select: none;
	}
	.title-icons {
		color: white;
		user-select: none;
		transition: all 444ms ease-in-out;
	}
	.gap {
		height: 11px;
	}
	.icon {
		font-size: 18px;
		color: white;
		user-select: none;
	}
</style>
