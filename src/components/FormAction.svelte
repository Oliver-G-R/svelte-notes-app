<script lang="ts">
</script>

<form>
	<input type="text" placeholder="Title" />
	<input type="text" placeholder="DEscription" />
	<button>Save</button>
</form>

<style lang="scss">
	form {
		display: flex;
		gap: 20px;
		flex-direction: column;
		align-items: center;

		input {
			width: 60%;
			border: none;
			outline: none;
			padding: 5px;
			font-size: 18px;
			border-bottom: 2px solid black;
		}
		button {
			width: 60%;
			cursor: pointer;
			border: none;
			outline: none;
			padding: 5px;
			font-size: 18px;
		}
	}
</style>
