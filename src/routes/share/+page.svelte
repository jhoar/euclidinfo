<script lang="ts">
	import Navigation from '$lib/Navigation.svelte';
    import { locale } from '$lib/Store';

    let header : { [lang: string]: string } = {
		'en' : 'Share this!',
		'fr' : 'Partagez ce message !',
		'es' : 'Compártelo!',
		'de' : 'Teilen Sie das!',
		'it' : 'Condividete questo!',
		'nl' : 'Deel dit!'
	};


</script>

<Navigation left={""} right={""}/>

<div class="container pt-16 mx-auto flex justify-center items-center">
    <h1 class="h1 text-white flex justify-center py-2">{header[$locale]}</h1>
</div>
<div class="container pt-16 mx-auto flex justify-center items-center">
    <img alt='QR code' src='/qr.jpg' />
</div>
<style>
    :global(.prose p) {
        font-family: 'Notes';
    }

    h1 {
        font-family: "Notes Bold";
    }
</style>
