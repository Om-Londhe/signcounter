<header>
	<a href="/">
		<img class="logo" src="/logo.svg" alt="" />
	</a>
	<ul>
		<li><a href="#about">About</a></li>
		<li><a href="/dashboard">Dashboard</a></li>
	</ul>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #1c0522;
		border: 2px solid grey;
		border-radius: 71px;
		padding-top: 21px;
		padding-bottom: 21px;
		margin-right: 51px;
		margin-left: 51px;
		position: -webkit-sticky;
		position: sticky;
		top: 10px;
		left: 0;
	}
	header > a {
		display: grid;
		place-items: center;
	}
	.logo {
		margin-top: 4px;
		margin-left: 51px;
		cursor: pointer;
	}
	header ul {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 51px;
	}
	header ul li {
		list-style: none;
		margin-left: 20px;
		background: white;
		border-radius: 51px;
		padding: 7px;
		padding-top: 11px;
		padding-bottom: 11px;
	}
	header ul li a {
		text-decoration: none;
		padding: 6px 15px;
		color: #1c0522;
		border-radius: 20px;
		font-family: 'Poppins', sans-serif;
	}
	@media only screen and (max-width: 650px) {
		.logo {
			margin: 0;
			margin-bottom: 17px;
			width: 100%;
			height: 44px;
		}
		header {
			flex-direction: column;
			margin-left: 7px;
			margin-right: 7px;
			border-radius: 21px;
			padding-left: 7px;
			padding-right: 7px;
		}
		header ul {
			margin: 0;
			width: 100%;
			justify-content: space-between;
		}
		header ul li {
			width: 40%;
			margin: 0;
			text-align: center;
			padding-top: 7px;
			padding-bottom: 7px;
		}
		header ul li a {
			text-align: center;
		}
	}
	@media only screen and (max-width: 325px) {
		.logo {
			margin-bottom: 0px;
		}
		header ul {
			flex-direction: column;
		}
		header ul li {
			margin-top: 21px;
		}
	}
</style>
