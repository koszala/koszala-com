<script>
	import { base } from '$app/paths';
	export let data;
</script>

<div>
	<h1>{data.title}</h1>
	<date>{data.date}</date>

	<svelte:component this={data.content} />

	<section id="gallery">
		<header>Zdjęcia</header>
		<main>
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
		</main>
	</section>
	<p><a href="{base}/look">Back to list</a></p>
</div>

<style>
	h1 {
		font-size: 3rem;
	}
	div :global(h2) {
		font-size: 2rem;
	}
	div :global(img) {
		display: block;
		margin: 0 auto;
		width: min(100%, 500px);
	}
	.caption {
		text-align: center;
	}

	date {
		color: var(--gray-20);
	}
	header {
		margin: 1rem 0;
	}
	picture {
		display: block;
		margin-bottom: 1rem;
	}
</style>
