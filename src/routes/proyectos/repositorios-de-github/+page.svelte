<script>
	import Container from '$components/Container.svelte';

	import { reposFetch } from '$services/GithubReposFetch';
	import Carta from './Carta.svelte';

	import { Motion } from 'svelte-motion';

	const variants = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -1000 }
	};
</script>

<Container className="py-8">
	<div class="pb-4">
		<h1 class="h2 font-semibold">Mis repositorios de github</h1>
		<p>Todos los proyectos de programación en los que he trabajado. Algunos siguen activos.</p>
	</div>
	{#await reposFetch then repos}
		<Motion initial="hidden" animate="visible" {variants} let:motion>
			<div class="grid grid-cols-6 gap-2" use:motion>
				{#each repos as info}
					<Carta
						titulo={info.name}
						desc={info.description}
						lenguaje={info.language}
						estrellas={info.stargazers_count}
						ramas={info.forks}
						github={info.html_url}
						web={info.homepage}
					/>
				{/each}
			</div>
		</Motion>
	{/await}
</Container>
