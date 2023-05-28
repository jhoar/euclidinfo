<script lang="ts">
	import { locale } from '../../../../Store.js';
    import type { PageData } from './$types';
    export let data: PageData;
    console.log(data.json)
</script>

{#each data.json as doc} 
    {#if doc.lang === $locale}
        <h1 class="text-white text-2xl"><span class="px-2 bg-red-600">{(doc.title).toUpperCase()}</span></h1>
        <div class="text-white prose px-3">{@html doc.html}</div>
    {/if}
{/each}

<div class="grid grid-cols-3 gap-4">
    <div>
{#if data.prev !== ""}
<a class="btn rounded-md variant-filled-success py-1" href={data.prev}>Previous</a>
{/if}
    </div>
    <div>
        <a class="btn rounded-md variant-filled-success py-1" href="/">Home</a>
    </div>
    <div>
{#if data.next !== ""}
<a class="btn rounded-md variant-filled-success py-1" href={data.next}>Next</a>
{/if}
    </div>
</div>

<style>
    :global(.prose p) {
        font-family: 'Notes';
    }

    h1 {
        font-family: "Notes Bold";
    }
</style>
