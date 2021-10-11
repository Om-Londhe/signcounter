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
	<h1 class="social-title">My Socials</h1>
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
	<p class="dev">
		<ion-icon name="code-outline" class="icon" /> &nbsp;with&nbsp;
		<ion-icon name="heart" class="icon" style="color: #ED4956;" />&nbsp;by Om Londhe using&nbsp;
		<img src="/svelte.png" alt="" />
	</p>
	<p class="copyright">Copyright &copy; Om Prashant Londhe 2021</p>
</footer>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	footer {
		position: relative;
		width: 100%;
		background: #3586ff;
		padding-top: 21px;
		height: 250px;
		user-select: none;
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
	.social-title {
		font-family: 'Poppins', sans-serif;
		font-size: 24px;
		text-align: center;
		width: 100%;
		margin: 0;
		padding: 0;
		padding-bottom: 4px;
		color: white;
	}

	.dev,
	.copyright {
		color: white;
		text-align: center;
	}

	.dev {
		margin-top: 51px;
		margin-bottom: 21px;
		font-size: 18px;
		font-family: 'Ubuntu', sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.dev img {
		height: 24px;
	}
	.icon {
		font-size: 24px;
		margin: 0;
		padding: 0;
	}
	.copyright {
		font-size: 13px;
		letter-spacing: 0.5px;
		font-family: 'Poppins', sans-serif;
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
