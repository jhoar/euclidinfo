import { writable } from 'svelte/store'

const locale = writable('es');
const mode = writable('normal')

export { locale, mode }
