export async function load ( { fetch, params, url } ) {

    const { pathname } = url

    // Load from /static
    const jsonFile = `\\data\\trail\\${params.topic}.json`
    const jsonresp = await fetch(jsonFile);
    const jsondata = await jsonresp.json(); 

    const itemData = jsondata[params.item]['data'];
    for (var item of itemData) {
        const htmlFile = `\\data\\trail\\${params.topic}\\${item['lang']}\\${params.item}.html`;
        const htmlresp = await fetch(htmlFile);
        item['html'] = await htmlresp.text(); 
    }

    return {json: itemData, prev: jsondata[params.item]['prev'], next: jsondata[params.item]['next'], pathname}
}