<script>
	import { blur, scale, fly } from 'svelte/transition';

	export let title;
	export let password;
	let copied = false;

	const copyPassword = () => {
		if (!copied) {
			navigator.clipboard.writeText(password);
			copied = true;
			setTimeout(() => (copied = false), 1421);
		}
	};
</script>

<div class="passwordCard" on:click|preventDefault={copyPassword} class:copied>
	<div class="left">
		<p class="title">{title}</p>
		<p class="helperText">Click to copy</p>
	</div>
	<span class="material-icons-round icon"> content_copy </span>
	{#if copied}
		<div class="done" transition:blur={{ duration: 500 }}>
			<span class="material-icons-outlined done-icon" in:scale={{ delay: 444 }} out:scale>
				task_alt
			</span>
			<p class="copiedText" in:fly={{ y: 21, delay: 444, opacity: 0 }}>Copied</p>
		</div>
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	.passwordCard {
		background: #1f1b24;
		border-radius: 11px;
		padding: 21px;
		border: 1px solid #49375e;
		display: flex;
		align-items: center;
		position: relative;
		cursor: copy;
		transition: border-color 444ms;
	}
	.left {
		margin-left: 4px;
		flex: 1;
	}
	.title {
		color: #e3e3e3;
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-weight: 600;
		font-family: 'Poppins', sans-serif;
		letter-spacing: 1px;
		user-select: none;
	}
	.helperText {
		color: grey;
		margin: 0;
		margin-top: 4px;
		padding: 0;
		font-size: 13px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		letter-spacing: 0.4px;
	}
	.icon {
		color: white;
		font-size: 18px;
	}
	.done {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: rgba(0, 11, 0, 0.4);
		backdrop-filter: blur(2px);
		border-radius: 11px;
	}
	.done-icon {
		color: #4bb543;
		font-size: 30px;
		margin: 0;
	}
	.copiedText {
		font-size: 16px;
		color: #4bb543;
		padding: 0;
		margin: 0;
		margin-top: 4px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.copied {
		border-color: #4bb543;
	}
</style>
