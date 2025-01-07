import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return [
		{ stoneId: 'sunnhordaland_museum' },
		{ stoneId: 'israelsneset' },
        { stoneId: 'per_persasteinen' },
        { stoneId: 'kolagarden' },
	];
};

export async function load({ params }) {
    
    const article = await import(`../../../../lib/stones/${params.stoneId}.svelte`)
    const content = article.default;

    return {
        content
    }
}

export const prerender = true;