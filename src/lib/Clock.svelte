<script lang='ts'>
	import { onMount } from 'svelte';
	import { locale } from '$lib/Store';
	import { DateTime } from 'luxon';

	function padTo2Digits(num: number) {
		return num.toString().padStart(2, '0');
	}

	function convertMsToTime(milliseconds: number) {
		let seconds = Math.floor(milliseconds / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		let days = Math.floor(hours / 24);

		seconds = seconds % 60;
		minutes = minutes % 60;
		hours = hours % 24;

		return `${padTo2Digits(days)}d ${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m ${padTo2Digits(seconds)}s`;
	}

	let header : { [lang: string]: string } = {
        'en' : 'Launch',
        'fr' : 'Lancement',
        'es' : 'Lanzamiento',
        'de' : 'Start',
        'it' : 'Lancio',
        'nl' : 'Lancering'
    };

	let utcZone: string = "UTC";
	let kscZoneId: string = "America/New_York";
	let kscZone: string = "KSC";

	let esocZoneId: string = "Europe/Paris";
	let esocZone: string = "ESOC";

    export let launch: DateTime = DateTime.fromISO("2023-07-01T15:12:00Z");
	launch = launch.setZone(utcZone);

	export let utcDate = DateTime.utc();
	// export let utcDate = DateTime.fromISO("2023-07-01T14:12:00Z");
	utcDate = utcDate.setZone(utcZone);

	export let kscDate: DateTime = utcDate.setZone(kscZoneId);
	export let esocDate: DateTime = utcDate.setZone(esocZoneId);
	export let timeToLaunch = convertMsToTime(launch.diff(utcDate).valueOf());

	onMount( () => {
		const interval = setInterval(() => {
			utcDate = DateTime.utc();
			// utcDate = DateTime.fromISO("2023-07-01T14:12:00Z");
			utcDate = utcDate.setZone(utcZone);

			kscDate = utcDate.setZone(kscZoneId);
			esocDate = utcDate.setZone(esocZoneId);
			timeToLaunch = convertMsToTime(launch.diff(utcDate).valueOf());
		}, 1000);
	});

</script>

<div class="grid grid-cols-3 gap-3 p-2">
	<div class="flex justify-center text-white">{kscZone}</div>
    <div class="flex justify-center text-white">{esocZone}</div>
    <div class="flex justify-center text-white">{utcZone}</div>
	<div class="rounded-md variant-filled-surface py-1 flex justify-center text-black">{kscDate.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</div>
    <div class="rounded-md variant-filled-surface py-1 flex justify-center text-black">{esocDate.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</div>
    <div class="rounded-md variant-filled-surface py-1 flex justify-center text-black">{utcDate.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</div>
</div>
<div class="pl-5 pt-2 flex justify-left text-white">{header[$locale]}</div> 
<div class="pl-8 pt-2 flex justify-left text-white">
	<ul>
		<li>{launch.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)} {launch.zoneName} </li>	
		<li>{launch.setZone(esocZoneId).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)} CEST</li>	
		<li>{launch.setZone(kscZoneId).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)} EDT</li>	
	</ul>
</div>
<div class="pl-8 pt-2 flex justify-left text-white">
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
	</svg>&nbsp;{timeToLaunch} 
</div>








