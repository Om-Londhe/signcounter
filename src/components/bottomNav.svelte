<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
</script>

<div class="bottomNav">
	<ul class="links">
		<li
			class="indicator"
			style="left: {$page.path === '/dashboard' ? 'calc(25% - 54px)' : 'calc(75% - 58px)'}; 
				width: {$page.path === '/dashboard' ? '100px' : '124px'}"
		/>
		<li class="link">
			<a href="/dashboard" class:active={$page.path === '/dashboard'}>
				<div class="tab" class:activeTab={$page.path === '/dashboard'}>
					<span class="material-icons-round icon"> house </span>
					<span class="tab-text">&nbsp;Home</span>
				</div>
			</a>
		</li>
		&nbsp;&nbsp;&nbsp;&nbsp;
		<li class="link">
			<a href="/dashboard/manage" class:active={$page.path === '/dashboard/manage'}>
				<div class="tab" class:activeTab={$page.path === '/dashboard/manage'}>
					<span class="material-icons-round icon"> manage_accounts </span>
					<span class="tab-text">&nbsp;Manage</span>
				</div>
			</a>
		</li>
	</ul>
</div>

<style>
	.bottomNav {
		height: 60px;
		width: 98%;
		margin-left: 1%;
		margin-right: 1%;
		margin-bottom: 4px;
		border-radius: 51px;
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
		text-decoration: none;
		color: grey;
		transition: all 251ms;
		user-select: none;
		display: grid;
		place-items: center;
	}
	a:hover {
		color: white;
	}
	.active {
		color: black !important;
	}
	.tab {
		display: flex;
		align-items: center;
		max-width: 24px;
		overflow: hidden;
		transition: 721ms;
	}
	.activeTab {
		max-width: 110px;
	}
	.icon {
		font-size: 24px;
	}
	.tab-text {
		font-size: 15px;
	}
	.indicator {
		position: absolute;
		width: 50px;
		height: 44px;
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
