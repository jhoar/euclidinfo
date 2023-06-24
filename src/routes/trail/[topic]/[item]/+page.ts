export async function load ( { fetch, params } ) {

    // Load from /static
    const jsonFile = `\\data\\trail\\${params.topic}.json`
    const jsonresp = await fetch(jsonFile);
    const jsondata = await jsonresp.json(); 

    var p;
    var n;
    var j;

    for (var item of jsondata) {
        if (item['page'] === params.item) {
            j = item
            for (var lang of item['data']) {
                const htmlFile = `\\data\\trail\\${params.topic}\\${lang['language']}\\${params.item}.html`;
                const htmlresp = await fetch(htmlFile);
                lang['html'] = await htmlresp.text();         
                p = item['prev']
                n = item['next']
            }
        }        
    }

    return {json: j, prev: p, next: n}
}