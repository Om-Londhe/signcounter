<script>
</script>

<button class="deleteButton" on:click type="button">
	<span class="material-icons-outlined icon"> delete </span>
	<span class="buttonText">Delete</span>
</button>

<style>
	.deleteButton {
		height: 40px;
		width: 40px;
		outline: none;
		border: 2px solid #cf6679;
		border-radius: 21px;
		background: #cf6679;
		position: relative;
		cursor: pointer;
		transition: all 444ms;
		overflow: hidden;
		border: 1px solid #be5568;
	}
	.icon {
		font-size: 18px;
		position: absolute;
		top: calc(50% - 9px);
		left: 9px;
		transition: all 444ms;
		z-index: 1;
		user-select: none;
		background: #cf6679;
	}
	.buttonText {
		font-size: 14px;
		transition: all 444ms;
		padding-left: 7px;
		padding-right: 7px;
		position: absolute;
		top: calc(50% - 10px);
		left: -100%;
		opacity: 0;
		background: #cf6679;
		padding-left: 4px;
		padding-right: 4px;
		z-index: 0;
		font-family: 'Poppins', sans-serif;
		user-select: none;
	}
	.deleteButton:hover {
		width: 111px;
	}
	.deleteButton:hover span.buttonText {
		left: calc(50% - 11px);
		opacity: 1;
	}
	.deleteButton:hover .icon {
		left: 10px;
	}
	@media only screen and (max-width: 1200px) {
		.deleteButton {
			width: 111px;
		}
		.buttonText {
			left: calc(50% - 11px);
			opacity: 1;
		}
		.icon {
			left: 10px;
		}
	}
</style>
