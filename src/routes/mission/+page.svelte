<script lang="ts">
	import Calendar from '$lib/Calendar.svelte';
	import Clock from '$lib/Clock.svelte';
</script>

<h1 class="text-white text-2xl"><span class="bg-red-600">What's next</span></h1>
<div class='grid grid-cols-3 gap-4 p-2 text-white text-2xl'>
	<span><Clock timeZoneId={"America/New_York"} timeZone={"KSC"}/></span>
	<span><Clock timeZoneId={"Europe/Paris"} timeZone={"ESOC"}/></span>
	<span><Clock timeZoneId={"UTC"} timeZone={"UTC"}/></span>
</div>
<Calendar />