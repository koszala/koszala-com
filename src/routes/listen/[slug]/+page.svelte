<script>
	import { base } from '$app/paths';
	export let data;
</script>

<article>
	<header>
		<h1>{data.title}</h1>
		<date>{data.date}</date>
	</header>

	<main>
		<svelte:component this={data.content} />

		<section>
			{#each data.links as link}
				<div>
					{#if link.type === 'bandcamp'}
						<iframe
							title="bandcamp-player"
							style="border: 0; width: 100%; height: 120px;"
							src="https://bandcamp.com/EmbeddedPlayer/album={link.id}/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
							seamless
						>
						</iframe>
					{/if}
				</div>
			{/each}
		</section>
	</main>
	<footer>
		<p><a href="{base}/listen">Back to list</a></p>
	</footer>
</article>

<style>
	h1 {
		font-size: 2.4rem;
		font-family: Roboto;
	}
	article {
		max-width: 100rem;
		margin: 3rem auto 5rem;
		padding: 0 1rem;
	}
	article :global(h2) {
		font-size: 2rem;
	}
	article :global(p) {
		margin-bottom: 1rem;
	}
	header date {
		color: var(--gray-20);
		display: block;
	}

	main {
		margin: 2rem 0;
	}

	footer {
		margin-top: 2rem;
	}
</style>
