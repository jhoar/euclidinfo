import type { PageLoad } from './$types';

export const load = ( async ({ fetch, params }) => {

    const jsonFile = `\\data\\info\\info.json`

    // Load from /static
    const jsonresp = await fetch(jsonFile);
    const jsondata = await jsonresp.json(); 
    const itemData = jsondata[params.topic]['data'];

    for (var item of itemData) {
        const htmlFile = `\\data\\info\\${item['lang']}\\${params.topic}.html`;
//        const htmlresp = await fetch(htmlFile); // FIX LANG
        const htmlresp = await fetch(`\\data\\info\\en\\${params.topic}.html`); 
        item['html'] = await htmlresp.text(); 
    }

    return {json: itemData}
}) satisfies PageLoad;