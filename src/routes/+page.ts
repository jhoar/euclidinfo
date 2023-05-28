import type { PageLoad } from './$types';

export const load = ( async ({ fetch }) => {
    const resp = await fetch(`\\data.json`);
    const appdata = await resp.json(); 
    return { appdata }
}) satisfies PageLoad;