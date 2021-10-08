<script>
	import GoalCard from './goalCard.svelte';

	let goalCardData = [
		{
			goalNumber: 1,
			content: 'To protect you online by protecting your CounterSigns/Passwords.'
		},
		{
			goalNumber: 2,
			content:
				'To not let you go out of memory by remembering your passwords for any login able thing.'
		},
		{
			goalNumber: 3,
			content:
				'To provide a single, dedicated & trustworthy place to store your CounterSigns/Passwords.'
		},
		{
			goalNumber: 4,
			content:
				'To keep your credentials secure from those online thieves who can attack you anytime.'
		}
	];
</script>

<div class="goalsContainer">
	<h2 class="goalTitle">Our Goals</h2>
	<div class="goals">
		{#each goalCardData as goalCard (goalCard.goalNumber)}
			<GoalCard goalNumber={goalCard.goalNumber} content={goalCard.content} />
		{/each}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
	.goalsContainer {
		width: 100%;
		padding-top: 121px;
		padding-bottom: 111px;
		background: url('/blob-scene.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		position: relative;
	}
	.goalsContainer::before {
		content: '';
		position: absolute;
		top: -1px;
		background: linear-gradient(#1c0522, transparent);
		height: 150px;
		width: 100%;
		z-index: 1;
	}
	.goalsContainer::after {
		content: '';
		position: absolute;
		bottom: -1px;
		background: linear-gradient(transparent, #1c0522);
		height: 150px;
		width: 100%;
		z-index: 1;
	}
	.goalTitle {
		font-size: 21px;
		font-family: 'Merienda', cursive;
		color: #1c0522;
		border-radius: 44px;
		background: white;
		display: inline-block;
		padding-top: 11px;
		padding-bottom: 11px;
		width: 150px;
		text-align: center;
		margin-left: calc(50% - 75px);
		margin-bottom: 21px;
		z-index: 5;
	}
	.goals {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	@media only screen and (max-width: 675px) {
		.goalsContainer {
			background: url('/blob-scene-tab.svg');
		}
	}
	@media only screen and (max-width: 525px) {
		.goalsContainer {
			background: url('/blob-scene-mobile.svg');
			padding-bottom: 60px;
		}
	}
</style>
