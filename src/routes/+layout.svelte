<script>
	import { base } from '$app/paths';
	import '../app.css';
	let { children } = $props();
</script>

<header>
	<a href="{base}/">koszala.com</a>
</header>
<main>
	{@render children()}
</main>

<ul>
	<li><a href="{base}/">home</a></li>
	<li><a href="{base}/read">read</a></li>
	<li><a href="{base}/look">look</a></li>
	<!--<li><a href="/new">new</a></li>
	<li><a href="/listen">listen</a></li>
	<li><a href="/try">try</a></li>-->
</ul>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}
	header a {
		display: block;
		padding: 0.5rem 1rem;
		text-shadow: 0 0 3px white;
		font-weight: 500;
	}
	main {
		margin: 0 auto;
		height: 100%;
	}
	ul {
		position: fixed;
		bottom: -10rem;
		height: 0;
		right: 0;
		display: flex;
		padding: 0.5rem 1rem;
		list-style: none;
		background-color: #ccc;
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
		padding-left: 0.5rem;
	}
	@media screen and (min-width: 768px) {
		ul > li > a {
			transition: transform 0.3s ease-in-out;
		}
		ul > li > a:hover {
			transform: translateY(-5px);
		}
	}
</style>
