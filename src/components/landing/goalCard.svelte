<script>
	export let goalNumber;
	export let content;
</script>

<div class="goalCard">
	<h2 class="number">0{goalNumber}</h2>
	<h3 class="title">Goal {goalNumber}</h3>
	<p class="content">{content}</p>
</div>

<style>
	.goalCard {
		height: 275px;
		width: 200px;
		padding: 7px;
		position: relative;
		box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
		border-radius: 15px;
		background: rgba(255, 255, 255, 0.1);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-top: 1px solid rgba(255, 255, 255, 0.5);
		border-left: 1px solid rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(4px);
		padding: 20px;
		text-align: center;
		transition: 0.5s;
		cursor: none;
		user-select: none;
		margin: 11px;
	}
	.number {
		position: absolute;
		top: -20px;
		right: 20px;
		font-size: 8em;
		color: rgba(255, 255, 255, 0.05);
		font-family: 'Raleway', sans-serif;
		transition: 0.7s;
	}
	.title {
		font-size: 24px;
		color: black;
		z-index: 1;
		font-family: 'Varela Round', sans-serif;
		margin-bottom: 11px;
		background: whitesmoke;
		border-radius: 51px 21px;
		padding: 21px;
		padding-top: 7px;
		padding-bottom: 7px;
	}
	.content {
		font-size: 18px;
		color: white;
		font-weight: 300;
		font-family: 'Baloo Paaji 2', cursive;
	}
	@media only screen and (min-width: 750px) {
		.number {
			top: calc(35% - 40px);
			right: calc(35% - 40px);
			color: whitesmoke;
		}
		.goalCard:hover .number {
			top: -20px;
			right: 20px;
			color: rgba(255, 255, 255, 0.05);
		}
		.title {
			transform: translateY(-150px);
			transition: 0.7s;
			opacity: 0;
		}
		.goalCard:hover .title {
			transform: translateY(0);
			opacity: 1;
		}
		.content {
			transform: translateY(200px);
			transition: 0.7s;
			opacity: 0;
		}
		.goalCard:hover .content {
			transform: translateY(0);
			opacity: 1;
		}
	}
</style>
