<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
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
	<li>
		<a href="{base}/" class:active={$page.url.pathname == '/'}
			><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
					fill="currentColor"
					d="M7 18q-.425 0-.712-.288T6 17V7q0-.425.288-.712T7 6t.713.288T8 7v10q0 .425-.288.713T7 18m6.8-6l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T11.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
				/></svg
			></a
		>
	</li>
	<li>
		<a href="{base}/look" class:active={$page.url.pathname == '/look'}
			><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
					fill="currentColor"
					d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.35 0-6.113-1.8t-4.362-4.75q-.125-.225-.187-.462t-.063-.488t.063-.488t.187-.462q1.6-2.95 4.363-4.75T12 4t6.113 1.8t4.362 4.75q.125.225.188.463t.062.487t-.062.488t-.188.462q-1.6 2.95-4.362 4.75T12 19"
				/></svg
			></a
		>
	</li>
	<li>
		<a href="{base}/listen" class:active={$page.url.pathname == '/listen'}
			><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
				><!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path
					fill="currentColor"
					d="M9 11.5q1.05 0 1.775-.737T11.5 9q0-1.05-.725-1.775T9 6.5t-1.775.725T6.5 9q0 1.025.725 1.763T9 11.5m8.8 2.325q-.375-.15-.537-.513t-.013-.712q.375-.85.563-1.762T18 9t-.187-1.825t-.563-1.75q-.15-.35.025-.687t.55-.488q.425-.15.813.038t.562.612q.425.975.613 2.013T20 9q0 1.075-.2 2.113t-.625 2.037q-.175.425-.562.625t-.813.05m2.9 2.9q-.35-.175-.5-.537t.05-.688q.875-1.475 1.313-3.1T22 9.05t-.45-3.363t-1.325-3.137q-.2-.325-.038-.687t.513-.538q.425-.2.863-.012t.662.612q.875 1.65 1.325 3.425T24 9t-.462 3.688T22.2 16.15q-.225.425-.65.6t-.85-.025M4 18q0-.425-.287-.712T3 17t-.712.288T2 18q0 1.65 1.175 2.825T6 22q1.55 0 2.538-.775t1.512-2.275q.425-1.25.813-1.75t1.787-1.6q1.55-1.25 2.45-2.825T16 9q0-2.975-2.013-4.987T9 2T4.012 4.013T2 9q0 .425.288.713T3 10t.713-.288T4 9q0-2.125 1.438-3.562T9 4t3.563 1.438T14 9q0 1.7-.675 2.9T11.4 14.05q-1.3.95-2.025 1.85T8.3 17.85q-.35 1.1-.838 1.625T6 20q-.825 0-1.412-.587T4 18"
				/></svg
			></a
		>
	</li>
	<!--<li><a href="/new">new</a></li>
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
		height: calc(100% - 50px);
	}
	ul {
		width: 100%;
		position: fixed;
		bottom: 0;
		display: flex;
		list-style: none;
		background-color: #111;
		display: flex;
		justify-content: center;
	}
	ul > li {
		padding: 0 1rem;
	}
	ul > li > a {
		display: block;
		font-size: 1rem;
		text-decoration: none;
		font-size: 1.5rem;
		color: #666;
		padding: 0.5rem 0;
	}
	ul > li > a.active {
		color: #fff;
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
