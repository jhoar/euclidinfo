<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '../theme-euclid.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { locale } from '$lib/Store';

	export let data;

</script>


<AppShell>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer">
		<!-- App Bar -->
		<AppBar background="bg-transparent">
			<svelte:fragment slot="lead">
				<a href={data.confdata.mission.url} target='_blank'><strong class="text-white text-2xl px-2 bg-red-600">{data.confdata.mission.name}</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a href="/share"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
				  </svg>
				  </a>
				<a class="text-white text-lg" href='/credits'>Credits</a>
				<select class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-gray-300 focus:border-gray-500 block w-auto dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-700 appearance-none" bind:value={$locale}>
					<option value="de">Deutsch</option>
					<option value="en">English</option>
					<option value="es">Español</option>
					<option value="fr">Français</option>
					<option value="it">Italiano</option>
					<option value="nl">Nederlands</option>
				</select>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>

