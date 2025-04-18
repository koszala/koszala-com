<script>
	export let data;
</script>

<div>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>

	<svelte:component this={data.content} />
</div>

<style>
	h1 {
		font-size: 3rem;
	}
	div :global(img) {
		display: block;
		margin: 0 auto;
		width: min(100%, 500px);
	}
	div :global(figcaption) {
		text-align: center;
	}
</style>
