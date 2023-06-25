export async function load ( { fetch } ) {
    const confresp = await fetch(`\\conf.json`);
    const confdata = await confresp.json(); 
    return { confdata }
}