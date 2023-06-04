<script lang='ts'>
	import { onMount } from 'svelte';
	import { DateTime, Duration } from 'luxon';

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

		return `${padTo2Digits(days)}d${padTo2Digits(hours)}h${padTo2Digits(minutes)}m${padTo2Digits(seconds)}s`;
	}

	let utcZone: string = "UTC";

	let kscZoneId: string = "America/New_York";
	let kscZone: string = "KSC";

	let esocZoneId: string = "Europe/Paris";
	let esocZone: string = "ESOC";

    export let launch: DateTime = DateTime.fromISO("2023-07-01T15:12:00");

	export let utcDate = DateTime.utc();
	// export let utcDate = DateTime.fromISO("2023-07-01T14:12:00");

	export let kscDate: DateTime = utcDate.setZone(kscZoneId);
	export let esocDate: DateTime = utcDate.setZone(esocZoneId);
	export let timeToLaunch: Duration = launch.diff(utcDate);
	export let r = convertMsToTime(timeToLaunch.valueOf());

	onMount( () => {
		const interval = setInterval(() => {
			utcDate = DateTime.utc();
			// utcDate = DateTime.fromISO("2023-07-01T14:12:00");

			kscDate = utcDate.setZone(kscZoneId);
			esocDate = utcDate.setZone(esocZoneId);
			timeToLaunch = launch.diff(utcDate);
			r = convertMsToTime(timeToLaunch.valueOf());
		}, 1000);
	});

</script>

<div class="grid grid-cols-3 gap-3 p-2">
	<div class="flex justify-center text-white">{kscZone}</div>
    <div class="flex justify-center text-white">{esocZone}</div>
    <div class="flex justify-center text-white">{utcZone}</div>
	<div class="rounded-md variant-filled-success py-1 flex justify-center text-black">{kscDate.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</div>
    <div class="rounded-md variant-filled-success py-1 flex justify-center text-black">{esocDate.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</div>
    <div class="rounded-md variant-filled-success py-1 flex justify-center text-black">{utcDate.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</div>
</div>
<div class="flex justify-center text-white">
	Launch on {launch.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)} UTC, {r} 
</div>








