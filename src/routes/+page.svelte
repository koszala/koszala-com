<script>
	/** @type {import('./$types').PageProps} */
	import { onMount } from 'svelte';
	let { data } = $props();
	let displayTime = 5 * 1000;
	let photoMode = $state('mobile');
	let activePhoto = $state(0);
	let paused = $state(false);
	let changePhotoInterval = setInterval(changePhoto, displayTime);

	function changePhoto() {
		if (activePhoto === data.items.length) {
			activePhoto = 0;
			return;
		}
		activePhoto += 1;
	}
	function pause() {
		clearInterval(changePhotoInterval);
		paused = true;
	}
	function resume() {
		changePhotoInterval = setInterval(changePhoto, displayTime);
		paused = false;
	}

	function setActivePhoto(index) {
		pause();
		activePhoto = index + 1;
	}

	function windowResized() {
		if (window.innerWidth > 600) {
			document.querySelectorAll('.photo').forEach((photo, i) => {
				photo.style.backgroundImage = `url(${data.items[i].desktop})`;
			});
		} else {
			document.querySelectorAll('.photo').forEach((photo, i) => {
				photo.style.backgroundImage = `url(${data.items[i].mobile})`;
			});
		}
	}

	onMount(() => {
		windowResized();
	});
</script>

<svelte:window on:resize={windowResized} />

<div class="screen">
	<div class="photos">
		{#each data.items as item, i}
			<div
				class="photo"
				class:active={activePhoto === i}
				id="photo-{i}"
				style="background-image: url('{item.mobile}')"
			></div>
		{/each}
	</div>
	<article>
		<section>
			<date>{data.items[activePhoto].meta.date}</date>
			<header>{data.items[activePhoto].meta.name}</header>
			<footer>{data.items[activePhoto].meta.description}</footer>
		</section>
		<section>
			<nav class="items-list">
				<ul>
					{#each data.items as item, i}
						<li>
							<button
								type="button"
								class:active={activePhoto === i}
								onclick={() => setActivePhoto(i - 1)}>{item.meta.name}</button
							>
						</li>
					{/each}
				</ul>
			</nav>
		</section>
		<section class="controls">
			{#if !paused}
				<button type="button" onclick={() => pause()}
					><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
						><!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
							fill="currentColor"
							d="M9.808 15.5h1v-7h-1zm3.384 0h1v-7h-1zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
						/></svg
					></button
				>
			{/if}
			{#if paused}
				<button type="button" onclick={() => resume()}
					><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
						><!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
							fill="currentColor"
							d="m10.939 14.98l3.836-2.47q.292-.183.292-.508t-.292-.512l-3.837-2.47q-.298-.212-.618-.037t-.32.546v4.942q0 .371.32.546t.618-.036M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709"
						/></svg
					></button
				>
			{/if}
		</section>
	</article>
</div>

<style scoped>
	.screen {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.photos {
		height: 100%;
		width: 100%;
	}
	.photo {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		background-position-x: center;
		background-position-y: center;
		z-index: 0;
	}
	.photo.active {
		z-index: 1;
	}
	article {
		position: absolute;
		bottom: 0;
		display: flex;
		align-items: end;
		width: 100%;
		justify-content: space-between;
		z-index: 2;
	}
	article section:first-child {
		position: relative;
	}
	article header {
		padding: 2px 4px;
		font-size: 1.2rem;
		font-weight: bold;
		background-color: hsla(100, 100%, 100%, 0.75);
	}
	article footer {
		padding: 2px 4px;
		font-size: 1rem;
		color: #333;
		background-color: hsla(100, 100%, 100%, 0.75);
	}
	article date {
		padding: 2px 4px;
		color: #666;
		font-size: 0.875rem;
		background-color: hsla(100, 100%, 100%, 0.75);
	}
	.controls {
		position: absolute;
		z-index: 2;
		top: -3rem;
		right: 0;
		padding: 1em;
		width: 3rem;
		height: 3rem;
		border-top-left-radius: 100%;
		border-top-right-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: hsla(100, 100%, 100%, 0.75);
	}
	.controls svg {
		width: 3rem;
		height: 3rem;
	}
	.items-list {
		width: 100%;
		bottom: 1rem;
		right: 1rem;
		text-align: right;
		color: #666;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.items-list li button {
		padding: 2px 4px;
		background-color: hsla(100, 100%, 100%, 0.7);
	}
	.items-list li button.active {
		color: #111;
	}
</style>
