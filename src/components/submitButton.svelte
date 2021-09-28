<script>
	let isHovering = false;

	const toggleHover = () => (isHovering = !isHovering);
</script>

<button class="submitButton" on:mouseenter={toggleHover} on:mouseleave={toggleHover}>
	<span class="material-icons-outlined icon"> {isHovering ? 'east' : 'chevron_right'} </span>
	<span class="buttonText"> Add </span>
</button>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
	.submitButton {
		height: 40px;
		outline: none;
		border: 2px solid #bd8afc;
		border-radius: 21px;
		background: #bd8afc;
		position: relative;
		cursor: pointer;
		transition: all 444ms;
		width: 40px;
		overflow: hidden;
	}
	.icon {
		font-size: 18px;
		position: absolute;
		top: calc(50% - 9px);
		left: 10px;
		transition: all 444ms;
		z-index: 0;
	}
	.buttonText {
		font-size: 14px;
		transition: all 444ms;
		padding-left: 7px;
		padding-right: 7px;
		position: absolute;
		top: calc(50% - 10px);
		left: 100%;
		opacity: 0;
		background: #bd8afc;
		padding-left: 4px;
		padding-right: 4px;
		z-index: 1;
		font-family: 'Poppins', sans-serif;
	}
	.submitButton:hover {
		width: 101px;
	}
	.submitButton:hover span.buttonText {
		left: 10px;
		opacity: 1;
	}
	.submitButton:hover .icon {
		left: calc(100% - 30px);
	}
</style>
