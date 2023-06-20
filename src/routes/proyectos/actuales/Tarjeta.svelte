<script lang="ts">
	export let espejo: string | undefined,
		titulo: string,
		desc: string,
		enlace: string,
		enlaceTexto: string,
		img_src: string,
		img_alt: string;
</script>

<div class="flex items-center gap-4">
	{#if !espejo}
		<div class="w-2/3">
			<h2 class="h2 leading-relaxed font-semibold">{titulo}</h2>
			<p class="text-lg">
				{desc}
			</p>
			<a href={enlace} class="btn mt-2 variant-ghost-primary font-semibold">
				{enlaceTexto}
				<slot />
			</a>
		</div>
		<img src={img_src} alt={img_alt} class="w-1/3 rounded-lg" />
	{:else}
  <img src={img_src} alt={img_alt} class="w-1/3 rounded-lg" />
		<div class="w-2/3 text-end">
			<h2 class="h2 leading-relaxed font-semibold">{titulo}</h2>
			<p class="text-lg">
				{desc}
			</p>
			<a href={enlace} class="btn mt-2 variant-ghost-primary font-semibold">
				{enlaceTexto}
				<slot />
			</a>
		</div>
	{/if}
</div>
