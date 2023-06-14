<script lang="ts">
  export let className: string;
</script>

<div class={`max-w-screen-lg mx-auto ${className}`}>
  <slot />
</div>