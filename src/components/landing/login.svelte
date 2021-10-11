<script>
	let email = '';

	const submit = () => {};
</script>

<div class="loginContainer">
	<div class="formField">
		<input placeholder="Enter your E-mail to login" type="email" bind:value={email} required />
		<div class="icon">
			<ion-icon name="chevron-forward-outline" on:click|preventDefault={submit} />
		</div>
	</div>
</div>

<style>
	.loginContainer {
		width: 100%;
		padding: 7px;
		display: grid;
		place-items: center;
		height: 100px;
	}
	.formField {
		display: flex;
		align-items: center;
		width: 100%;
		max-width: 521px;
		border-radius: 51px;
		background: #ff1e67;
		box-shadow: inset 5px 5px 10px #db1a59, inset -5px -5px 10px #ff2275;
		border: 1px solid #ff3f89;
	}
	.formField input {
		flex: 1;
		background: transparent;
		outline: none;
		border: none;
		font-size: 16px;
		padding: 11px;
		color: #1c0522;
		font-weight: 500;
	}
	.formField input::placeholder {
		color: #333;
	}
	.icon {
		width: 38px;
		height: 38px;
		margin-right: 2px;
		border-radius: 50%;
		border: none;
		display: grid;
		place-items: center;
		background: #ff1e67;
		box-shadow: inset 5px 5px 10px #db1a59, inset -5px -5px 10px #ff2275;
		border-left: 1px solid #ff3f89;
		cursor: pointer;
	}
</style>
