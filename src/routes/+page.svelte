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
			<button onclick={() => pause()}
				><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
						fill="currentColor"
						d="M9.808 15.5h1v-7h-1zm3.384 0h1v-7h-1zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
					/></svg
				></button
			>
		{/if}
		{#if paused}
			<button onclick={() => resume()}
				><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
						fill="currentColor"
						d="m10.939 14.98l3.836-2.47q.292-.183.292-.508t-.292-.512l-3.837-2.47q-.298-.212-.618-.037t-.32.546v4.942q0 .371.32.546t.618-.036M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
					/></svg
				></button
			>
		{/if}
	</div>
	<div class="photos">
		{#each data.items as item, i}
			<div
				class="photo"
				class:active={activePhoto === i + 1}
				id="photo-{i}"
				style="background-image: url('{item.mobile}')"
			>
				<div class="photo-meta">
					<p>
						{item.meta.name}
						<span>{item.meta.description}</span>
					</p>
					<p>
						{item.meta.location}
						<date>{item.meta.date}</date>
					</p>
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
		width: 100%;
	}
	.photo-meta p {
		padding: 1rem;
		font-size: 0.75rem;
		white-space: nowrap;
	}
	.photo-meta p:first-child {
		flex-grow: 1;
		font-size: 1rem;
	}
	.photo.active {
		z-index: 1;
	}
	date {
		display: block;
		text-align: right;
		color: #ccc;
	}
	.controls {
		position: absolute;
		z-index: 2;
		bottom: 5rem;
		left: 0rem;
		padding: 1em;
		background-color: hsla(100, 100%, 100%, 0.4);
		width: 2rem;
		height: 2rem;
		border-top-right-radius: 100%;
		border-bottom-right-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
