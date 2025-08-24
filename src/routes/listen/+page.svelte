<script>
	import { base } from '$app/paths';
	export let data;
</script>

<article>
	<h1>Do you listen? Do you know how to listen?</h1>
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
		font-size: 1.4rem;
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
		font-size: 1.4rem;
		color: var(--accent);
	}
</style>
