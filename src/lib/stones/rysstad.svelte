<script lang="ts">
	import Map from "$lib/Map.svelte";
    import ArticleHeading from "$lib/ArticleHeading.svelte";
    import ArticleImgText from "$lib/ArticleImgText.svelte";

    //Config
    // @ts-expect-error
    import topImg from "$lib/images/stones/rysstad.jpeg?enhanced&w=768";
    let stoneId = "rysstad";

    let heading = "Manndomssteinen på Rysstad";
</script>

<ArticleHeading {heading}/>

<enhanced:img class="mx-auto object-scale-down max-h-96"
    src={topImg}
    alt="Løftestein på Rysstad" />

<p>
    Utenfor Setesdalsmuseet på Rystad ligger det en løftestein som historisk har blitt brukt som manndomsprøve. Steinen veier 133.5 kg, har en flat underside og en avrundet topp. Opprinnelig lå steinen i nærheten av Brokke i Fardalen vest for Rysstad, en av sidedalene til Setesdalen. 
</p>

<p>
    Steinen var en manndomsstein, brukt av de yngre guttene i området. Dersom en av guttene klarte å løfte steinen fikk han være med de eldre karene å drikke øl og dram, helt klart en stor motivasjon! Steinen har blitt brukt som manndomsprøve i Fardalen så lenge noen kan huske, men akkurat hvor langt tilbake fenomenet strekker seg vet man ikke.
</p>

<div class="mx-4 md:mx-10">
    <div class="w-full h-80">
        <Map marker={stoneId} hasInfoWindow={false}/>
    </div>
</div>

<p>
    Steinen ble flyttet ned fra Fardalen til museet i 1998 for bevaring. Man finner den nå på framsiden av museumsbygningen, rett ved flaggstanga på gressplenen.
</p>

