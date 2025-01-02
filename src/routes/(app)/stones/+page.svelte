<script lang="ts">
    import { base } from '$app/paths';
    import { stones } from '$lib/stones'

    const images: any = import.meta.glob('$lib/images/stones/**.jpeg', { eager: true });

    // let images: { [key: string]: any } = {};
    
    // for(const stoneId in stones){
    //     images.stoneId = import(`../../../lib/images/stones/${stones[stoneId].img}`);
    // }

    let searchTerm: string = "";
</script>

<div class="mx-auto">
    <div class="w-auto h-auto flex justify-center mb-10">
        <input type="text" placeholder="Søk i Løftesteinene" autocomplete="off" bind:value={searchTerm} on:input
        class="appearance-none h-12 border-2 border-black outline-none focus:shadow-lg p-2">
    </div>
    
    <div class="mx-auto flex flex-col gap-8">
        {#each Object.entries(stones) as [stoneId, stone]}
            {#if stone.name.toLowerCase().includes(searchTerm.toLowerCase())}
                <div class="outline rounded-md shadow-lg">
                    <div class="p-5">
                        <div class="flex justify-center">
                            {#if stone.page}
                                <a class="font-bold text-xl mx-auto text-center" href="{base}/stones/{stoneId}">{stone.name}</a>
                            {:else}
                                <h2 class="font-bold text-xl mx-auto text-center">{stone.name}</h2>
                            {/if}
                        </div>
                        <div class={`grid grid-cols-1 ${stone.img ? "md:grid-cols-2" : "md:grid-cols-1"} gap-5 mt-8`}>
                            {#if stone.img}
                                <!-- {#await import(`$lib/images/stones/${stone.img}.jpeg`) then { default: src }}
                                    <div class="md:order-last">
                                        <img class="object-scale-down p-2" {src} alt="" />
                                    </div>
                                {/await} -->
                                <div class="md:order-last">
                                    <img class="object-scale-down p-2"
                                        src={images[`/src/lib/images/stones/${stone.img}.jpeg`].default} alt="Bilde">
                                </div>
                            {/if}
                            <div class="flex flex-col gap-5">
                                <div class="flex flex-row flex-wrap justify-center gap-10">
                                    <p> <strong>Vekt: </strong> {stone.weight} kg</p>
                                    <p> <strong>Løftbar: </strong> {stone.liftable}</p>
                                </div>    
                                <p>{@html stone.aboutBody}</p>
    
                                {#if stone.page}
                                    <a class="mx-auto px-2 text-md text-white border-1 border-black rounded-sm bg-bg-gray font-bold"
                                        href="{base}/stones/{stoneId}"><i>Les mer</i>
                                    </a>
                                {/if}
                            </div>
                        </div> 
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>