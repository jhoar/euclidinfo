<script lang='ts'>
	import { locale } from '$lib/Store';
    export let data;

	let header : { [lang: string]: string } = {
		'en' : 'Learn about Euclid',
		'fr' : 'En savoir plus sur Euclid',
		'es' : 'Aprender sobre Euclid',
		'de' : 'Lernen Sie über Euclid',
		'it' : 'Conoscere Euclid'
	};

	let start : { [lang: string]: string } = {
		'en' : 'Start',
		'fr' : 'Commencer',
		'es' : 'Empezar',
		'de' : 'Starten',
		'it' : 'Inizio'
	};

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="imgbckspace-y-5 w-96">
		<h1 class="h1 text-white flex justify-center py-2">{header[$locale]}</h1>
		{#each data.appdata.trails as trail}
			{#each trail.data as data} 
				{#if data.lang === $locale}
				<div class="card m-2">
					<header class="card-header variant-filled-tertiary rounded-none rounded-t-lg text-white text-2xl py-3">{(data.title).toUpperCase()}</header>
					<section class="bg-black">
						<div>
							<img src={trail.image} alt={data.title}/>
						</div>
						<div class='p-4 text-lg'>
							{data.subtitle}
						</div></section>
					<footer class="card-footer flex justify-center bg-black rounded-none rounded-b-lg pl-1 py-2"><a class="btn rounded-md variant-filled-success py-1 text-black" href={trail.url}>{start[$locale]}</a></footer>
				</div>	
				{/if}
			{/each}
		{/each}
	</div>
</div>

