<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '../theme-euclid.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { locale } from '../Store.js';

</script>


<AppShell>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer">
		<!-- App Bar -->
		<AppBar background="bg-transparent">
			<svelte:fragment slot="lead">
				<a href='http://esa.int/euclid' target='_blank'><strong class="text-white text-2xl px-2 bg-red-600">Euclid</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<select class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-gray-300 focus:border-gray-500 block w-auto dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-700 appearance-none" bind:value={$locale}>
					<option value="en">English</option>
					<option value="fr">Français</option>
					<option value="es">Español</option>
				</select>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
</AppShell>

