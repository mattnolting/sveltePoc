<script lang="ts">
  import { GENERIC_STATES, GENERIC_MODIFIERS } from "../../config/constants/constants";
  import { pfPrefix } from "./components/helpers";

  // Define the interface directly in the component
  interface ComponentProps {
    as?: string;
    name?: string;
    class?: string;

    // State management with typed states
    states?: Partial<Record<(typeof GENERIC_STATES)[number], boolean>>;
    modifiers?: Partial<Record<(typeof GENERIC_MODIFIERS)[number], boolean>>;

    // Allow for additional props
    [key: string]: any;
  }

  let {
    as = 'div',
    name = 'component',
    states = {},
    modifiers = {},
    children,
    ...restProps
  } = $props<ComponentProps>();

  // Derive classes based on states and modifiers
  const classList = $derived(
    [
      pfPrefix(name),
      // provision default states
      ...Object.entries(states)
        .filter(([_, value]) => value)
        .map(([state]) => `pf-m-${state}`),

      // provision default modifiers
      ...Object.entries(modifiers)
        .filter(([_, value]) => value)
        .map(([modifier]) => `pf-m-${modifier}`),
      restProps.class || ''
    ].filter(Boolean).join(' ')
  );
</script>

<svelte:element
  this={as}
  class={classList}
  {...restProps}
>
  {@render children?.()}
</svelte:element>