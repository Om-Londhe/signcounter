<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		await import('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js');
		await import('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js');
	});
</script>

<footer>
	<div class="waves">
		<div class="wave" id="wave1" />
		<div class="wave" id="wave2" />
		<div class="wave" id="wave3" />
		<div class="wave" id="wave4" />
	</div>
	<ul class="social-icons">
		<li>
			<a target="_blank" href="https://www.facebook.com/om.londhe.332/" class="logo-facebook">
				<ion-icon name="logo-facebook" />
			</a>
		</li>
		<li>
			<a target="_blank" href="https://www.instagram.com/theomlondhe/" class="logo-instagram">
				<ion-icon name="logo-instagram" />
			</a>
		</li>
		<li>
			<a target="_blank" href="https://twitter.com/OmLondhe2003" class="logo-twitter">
				<ion-icon name="logo-twitter" />
			</a>
		</li>
		<li>
			<a target="_blank" href="https://github.com/Om-Londhe" class="logo-github">
				<ion-icon name="logo-github" />
			</a>
		</li>
		<li>
			<a target="_blank" href="https://www.linkedin.com/in/omlondhe/" class="logo-linkedin">
				<ion-icon name="logo-linkedin" />
			</a>
		</li>
	</ul>
</footer>

<style>
	footer {
		position: relative;
		width: 100%;
		background: #3586ff;
		min-height: 100px;
		padding-top: 21px;
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
		color: white;
		margin: 0 10px;
		display: grid;
		place-items: center;
		transition: 0.5s;
		border-radius: 21px;
		width: 44px;
		height: 44px;
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
		z-index: 10;
		opacity: 1;
		bottom: 0;
		animation: animateWave_1 4s linear infinite;
	}
	footer .wave#wave2 {
		z-index: 9;
		opacity: 0.5;
		bottom: 10px;
		animation: animateWave_2 4s linear infinite;
	}
	footer .wave#wave3 {
		z-index: 10;
		opacity: 0.2;
		bottom: 15px;
		animation: animateWave_1 3s linear infinite;
	}
	footer .wave#wave4 {
		z-index: 9;
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

	@media only screen and (min-width: 750px) {
		footer .social-icons li a:hover {
			transform: translateY(-7px) rotateZ(360deg);
			border-radius: 50%;
			background: white;
		}
		.logo-facebook:hover {
			color: #3b5998;
		}
		.logo-instagram:hover {
			color: #cd486b;
		}
		.logo-twitter:hover {
			color: #1da1f2;
		}
		.logo-github:hover {
			color: #333;
		}
		.logo-linkedin:hover {
			color: #0e76a8;
		}
	}
	@media only screen and (max-width: 750px) {
		footer .social-icons li a {
			border-radius: 50%;
			background: white;
		}
		.logo-facebook {
			color: #3b5998 !important;
		}
		.logo-instagram {
			color: #cd486b !important;
		}
		.logo-twitter {
			color: #1da1f2 !important;
		}
		.logo-github {
			color: #333 !important;
		}
		.logo-linkedin {
			color: #0e76a8 !important;
		}
	}
</style>
