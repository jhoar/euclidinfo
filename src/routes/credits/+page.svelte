<script lang="ts">
	import Navigation from '$lib/Navigation.svelte';
</script>

<Navigation left="" right=""/>

<h1 class="text-white text-2xl pb-2"><span class="bg-red-600">CREDITS</span></h1>
<ul class="list-disc">
    <li>Discover Euclid: Euclid Launch Kit</li>
    <li>Euclid Science 101: sci.esa.int</li>
    <li>Built with : <a href="https://kit.svelte.dev/">SvelteKit</a>, <a href="https://tailwindcss.com/TailwindCSS">TailwindCSS</a>, <a href="https://www.skeleton.dev/">Skeleton</a>, <a href="https://heroicons.com/">Heroicons</a></li>
    <li>Translations: <a href="https://www.deepl.com/translator">DeepL</a>. If the translation is terrible, blame AI. Don't worry, it won't be the last time.</li>
</ul>

<style>
    :global(.prose p) {
        font-family: 'Notes';
    }

    h1 {
        font-family: "Notes Bold";
    }
</style>
