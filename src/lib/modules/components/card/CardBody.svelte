<script lang='ts'>
  import Component from "$lib/modules/Component.svelte";
  let { children, ...props } = $props();
</script>

<Component {...props} name="card__body">
  {@render children?.()}
</Component>