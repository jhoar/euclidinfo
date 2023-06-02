export async function load ( { fetch } ) {
    const resp = await fetch(`\\data.json`);
    const appdata = await resp.json(); 
    return { appdata }
}