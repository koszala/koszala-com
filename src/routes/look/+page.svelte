<script>
	import { base } from '$app/paths';
	export let data;
</script>

<h1>Lista rzeczy do obejrzenia</h1>
<ul>
	{#each data.posts as post}
		<li>
			<a href="{base}{post.link}">{post.title}</a>
			<span>Published: {post.date}</span>
		</li>
	{/each}
</ul>

<style>
	li:not(.first) {
		margin-top: 1rem;
	}
	li span {
		display: block;
		color: var(--gray-20);
		font-size: 0.8rem;
	}
	a {
		font-size: 3rem;
		color: var(--accent);
	}
</style>
