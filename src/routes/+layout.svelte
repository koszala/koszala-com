<script>
	import { base } from '$app/paths';
	import '../app.css';
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<ul>
	<li><a href="{base}/read">read</a></li>
	<li><a href="{base}/look">look</a></li>
	<!--<li><a href="/new">new</a></li>
	<li><a href="/listen">listen</a></li>
	<li><a href="/try">try</a></li>-->
</ul>

<style>
	main {
		max-width: 1280px;
		margin: 0 auto;
	}
	ul {
		position: fixed;
		bottom: 0;
		right: 0;
		display: flex;
		list-style: none;
	}
	ul > li {
		padding-right: 0.5rem;
	}
	ul > li > a {
		display: block;
		font-size: 1rem;
		text-decoration: none;
		font-size: 2rem;
		color: #666;
	}
	ul > li > a:not(:last-child)::after {
		content: '-';
		padding-left: 0.5rem;
	}
	@media screen and (min-width: 768px) {
		ul {
			right: 1rem;
			bottom: 1rem;
		}
		ul > li > a {
			transition: transform 0.3s ease-in-out;
		}
		ul > li > a:hover {
			transform: translateY(-5px);
		}
	}
</style>
