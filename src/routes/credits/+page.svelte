<script lang="ts">
	import Navigation from '$lib/Navigation.svelte';
</script>

<Navigation left="" right=""/>

<h1 class="text-white text-2xl pb-2"><span class="bg-red-600">CREDITS</span></h1>
<ul class="list-disc">
    <li>Discover Euclid: <b>ESA</b></li>
    <li>Built with : <a href="https://kit.svelte.dev/"><b>SvelteKit</b></a></li>
    <li>Translations: <a href="https://www.deepl.com/translator"><b>DeepL</b></a>. If the translation is terrible, blame AI. Don't worry, it won't be the last time.</li>
</ul>

<style>
    :global(.prose p) {
        font-family: 'Notes';
    }

    h1 {
        font-family: "Notes Bold";
    }
</style>
