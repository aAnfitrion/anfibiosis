<script>
	import Container from '$components/Container.svelte';

	import { reposFetch } from '$services/GithubReposFetch';
	import Carta from './Carta.svelte';
</script>

<Container className="py-8">
	<div class="pb-4">
    <h1 class="h2 font-semibold ">Mis repositorios de github</h1>
    <p>Todos los proyectos de programación en los que he trabajado. Algunos siguen activos.</p>
  </div>
	<div class="grid grid-cols-6 gap-2">
		{#await reposFetch then repos}
			{#each repos as info}
				<Carta
					titulo={info.name}
					desc={info.description}
          lenguaje={info.language}
					estrellas={info.stargazers_count}
					ramas={info.forks}
					web={info.homepage}
				/>
			{/each}
		{/await}
	</div>
</Container>
