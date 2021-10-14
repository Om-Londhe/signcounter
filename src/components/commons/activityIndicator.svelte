<div class="outer">
	<div class="inner inner1" />
	<div class="inner inner2" />
	<div class="inner inner3" />
	<div class="inner inner4" />
</div>

<style>
	.outer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: fit-content;
		margin-left: 4px;
	}
	.inner {
		height: 11px;
		width: 11px;
		border-radius: 50%;
		animation: activityInicatorAnimation 4s infinite;
		margin-right: 4px;
	}
	.inner1 {
		animation-delay: 0.5s;
	}
	.inner2 {
		animation-delay: 1s;
	}
	.inner3 {
		animation-delay: 1.5s;
	}
	.inner4 {
		animation-delay: 2s;
	}

	@keyframes activityInicatorAnimation {
		0%,
		100% {
			background-color: #03dac5;
			transform: scale(1);
		}
		50% {
			background: transparent;
			transform: scale(0.7);
		}
	}
</style>
