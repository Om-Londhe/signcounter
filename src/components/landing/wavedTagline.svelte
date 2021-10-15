<script>
	import Login from './login.svelte';
</script>

<div class="layer-wave-separator">
	<div class="combiner" />
</div>
<div class="tagline" id="login">
	<p class="tagline-text">The one who is here to protect your Passwords!</p>
	<Login />
</div>
<div class="layer-wave-separator flip">
	<div class="combiner" />
</div>

<style>
	.layer-wave-separator {
		position: relative;
		width: 100%;
		height: 271px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background: url('/layer-wave-separator.svg');
	}
	.tagline {
		background: #ff1e67;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-left: 7px;
		padding-right: 7px;
		padding-top: 30px;
		position: relative;
		overflow: visible;
		margin: 0;
	}
	.combiner {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 4;
		height: 21px;
		width: 100%;
		background: #ff1e67;
	}
	.tagline-text {
		font-family: 'Poppins', sans-serif;
		font-size: 18px;
		font-weight: bold;
		letter-spacing: 1px;
		text-align: center;
		color: #121212;
		overflow: visible;
	}

	.flip {
		transform: rotate(180deg);
	}
</style>
