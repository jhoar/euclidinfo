<script lang='ts'>
	import { onMount } from 'svelte';
	import { DateTime } from 'luxon';

	export let timeZoneId: string = "America/New_York";
	export let timeZone: string = "EDT";

	let date = DateTime.now().setZone(timeZoneId); 
	$: dateString = date.toLocaleString(DateTime.TIME_24_WITH_SECONDS);
	
	onMount( () => {
		const interval = setInterval(() => {
			date = DateTime.now().setZone(timeZoneId);
		}, 1000);
	});

</script>

{dateString} {timeZone}







