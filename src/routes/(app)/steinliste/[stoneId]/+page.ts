import type { EntryGenerator } from './$types';
import { languageTag, sourceLanguageTag } from '$lib/paraglide/runtime.js';
import { stones } from '$lib/stones';

export const entries: EntryGenerator = () => {
	let paths: Array<{ stoneId: string }> = [];

	for (const key of Object.keys(stones)) {
		if (stones[key].page) {
			paths.push({ stoneId: key });
		}
	}
	return paths;
};

export async function load({ params, depends }) {
	depends('paraglide:lang');

	let article: any;

	try {
		//Article in current locale
		article = await import(`../../../../lib/stones/${languageTag()}/${params.stoneId}.svelte`);
	} catch (error: unknown) {
		//Article in default locale
		article = await import(`../../../../lib/stones/${sourceLanguageTag}/${params.stoneId}.svelte`);
	}

	const content = article.default;

	return {
		content
	};
}

export const prerender = true;
export const ssr = true;
