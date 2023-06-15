<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-transparent" border="border-b border-primary-700/30">
			<svelte:fragment slot="lead">
				<img
					src="https://media.discordapp.net/attachments/1032516925617614878/1116981303968006186/ad9d39456f480312ff69ab7daedc674f.png"
					alt="Imagen de perfil de Anfitrion"
					height="40"
					width="40"
				/>
				<strong class="h3 uppercase pl-2">Anfitrion</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn font-semibold" href="/" rel="noreferrer"> Presentación </a>
				<a class="btn font-semibold" href="/proyectos" rel="noreferrer"> Proyectos </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
