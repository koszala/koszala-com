<script>
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}
<ul>
	<li class="pr-2"><a href="/new">new</a></li>
	<li class="pr-2"><a href="/read">read</a></li>
	<li class="pr-2"><a href="/listen">listen</a></li>
	<li class="pr-2"><a href="/look">look</a></li>
	<li class="pr-2"><a href="/try">try</a></li>
</ul>

<style>
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
	}
	@media screen and (min-width: 768px) {
		ul {
			right: 1rem;
			bottom: 1rem;
		}
		ul > li > a {
			font-size: 2rem;
			transition: transform 0.3s ease-in-out;
		}
		ul > li > a:hover {
			transform: translateY(-5px);
		}
	}
</style>
