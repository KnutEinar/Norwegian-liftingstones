<script lang="ts">
    import { base } from '$app/paths';
    import Map from "$lib/Map.svelte";
    import ArticleImgText from "$lib/ArticleImgText.svelte";

    // @ts-expect-error
    import PerPers from "$lib/images/stones/per_persasteinen.jpeg?enhanced&w=768";
</script>

<div class="relative -mt-4 md:-mt-6 mb-10 bg-[#4b5e78]">
    <enhanced:img class="object-scale-down md:w-4/5 lg:w-2/3 mx-auto"
            src="$lib/images/stones/home_banner.jpeg" alt="Løftesteinen på Kolagarden i vakre omgivelser"/>
    <h1 class="absolute w-1/2 top-1/3 left-1/4 text-center font-semibold text-white 
            text-3xl sm:text-5xl lg:text-7xl">
        Norske Løftesteiner
    </h1>
</div>

<div class="max-w-screen-md mx-auto px-4
            flex flex-col gap-10">

    <p class="font-semibold text-lg text-center">
        En løftestein, eller lyftestein, betegner en stein som har blitt brukt i styrkeprøver
        eller konkurranser. Man finner slike steiner over hele verden og deres historie strekker
        seg tilbake tusenvis av år. 
    </p>

    <ArticleImgText img={PerPers}
        alt={"Per Persasteinen på Sverrresborg Folkemuseum"}
        text={'<a href="{base}/steinliste/per_persasteinen" class="underline hover:text-blue-500">Per Persasteinen</a> på Sverrresborg Folkemuseum'} 
        padding={"px-4 md:px-10"}
        imgSize={"max-h-72"}/>

    <p class="font-semibold text-xl text-center">
        Hjelp meg å fylle ut kartet!
    </p>
    <p>
        Dette prosjektet er dedikert til bevaringen av norske løftesteiner, og er under kontinuerlig
        utvikling. Flere løftesteiner vil legges ut på siden fortløpende.
        Dersom du vet om en løftestein som du ikke finner på denne siden, eller kjenner til mer
        informasjon om noen av steinene, vil jeg gjerne høre fra deg.
    </p>

    <div class="md:px-10 h-[28rem]">
        <Map />
    </div>
</div>


<!-- <div class="sm:hidden">'sm': '640px',</div>
<div class="md:hidden">'md': '768px',</div>
<div class="lg:hidden">'lg': '1024px',</div>
<div class="xl:hidden">'xl': '1280px'</div> -->