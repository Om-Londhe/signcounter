<script>
	export let goalNumber;
	export let content;
</script>

<div class="goalCard">
	<h1>{goalNumber}</h1>
	<h3>{content}</h3>
</div>

<style>
	.goalCard {
		height: 250px;
		width: 200px;
		border: 1px solid red;
		border-radius: 11px;
		padding: 7px;
	}
</style>
