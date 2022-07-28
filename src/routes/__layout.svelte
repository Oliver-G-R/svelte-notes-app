<div class="container">
	<slot />
</div>

<style lang="scss">
	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}

	.container {
		max-width: 800px;
		margin: 0 auto;
	}
</style>
