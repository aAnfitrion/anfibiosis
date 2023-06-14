<script lang="ts">
	import Container from '$components/Container.svelte';

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BsGithub from 'svelte-icons-pack/bs/BsGithub';
	import VscTelescope from 'svelte-icons-pack/vsc/VscTelescope';
  import BsClock from "svelte-icons-pack/bs/BsClock";

	import Li from './Li.svelte';
</script>

<Container className="pt-16">
	<nav class="list-nav">
		<ul>
			<Li
				href="/proyectos/repositorios-de-github"
				titulo="Mis repositorios de GitHub"
				desc="Todos los proyectos de programación en los que he trabajado"
			>
				<Icon src={BsGithub} />
			</Li>
			<Li href="" titulo="Mis proyectos actuales" desc="Lo que le estoy dedicando tiempo ahora">
				<Icon src={VscTelescope} />
			</Li>
      <Li href="" titulo="Mis proyectos futuros" desc="Lo que se viene">
        <Icon src={BsClock} />
      </Li>
		</ul>
	</nav>
</Container>
