<script>
	export let title;
	let isHovering = false;

	const toggleHover = () => (isHovering = !isHovering);
</script>

<button class="submitButton" type="submit" on:mouseenter={toggleHover} on:mouseleave={toggleHover}>
	<span class="material-icons-outlined icon"> {isHovering ? 'east' : 'chevron_right'} </span>
	<span class="buttonText">{title}</span>
</button>

<style>
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
		border: 1px solid #ac79eb;
	}
	.icon {
		font-size: 18px;
		position: absolute;
		top: calc(50% - 9px);
		left: 10px;
		transition: all 444ms;
		z-index: 0;
		user-select: none;
		background: #bd8afc;
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
		user-select: none;
	}
	.submitButton:hover {
		width: 111px;
	}
	.submitButton:hover span.buttonText {
		left: 10px;
		opacity: 1;
	}
	.submitButton:hover .icon {
		left: calc(100% - 30px);
	}
	@media only screen and (max-width: 1200px) {
		.submitButton {
			width: 111px;
		}
		.buttonText {
			left: 10px;
			opacity: 1;
		}
		.icon {
			left: calc(100% - 30px);
		}
	}
</style>
