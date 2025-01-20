import type { EntryGenerator } from './$types';
import { stones } from '$lib/stones';

export const entries: EntryGenerator = () => {
    let paths: Array<{ stoneId: string }> = [];

    for(const key of Object.keys(stones)){
        paths.push({ stoneId: key})
    }
	return paths;
};

export async function load({ params }) {
    
    const article = await import(`../../../../lib/stones/${params.stoneId}.svelte`)
    const content = article.default;

    return {
        content
    }
}

export const prerender = true;
export const ssr = true;