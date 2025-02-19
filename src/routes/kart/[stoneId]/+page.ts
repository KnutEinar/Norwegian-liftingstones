import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';
import { stones } from '$lib/stones';

export const entries: EntryGenerator = () => {
	let paths: Array<{ stoneId: string }> = [];

	for (const key of Object.keys(stones)) {
		paths.push({ stoneId: key });
	}
	return paths;
};

export async function load({ params}) {
	let stoneId = params.stoneId

	if(stoneId in stones){
		return { stoneId };
	}

	error(404, 'Not found');
}