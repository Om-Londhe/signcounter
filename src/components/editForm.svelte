<script>
	import FormField from './formField.svelte';
	import SubmitButton from './submitButton.svelte';
	import { fade } from 'svelte/transition';
	import DeleteButton from './deleteButton.svelte';
	import { onMount } from 'svelte';
	import { user } from '../../services/stores';
	import Snackbar from './commons/snackbar.svelte';
	import { arrayRemove, arrayUnion, doc, getFirestore, updateDoc } from 'firebase/firestore';
	import { getFirebaseApp } from '../../services/firebase';

	export let title;
	export let timestamp;
	export let oldPassword;

	let isInputFormExpanded = false;
	let titleIcon;
	let password = '';
	let showTitleError = false;
	let showPasswordError = false;
	let showPasswordUpdatedSnackbar = false;
	let showPasswordDeletedSnackbar = false;

	const hideTitleErrorSnackbar = () => (showTitleError = false);
	const hidePasswordErrorSnackbar = () => (showPasswordError = false);
	const hidePasswordUpdatedSnackbar = () => (showPasswordUpdatedSnackbar = false);
	const hidePasswordDeletedSnackbar = () => (showPasswordDeletedSnackbar = false);

	onMount(() => {
		fetch('/api/password/depass', {
			body: JSON.stringify({
				encryptedPassword: oldPassword
			}),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST'
		})
			.then((response) => response.json())
			.then((value) => (password = value.decryptedPassword));
	});

	const toggleIsInputFormExpanded = () => {
		isInputFormExpanded = !isInputFormExpanded;
		if (isInputFormExpanded) {
			titleIcon.style.transform = 'rotate(360deg)';
		} else {
			titleIcon.style.transform = 'rotate(0deg)';
		}
	};

	const deletePassword = () => {
		updateDoc(doc(getFirestore(getFirebaseApp()), 'Users', $user?.id), {
			passwords: arrayRemove({
				timestamp: timestamp,
				title,
				password: oldPassword
			})
		}).then(() => {
			showPasswordDeletedSnackbar = true;
		});
	};

	const updatePassword = () => {
		if (title.length < 2) {
			showTitleError = true;
		} else if (password.length < 8) {
			showPasswordError = true;
		} else {
			// loading = true;
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
						passwords: arrayRemove({
							timestamp: timestamp,
							title,
							password: oldPassword
						})
					}).then(() => {
						updateDoc(doc(getFirestore(getFirebaseApp()), 'Users', $user?.id), {
							passwords: arrayUnion({
								timestamp: new Date(),
								title,
								password: value.encryptedPassword
							})
						}).then(() => {
							showPasswordUpdatedSnackbar = true;
						});
					})
				);
		}
	};
</script>

<form
	class="inputForm"
	class:inputFormExpanded={isInputFormExpanded}
	in:fade
	on:submit|preventDefault={updatePassword}
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
		backgroundColor="#cf6679"
		borderColor="tomato"
		iconColor="black"
		text="Password deleted."
		showSnackbar={showPasswordDeletedSnackbar}
		hideSnackbar={hidePasswordDeletedSnackbar}
	/>
	<Snackbar
		text="Password added successfully!"
		showSnackbar={showPasswordUpdatedSnackbar}
		hideSnackbar={hidePasswordUpdatedSnackbar}
	/>
	<div class="titleSection" on:click={toggleIsInputFormExpanded}>
		<p class="title" class:titleExpanded={isInputFormExpanded}>{title}</p>
		<span bind:this={titleIcon} class="material-icons-outlined title-icons">
			{isInputFormExpanded ? 'expand_less' : 'add'}
		</span>
	</div>
	<FormField
		type="password"
		placeholder="Password"
		id={'password-input'}
		value={password}
		on:change={(e) => (password = e.target.value)}
	/>
	<div class="gap" />
	<div class="bottom">
		<SubmitButton title="Update" />
		<DeleteButton on:click={deletePassword} />
	</div>
</form>

<style>
	.inputForm {
		border-radius: 11px;
		padding: 21px;
		border: 1px solid #49375e;
		background: #1f1b24;
		transition: all 444ms ease-in-out;
		position: relative;
		max-height: 21px;
		overflow: hidden;
		margin-bottom: 7px;
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
	.bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
