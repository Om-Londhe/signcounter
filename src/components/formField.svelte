<script>
	export let value;
	export let type;
	export let id;
	export let placeholder;
	let isFocused = false;
	let runtimeType = type;

	const toggleFocus = () => (isFocused = !isFocused);
	const toggleVisibility = () => (runtimeType = runtimeType === 'password' ? 'text' : 'password');
</script>

<div class="form-field" class:formFieldFocused={isFocused}>
	<label for={id} class:labelFocused={isFocused || value.length}>{placeholder}</label>
	<input
		type={type === 'password' ? runtimeType : type}
		{id}
		{value}
		on:focus={toggleFocus}
		on:blur={toggleFocus}
		on:change
	/>
	{#if $$slots.icon}
		<slot name="icon" />
	{:else if type === 'password'}
		{#if runtimeType === 'password'}
			<span class="material-icons-round icon" on:click={toggleVisibility}> visibility </span>
		{:else}
			<span class="material-icons-round icon" on:click={toggleVisibility}> visibility_off </span>
		{/if}
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
		cursor: text;
		user-select: none;
	}
	.labelFocused {
		top: -9px;
		font-size: 12px;
		cursor: auto;
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
	.icon {
		font-size: 18px;
		color: white;
		user-select: none;
	}
</style>
