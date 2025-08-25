<script>
	import { base } from '$app/paths';
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>
<article>
	<header>
		<h1>{data.title}</h1>
		<date>{data.date}</date>
	</header>

	<main>
		<section class="description">
			<svelte:component this={data.content} />
		</section>
		<section id="gallery">
			{#if data.photos}
				<ul>
					{#each data.photos as photo}
						<li>
							<picture>
								<source media="(min-width:500px)" srcset={photo.desktop} />
								<img src={photo.mobile} alt={photo.title} style="width:auto;" />
								<p class="caption">{photo.caption}</p>
							</picture>
						</li>
					{/each}
				</ul>
			{/if}
			{#if data.galleryPhotos}
				<div class="gallery">
					{#each data.galleryPhotos as photo}
						<div>
							<img src={photo} alt="" style="width:auto;" />
						</div>
					{/each}
				</div>
			{/if}
		</section>
	</main>
	<footer>
		<p><a href="{base}/look">Back to list</a></p>
	</footer>
</article>

<style>
	h1 {
		font-size: 2.4rem;
		font-family: RobotoCondensed-Bold;
	}
	article {
		max-width: 100rem;
		margin: 3rem auto 5rem;
		padding: 0 1rem;
	}
	article :global(h2) {
		font-size: 1.5rem;
		font-family: RobotoCondensed;
		line-height: 1.5;
	}
	article :global(p) {
		margin-top: 1rem;
	}
	article :global(img) {
		display: block;
		margin: 0 auto;
		width: min(100%, 500px);
	}
	.caption {
		text-align: center;
	}

	date {
		color: var(--gray-20);
		display: block;
		font-family: Roboto-Light;
	}
	header {
		margin: 1rem 0;
	}
	picture {
		display: block;
		margin-bottom: 1rem;
	}
	.description {
		margin: 2rem 0;
	}
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
	}
	footer {
		padding: 2rem 0 5rem;
	}
	footer p {
		border: 1 px solid blue;
	}
</style>
