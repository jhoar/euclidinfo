<script lang="ts">
	import { locale } from '../../../../Store.js';
    import type { PageData } from './$types';
    export let data: PageData;
</script>

{#each data.json as doc} 
    {#if doc.lang === $locale}
        <h1 class="text-white text-2xl"><span class="px-2 bg-red-600">{(doc.title).toUpperCase()}</span></h1>
        <div class="text-white prose px-3">{@html doc.html}</div>
    {/if}
{/each}

<style>
    :global(.prose p) {
        font-family: 'Notes';
    }

    h1 {
        font-family: "Notes Bold";
    }
</style>
