<script lang='ts'>
	import { onMount } from 'svelte';
	import { DateTime } from 'luxon';

	export let timeZoneId: string = "UTC";
	export let timeZone: string = "UTC";

	let date = DateTime.now().setZone(timeZoneId); 
	$: dateString = date.toLocaleString(DateTime.TIME_24_WITH_SECONDS);
	
	onMount( () => {
		const interval = setInterval(() => {
			date = DateTime.now().setZone(timeZoneId);
		}, 1000);
	});

</script>

{dateString} {timeZone}







