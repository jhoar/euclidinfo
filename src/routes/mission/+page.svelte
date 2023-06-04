<script lang="ts">
	import Clock from '$lib/Clock.svelte';
	import { locale } from '$lib/Store';

    let header : { [lang: string]: string } = {
        'en' : 'Mission Events',
        'fr' : 'Événements de la mission',
        'es' : 'Misión Eventos',
        'de' : 'Ereignisse der Mission',
        'it' : 'Eventi della missione',
        'nl' : 'Missie Evenementen'
    };

</script>

<div class="grid grid-cols-3 gap-4 p-2">
    <div>
        <span class="rounded-md text-gray-500 bg-gray-500 py-1 flex justify-left">-</span>
    </div>
    <div>
        <a class="btn rounded-md variant-filled-success py-1 flex justify-center text-black" href="/">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4697 3.84076C11.7626 3.54787 12.2374 3.54787 12.5303 3.84076L21.2197 12.5301C21.5126 12.823 21.9874 12.823 22.2803 12.5301C22.5732 12.2372 22.5732 11.7623 22.2803 11.4694L13.591 2.7801C12.7123 1.90142 11.2877 1.90142 10.409 2.7801L1.71967 11.4694C1.42678 11.7623 1.42678 12.2372 1.71967 12.5301C2.01256 12.823 2.48744 12.823 2.78033 12.5301L11.4697 3.84076Z" fill="black"/>
                <path d="M12 5.43176L20.159 13.5908C20.1887 13.6205 20.2191 13.6492 20.25 13.6769V19.8748C20.25 20.9103 19.4105 21.7498 18.375 21.7498H15C14.5858 21.7498 14.25 21.414 14.25 20.9998V16.4998C14.25 16.0856 13.9142 15.7498 13.5 15.7498H10.5C10.0858 15.7498 9.75 16.0856 9.75 16.4998V20.9998C9.75 21.414 9.41421 21.7498 9 21.7498H5.625C4.58947 21.7498 3.75 20.9103 3.75 19.8748V13.6769C3.78093 13.6492 3.81127 13.6205 3.84099 13.5908L12 5.43176Z" fill="black"/>
            </svg>
        </a>
    </div>
    <div>
        <span class="rounded-md text-gray-500 bg-gray-500 py-1 flex justify-left">-</span>
    </div>
</div>


<h1 class="pt-8 text-white text-2xl"><span class="bg-red-600">{header[$locale].toUpperCase()}</span></h1>
<div class='text-white text-2xl'><Clock /></div>

<style>
    :global(.prose p) {
        font-family: 'Notes';
    }

    h1 {
        font-family: "Notes Bold";
    }
</style>
