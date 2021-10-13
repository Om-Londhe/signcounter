<script>
	import { fade } from 'svelte/transition';

	export let text = 'Loading...';
</script>

<div class="verifyContainer" transition:fade|local>
	<div class="loader" />
	<p class="text">{text}</p>
</div>

<style>
	.verifyContainer {
		background: #1c0522;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	.text {
		color: white;
		margin-top: 24px;
	}
	.loader {
		position: relative;
		height: 44px;
		width: 44px;
		border-radius: 50%;
		animation: loaderAnimation 4s infinite;
	}
	@keyframes loaderAnimation {
		0%,
		100% {
			border: 4px solid #2d1633;
			border-top: 4px solid #ff1e67;
			border-bottom: 4px solid #ff1e67;
			transform: rotateX(0deg) rotateY(0deg) rotateY(0deg) scale(1.21);
		}
		50% {
			border: 4px solid #ff1e67;
			border-top: 4px solid #2d1633;
			border-bottom: 4px solid #2d1633;
			transform: rotateX(360deg) rotateY(360deg) rotateY(360deg) scale(1);
		}
	}
</style>
