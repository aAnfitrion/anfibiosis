<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BiLinkExternal from 'svelte-icons-pack/bi/BiLinkExternal';
	import AiOutlineStar from 'svelte-icons-pack/ai/AiOutlineStar';
	import AiOutlineFork from 'svelte-icons-pack/ai/AiOutlineFork';

	import SiJavascript from 'svelte-icons-pack/si/SiJavascript';
	import SiTypescript from 'svelte-icons-pack/si/SiTypescript';
	import SiSvelte from 'svelte-icons-pack/si/SiSvelte';

	export let titulo: string,
		desc: string,
		lenguaje: string,
		estrellas: string,
		ramas: string,
		web: string;

  const color = "#2dd4bf"
</script>

<a href="/" class="card p-4 col-span-2">
	<div class="flex justify-between items-center font-bold text-teal-400">
		<h1 class="h3">{titulo}</h1>
		<h1 class="h3">
			{#if lenguaje === 'JavaScript'}
				<Icon src={SiJavascript} {color} />
			{:else if lenguaje === 'Svelte'}
				<Icon src={SiSvelte} {color} />
			{:else if lenguaje === 'TypeScript'}
				<Icon src={SiTypescript} {color} />
			{/if}
		</h1>
	</div>
	{#if desc}
		<p>{desc}</p>
	{:else}
		<p>Sin descripción</p>
	{/if}
	<div class="flex justify-between text-emerald-500">
		<div class="flex gap-2 font-semibold h4">
			<span class="flex items-center gap-1">
				<Icon src={AiOutlineStar} color="#10b981" />
				{estrellas}
			</span>
			<span class="flex items-center gap-1">
				<Icon src={AiOutlineFork} color="#10b981" />
				{ramas}
			</span>
		</div>
		{#if web}
			<a href={web} class="h3" target="_blank">
				<Icon src={BiLinkExternal} color="#10b981" />
			</a>
		{/if}
	</div>
</a>
