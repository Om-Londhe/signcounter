<script>
	import Login from './login.svelte';
</script>

<div class="layer-wave-separator" />
<div class="tagline">
	<p class="tagline-text">The one who is here to protect your Passwords!</p>
	<Login />
</div>
<div class="layer-wave-separator flip" />

<style>
	.layer-wave-separator {
		width: 100%;
		height: 271px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background: url('/layer-wave-separator.svg');
	}
	.tagline {
		background: #ff1e67;
		display: grid;
		place-items: center;
		padding-left: 7px;
		padding-right: 7px;
		position: relative;
		overflow: visible;
	}
	.tagline-text {
		font-family: 'Poppins', sans-serif;
		font-size: 21px;
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
