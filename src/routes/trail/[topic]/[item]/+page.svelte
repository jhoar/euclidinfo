<script lang="ts">
	import Navigation from '$lib/Navigation.svelte';
    import { locale } from '$lib/Store';
    export let data;
</script>

<Navigation left={data.prev} right={data.next}/>

<div>
    {#each data.json as doc} 
        {#if doc.lang === $locale}
            <h1 class="text-white text-2xl"><span class="bg-red-600">{(doc.title).toUpperCase()}</span></h1>
            <div class="text-white prose px-3">{@html doc.html}</div>
        {/if}
    {/each}
</div>
<style>
    :global(.prose p) {
        font-family: 'Notes';
    }

    h1 {
        font-family: "Notes Bold";
    }
</style>
