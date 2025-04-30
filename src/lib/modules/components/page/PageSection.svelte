<script lang='ts'>
  import { pfPrefix } from "../helpers";
  let {
    className = 'page__section',
    text = '',
    children,
    ...props
  } = $props();
</script>

<!-- # Card -->
<div class="{pfPrefix(className)}">
  {text}
  {@render children?.()}
</div>