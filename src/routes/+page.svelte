<script lang='ts'>
    import type { PageData } from './$types';
	import { locale } from '../Store.js';

    export let data: PageData;

	let header : { [lang: string]: string } = {
		'en' : 'Learn about Euclid',
		'fr' : 'En savoir plus sur Euclid',
		'es' : 'Aprender sobre Euclid'
	};

	let start : { [lang: string]: string } = {
		'en' : 'Start',
		'fr' : 'Commencer',
		'es' : 'Empezar'
	};

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="imgbckspace-y-5 w-96">
		<h1 class="h1 flex justify-center py-2">{header[$locale]}</h1>
		{#each data.appdata.trails as trail}
			{#each trail.doc as doc} 
				{#if doc.lang === $locale}
				<div class="card m-2">
					<header class="card-header variant-filled-tertiary rounded-none rounded-t-lg text-white text-2xl py-3">{(doc.title).toUpperCase()}</header>
					<section class="p-4 bg-black">{doc.subtitle}</section>
					<footer class="card-footer flex justify-center bg-black rounded-none rounded-b-lg pl-1 py-2"><a class="btn rounded-md variant-filled-success py-1" href={trail.url}>{start[$locale]}</a></footer>
				</div>	
				{/if}
			{/each}
		{/each}
	</div>
</div>

