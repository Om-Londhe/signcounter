<script>
	export let value;
	// export let type;
	export let id;
	export let placeholder;
	let isFocused = false;

	const toggleFocus = () => (isFocused = !isFocused);
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
		rel="stylesheet"
	/>
</svelte:head>
<div class="form-field" class:formFieldFocused={isFocused}>
	<label for={id} class:labelFocused={isFocused || value.length}>{placeholder}</label>
	<input on:focus={toggleFocus} on:blur={toggleFocus} bind:value {id} />
	{#if $$slots.icon}
		<slot name="icon" />
	{:else}
		<div />
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	.form-field {
		position: relative;
		display: flex;
		align-items: center;
		height: 40px;
		padding-left: 7px;
		padding-right: 11px;
		border: 0.2px solid #5f5f5f;
		border-radius: 0.5rem;
		transition: all 444ms;
	}
	.formFieldFocused {
		border-color: #49375e;
	}
	label {
		position: absolute;
		transition: all 444ms;
		color: grey;
		background: #1f1a24;
		border-radius: 21px;
		padding-left: 7px;
		padding-right: 7px;
		font-family: 'Poppins', sans-serif;
		top: 9px;
		font-size: 14px;
		letter-spacing: 0.4px;
	}
	.labelFocused {
		top: -9px;
		font-size: 12px;
	}
	input {
		width: 100%;
		height: 38px;
		font-size: 14px;
		margin-right: 7px;
		outline: none;
		border: none;
		padding-left: 7px;
		padding-right: 7px;
		background: transparent;
		color: white;
		font-family: 'Poppins', sans-serif;
		letter-spacing: 0.4px;
		caret-color: lightgrey;
	}
</style>
