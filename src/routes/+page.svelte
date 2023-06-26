<script lang='ts'>
	import Clock from '$lib/Clock.svelte';
	import { locale } from '$lib/Store';
	import { frontpageheader } from '$lib/i18n'
    export let data;
</script>

<Clock />

<div class="container pt-10 mx-auto flex justify-center items-center">
	<div class="imgbckspace-y-5 w-96">
		<h1 class="h1 text-white flex justify-center py-2">{frontpageheader[$locale]}</h1>
		{#each data.carddata as card}
			{#each card.data as data} 
				{#if data.lang === $locale}
				<div class="card m-2">
					<header class="card-header variant-filled-tertiary rounded-none rounded-t-lg text-white text-2xl py-3">{(data.title).toUpperCase()}</header>
					<section class="bg-black">
						<div>
							<img src={card.image} alt={data.title}/>
						</div>
						<div class='p-4 text-lg'>
							{data.subtitle}
						</div></section>
					<footer class="card-footer flex justify-center bg-black rounded-none rounded-b-lg pl-1 py-2"><a class="btn rounded-md variant-filled-success py-1 text-black" href={card.url}>{data.button}</a></footer>
				</div>	
				{/if}
			{/each}
		{/each}
	</div>
</div>

