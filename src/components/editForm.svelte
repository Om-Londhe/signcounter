<script>
	import FormField from './formField.svelte';
	import SubmitButton from './submitButton.svelte';
	import { fade } from 'svelte/transition';
	import DeleteButton from './deleteButton.svelte';

	export let title;
	export let oldPassword;

	let isInputFormExpanded = false;
	let password = oldPassword;
	let titleIcon;

	const toggleIsInputFormExpanded = () => {
		isInputFormExpanded = !isInputFormExpanded;
		if (isInputFormExpanded) {
			titleIcon.style.transform = 'rotate(360deg)';
		} else {
			titleIcon.style.transform = 'rotate(0deg)';
		}
	};

	const updatePassword = () => {
		console.log(title);
		console.log(password);
	};
</script>

<form
	class="inputForm"
	class:inputFormExpanded={isInputFormExpanded}
	in:fade
	on:submit|preventDefault={updatePassword}
>
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
		<DeleteButton />
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
