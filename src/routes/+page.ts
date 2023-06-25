export async function load ( { fetch } ) {
    const resp = await fetch(`\\card.json`);
    const appdata = await resp.json(); 
    return { appdata }
}