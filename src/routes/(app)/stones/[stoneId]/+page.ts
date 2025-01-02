export async function load({ params }) {
    
    const article = await import(/* @vite-ignore */`../../../../lib/stones/${params.stoneId}.svelte`)
    const content = article.default;

    return {
        content
    }
}