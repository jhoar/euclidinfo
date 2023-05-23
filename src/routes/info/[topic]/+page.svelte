<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h1 class="text-white text-2xl"><span class="px-2 bg-red-600">{(data.json.title).toUpperCase()}</span></h1>
<div class="text-white prose px-3">{@html data.html}</div>

<style>
    :global(.prose p) {
        font-family: 'Notes';
    }

    h1 {
        font-family: "Notes Bold";
    }
</style>
