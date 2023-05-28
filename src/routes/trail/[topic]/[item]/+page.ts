import type { PageLoad } from './$types';

export const load = ( async ({ fetch, params }) => {

    const jsonFile = `\\data\\trail\\${params.topic}.json`

    // Load from /static
    const jsonresp = await fetch(jsonFile);
    const jsondata = await jsonresp.json(); 
    const itemData = jsondata[params.item]['data'];

    for (var item of itemData) {
        const htmlFile = `\\data\\trail\\${item['lang']}\\${params.item}.html`;
        console.log(htmlFile);
//        const htmlresp = await fetch(htmlFile); // FIX LANG
        const htmlresp = await fetch(`\\data\\trail\\en\\${params.item}.html`); 
        item['html'] = await htmlresp.text(); 
    }

    return {json: itemData}
}) satisfies PageLoad;