<script lang="ts">
    import Crumbs from "$lib/Crumbs.svelte";
    // @ts-expect-error
    import topImg from "$lib/images/stones/IMG_4789.jpeg?enhanced&w=768";
</script>

<div class="max-w-screen-md mx-auto px-4">
    <Crumbs />
    
    <div class="flex flex-col gap-10">
        <p class="mx-auto text-center font-bold text-2xl">
            Jeg trenger din hjelp!
        </p>

        <p class="font-semibold text-lg text-center">
            Målet med prosjektet er å kartlegge alle løftesteinene i Norge.
            For å klare dette er jeg avhengig av din hjelp!
        </p>
        
        <div class="flex flex-col md:flex-row-reverse gap-10">
            <enhanced:img class="mx-auto object-scale-down max-h-96 min-w-80"
                src={topImg}
                alt="Knut Einar løfter steinen på Kolagarden" />
    
            <div class="flex flex-col gap-10 md:py-6 min-h-full justify-between">
                <p>
                    Dette prosjektet er under utvikling, og flere løftesteiner vil bli lagt til fortløpende.
                    Dersom du vet om en stein som du ikke finner på denne siden, eller vet noe mer om noen av steinene
                    vil jeg veldig gjerne høre fra deg.
                </p>
                <p>
                    Send meg gjerne en mail dersom du vet noe!
                </p>
                <div>
                    <p>Knut Einar Skår</p>
                    <a class="text-blue-600 underline" 
                        href="mailto:knut.einar.skaar@gmail.com">knut.einar.skaar@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
</div>