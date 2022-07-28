<script lang="ts">
	import FormAction from '../components/FormAction.svelte'
</script>

<body>
	<header class="top-header container">
		<h1>Notes App 📝</h1>
	</header>

	<FormAction />
</body>

<style lang="scss">
	.top-header {
		padding: 20px;
		width: 100%;
		h1 {
			text-align: center;
			font-size: 2em;
			font-weight: bold;
			margin: 0;
		}
	}
</style>
