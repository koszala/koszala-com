<script>
	import { base } from '$app/paths';
	export let data;
</script>

<svelte:head>
	<title>Looking for something?</title>
</svelte:head>
<article>
	<h1>Is it something that you are looking for? 🧐</h1>
	<ul>
		{#each data.posts as post}
			<li>
				<a href="{base}{post.link}">{post.title}</a>
				<span>Published: {post.date}</span>
			</li>
		{/each}
	</ul>
</article>

<style>
	article {
		max-width: 100rem;
		margin: 3rem auto 5rem;
		padding: 0 1rem;
	}
	h1 {
		font-size: 1.5rem;
		font-family: RobotoCondensed-Bold;
	}
	li:not(.first) {
		margin-top: 1rem;
	}
	li span {
		display: block;
		color: var(--gray-20);
		font-size: 0.8rem;
	}
	a {
		font-size: 2rem;
		color: var(--accent);
		font-family: RobotoCondensed;
	}
</style>
