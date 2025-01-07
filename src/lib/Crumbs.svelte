<script lang="ts">
    import { page } from '$app/state';
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { afterNavigate } from '$app/navigation';

    let urls: Array<string> = [];
    let names: Array<string> = [];
    
    const getFilteredUrl = (): void => {
        urls = page.url.pathname.split("/")
                .filter((path) => path.length > 0)
                .filter((path) => path !== base.replaceAll("/", ""));
        
        names = [...urls];

        for(let i = 1; i < urls.length; i++){
            urls[i] = `${urls[i-1]}/${urls[i]}`;
        }

        for(let i = 0; i < names.length; i++){
            names[i] = names[i].replaceAll("_", " ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        }
    }

    onMount(() => {
        getFilteredUrl()
    })

    afterNavigate(() => {
        getFilteredUrl()
    })
</script>

<div class="outline w-full mb-10">
    <ol class="flex flex-row gap-10 justify-start">
        <li><a href={base}>Hjem</a></li>
        <li>/</li>
        {#each urls as item, index}
            <li>
                <a href="{base}/{item}">{names[index]}</a>
            </li>
            {#if index !== urls.length - 1}
                <li>/</li>
            {/if}
        {/each}
    </ol>
</div>