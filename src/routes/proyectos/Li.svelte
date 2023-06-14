<script lang="ts">
	export let href: string, titulo: string, desc: string;
</script>

<li>
	<a {href}>
		<span class="h2">
			<slot />
		</span>
		<span class="flex-auto hover:pl-4 duration-200">
			<dt class="h2 font-semibold">{titulo}</dt>
			<dd>{desc}</dd>
		</span>
	</a>
</li>
