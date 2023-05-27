import { writable } from 'svelte/store'

const locale = writable('en');

export { locale }
