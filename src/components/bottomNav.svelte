<script>
	import { page } from '$app/stores';
</script>

<div class="bottomNav">
	<ul class="links">
		<li
			class="indicator"
			style="left: {$page.path === '/dashboard' ? 'calc(25% - 29px)' : 'calc(75% - 23px)'};"
		/>
		<li class="link">
			<a href="/dashboard" class:active={$page.path === '/dashboard'}>
				<span class="material-icons-round icon"> house </span></a
			>
		</li>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<li class="link">
			<a href="/dashboard/manage" class:active={$page.path === '/dashboard/manage'}
				><span class="material-icons-round icon"> manage_accounts </span></a
			>
		</li>
	</ul>
</div>

<style>
	.bottomNav {
		height: 75px;
		width: 100%;
		background: #212121;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0px 2px 11px 1px;
	}
	.links {
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
		text-align: center;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: relative;
		user-select: none;
	}
	.link {
		list-style: none;
		font-weight: bold;
		font-size: large;
		font-family: 'Blinker', sans-serif;
		width: 100%;
		height: 100%;
		z-index: 1;
		user-select: none;
	}
	.link a {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
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
	.icon {
		font-size: 30px;
	}
	.indicator {
		position: absolute;
		width: 50px;
		height: 50px;
		background: white;
		z-index: 0;
		border-radius: 51px;
		transition: all 444ms;
		color: transparent;
	}
	@media only screen and (min-width: 750px) {
		.bottomNav {
			display: none;
		}
	}
</style>
