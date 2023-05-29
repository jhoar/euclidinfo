<script lang='ts'>
    import type { PageData } from './$types';
	import { locale } from '../Store.js';

    export let data: PageData;

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="imgbckspace-y-5 w-96">
		<h1 class="h1">Learn all about Euclid</h1>
		{#each data.appdata.trails as trail}
			{#each trail.doc as doc} 
				{#if doc.lang === $locale}
				<div class="card m-2">
					<header class="card-header variant-filled-tertiary rounded-none rounded-t-lg text-white text-2xl py-3">{(doc.title).toUpperCase()}</header>
					<section class="p-4 bg-black">{doc.subtitle}</section>
					<footer class="card-footer flex justify-center bg-black rounded-none rounded-b-lg pl-1 py-2"><a class="btn rounded-md variant-filled-success py-1" href={trail.url}>Start</a></footer>
				</div>	
				{/if}
			{/each}
		{/each}
	</div>
</div>

