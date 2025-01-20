<script lang="ts">
    	import MapCloseButton from "$lib/MapCloseButton.svelte";
</script>

<div class="flex flex-col gap-3 my-3">
    <div class="flex flex-row">
        <h1 class="texl-lg font-bold mx-auto text-center">
            Prosjektet er under utvikling
        </h1>
        <MapCloseButton callback={() => {console.log("Pressed")}}/>
    </div>										
    <p>
    Flere løftesteiner vil bli lagt inn fortløpende. Send gjerne inn et tips dersom du vet om noen løftesteiner!  
    </p>
    <a class="mx-auto px-2 text-sm border-2 border-black rounded-sm bg-bg-gray font-bold text-white"
        href="$/kontakt">Ta kontakt</a>
</div>