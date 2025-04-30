<!-- src/lib/components/docs/PageNavigation.svelte -->
<!-- This component handles the display of our navigation structure -->
<script lang="ts">
  import { page } from '$app/state';
</script>

<nav class="pf-v6-c-nav">
  <ul class="pf-v6-c-nav__list">
    <li class="pf-v6-c-nav__item">
      <a href='/docs/' class="pf-v6-c-nav__link">
        Documentation
      </a>
    </li>

    <ul class="pf-v6-c-nav__list">
      <li class="pf-v6-c-nav__item">
        <a href='/docs/why-svelte' class="pf-v6-c-nav__link">Why Svelte</a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href='/docs/getting-started' class="pf-v6-c-nav__link">Getting Started</a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href='/docs/metrics' class="pf-v6-c-nav__link">Metrics</a>
      </li>
    </ul>
  </ul>
  <ul class="pf-v6-c-nav__list">
    <li class="pf-v6-c-nav__item">
      <a href='/components/' class="pf-v6-c-nav__link">
        Components
      </a>
    </li>

    <ul class="pf-v6-c-nav__list">
      <li class="pf-v6-c-nav__item">
        <a href='/components/alert' class="pf-v6-c-nav__link">Alert</a>
      </li>
      <li class="pf-v6-c-nav__item">
        <a href='/components/card' class="pf-v6-c-nav__link">Card</a>
      </li>
    </ul>
  </ul>
</nav>