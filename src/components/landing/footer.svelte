<svelte:head>
	<script
		type="module"
		src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
	<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</svelte:head>
<footer>
	<div class="waves">
		<div class="wave" id="wave1" />
		<div class="wave" id="wave2" />
		<div class="wave" id="wave3" />
		<div class="wave" id="wave4" />
	</div>
	<ul class="social-icons">
		<li><a href="/"><ion-icon name="logo-facebook" /></a></li>
		<li><a href="/"><ion-icon name="logo-instagram" /></a></li>
		<li><a href="/"><ion-icon name="logo-twitter" /></a></li>
		<li><a href="/"><ion-icon name="logo-github" /></a></li>
		<li><a href="/"><ion-icon name="logo-linkedin" /></a></li>
	</ul>
</footer>

<style>
	footer {
		position: relative;
		width: 100%;
		background: #3586ff;
		min-height: 100px;
		padding: 20px 50px;
	}
	footer .social-icons {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px 0;
		flex-wrap: wrap;
	}
	footer .social-icons li {
		list-style: none;
	}
	footer .social-icons li a {
		font-size: 2em;
		color: #fff;
		margin: 0 10px;
		display: inline-block;
		transition: 0.5s;
	}
	footer .social-icons li a:hover {
		transform: translateY(-10px);
	}
	footer .wave {
		position: absolute;
		top: -100px;
		left: 0;
		width: 100%;
		height: 100px;
		background: url('/wave.png');
		background-size: 1000px 100px;
	}
	footer .wave#wave1 {
		z-index: 1000;
		opacity: 1;
		bottom: 0;
		animation: animateWave_1 4s linear infinite;
	}
	footer .wave#wave2 {
		z-index: 999;
		opacity: 0.5;
		bottom: 10px;
		animation: animateWave_2 4s linear infinite;
	}
	footer .wave#wave3 {
		z-index: 1000;
		opacity: 0.2;
		bottom: 15px;
		animation: animateWave_1 3s linear infinite;
	}
	footer .wave#wave4 {
		z-index: 999;
		opacity: 0.7;
		bottom: 20px;
		animation: animateWave_2 3s linear infinite;
	}

	@keyframes animateWave_1 {
		0% {
			background-position-x: 1000px;
		}
		100% {
			background-position-x: 0px;
		}
	}
	@keyframes animateWave_2 {
		0% {
			background-position-x: 0px;
		}
		100% {
			background-position-x: 1000px;
		}
	}
</style>
