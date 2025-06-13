<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
	let displayTime = 2 * 1000;
	let activePhoto = $state(data.items.length);
	let paused = $state(false);
	let changePhotoInterval = setInterval(changePhoto, displayTime);

	function changePhoto() {
		if (activePhoto == 1) {
			activePhoto = data.items.length;
			return;
		}
		activePhoto -= 1;
	}
	function pause() {
		clearInterval(changePhotoInterval);
		paused = true;
	}
	function resume() {
		changePhotoInterval = setInterval(changePhoto, displayTime);
		paused = false;
	}
</script>

<div class="screen">
	<div class="controls">
		{#if !paused}
			<button onclick={() => pause()}>pause</button>
		{/if}
		{#if paused}
			<button onclick={() => resume()}>resume</button>
		{/if}
	</div>
	<div class="photos">
		{#each data.items as item, i}
			<div
				class="photo"
				class:active={activePhoto === i + 1}
				id="photo-{i}"
				style="background-image: url('{item.desktop}')"
			>
				<div class="photo-meta">
					<p>
						{item.meta.name}
						<span>{item.meta.description}</span>
					</p>
					<p>{item.meta.location}</p>
					<p>{item.meta.date}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style scoped>
	.screen {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.photos,
	.photo {
		position: absolute;
		width: 100%;
		height: 100vh;
		background-repeat: no-repeat;
		background-size: cover;
		background-position-x: center;
		z-index: 0;
	}
	.photo-meta {
		position: absolute;
		bottom: 0;
		background: #fff;
		display: flex;
	}
	.photo-meta p {
		padding: 1rem;
	}
	.photo.active {
		z-index: 1;
	}
	.controls {
		position: absolute;
		z-index: 2;
		bottom: 5rem;
		left: 0;
		padding: 1rem;
		background-color: #ccc;
	}
</style>
