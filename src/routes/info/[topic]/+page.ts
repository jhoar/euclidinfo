import type { PageLoad } from './$types';

export const load = ( async ({ fetch, params }) => {
    const jsonresp = await fetch(`\\info\\${params.topic}.json`);
    const jsondata = await jsonresp.json(); 
    const htmlresp = await fetch(`\\info\\${params.topic}.html`);
    const htmldata = await htmlresp.text(); 
    return {json: jsondata, html: htmldata}
}) satisfies PageLoad;