// file initialized by the Paraglide-SvelteKit CLI - Feel free to edit it
import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';

export const i18n = createI18n(runtime, {
	pathnames: {
		'/kontakt': {
			no: '/kontakt',
			en: '/contact'
		},
		'/om': {
			no: '/om',
			en: '/about'
		},
		'/steinliste/[...stoneId]': {
			no: '/steinliste/[...stoneId]',
			en: '/stone_registry/[...stoneId]'
		},
		'/kart/[...stoneId]': {
			no: '/kart/[...stoneId]',
			en: '/map/[...stoneId]'
		}
	}
});
