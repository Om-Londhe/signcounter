<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Blinker&display=swap" rel="stylesheet" />
</svelte:head>
<nav class="nav">
	<img class="logo" src="/logo.svg" alt="" />
	<ul class="links">
		<li class="indicator" style="left: {$page.path === '/dashboard' ? 0 : 'calc(100% - 100px)'};" />
		<li class="link">
			<a href="/dashboard" class:active={$page.path === '/dashboard'}>Home</a>
		</li>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<li class="link">
			<a href="/dashboard/manage" class:active={$page.path === '/dashboard/manage'}>Manage</a>
		</li>
	</ul>
</nav>

<style>
	.nav {
		height: 75px;
		width: 100%;
		background: #212121;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0px 2px 11px 1px;
	}
	.logo {
		margin-left: 21px;
	}
	.links {
		padding: 0;
		margin: 0;
		text-align: center;
		display: flex;
		align-items: center;
		position: relative;
		margin-right: 21px;
		user-select: none;
	}
	.link {
		list-style: none;
		font-weight: bold;
		font-size: large;
		font-family: 'Blinker', sans-serif;
		width: 100px;
		z-index: 1;
		user-select: none;
	}
	.link a {
		text-decoration: none;
		color: grey;
		transition: all 251ms;
		user-select: none;
	}
	a:hover {
		color: white;
	}
	.active {
		color: black !important;
	}
	.indicator {
		position: absolute;
		width: 100px;
		height: 44px;
		background: white;
		z-index: 0;
		border-radius: 51px;
		transition: all 444ms;
		color: transparent;
	}
</style>
