interface Config {
 name: string;
 variants?: string[];
 states?: string[];
}

export function generateComponent(config: Config) {
 return `
   <script lang="ts">
     ${config.variants?.map(v => `export let ${v} = false;`).join('\n') || ''}
     ${config.states?.map(s => `export let ${s} = false;`).join('\n') || ''}
   </script>

   <div class="${config.name}">
     <slot />
   </div>
 `;
}