export async function load ( { fetch } ) {
    const cardresp = await fetch(`\\card.json`);
    const carddata = await cardresp.json(); 
    return { carddata }
}