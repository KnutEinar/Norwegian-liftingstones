<script lang="ts">
	import Map from "$lib/Map.svelte";
    import ArticleHeading from "$lib/ArticleHeading.svelte";

    //Config
    // @ts-expect-error
    import topImg from '$lib/images/stones/per_persasteinen.jpeg?enhanced&w=768';
    let stoneId = "per_persasteinen";
    let heading = "Per Persasteinen";
</script>

<ArticleHeading {heading}/>

<enhanced:img class="mx-auto object-scale-down max-h-96"
    src={topImg}
    alt="Per Persasteinen" />

<p>
    Det går flere sagn om de store kreftene til Peder Pedersen fra Fosen. Pedersen var en bygdekjempe som bodde på gården Løvøy i Åfjord, som i tilleg til å inneha store krefter også skal ha vært en dyktig smed. Han skal ha løftet den nå <strong>247.5 kg</strong> tunge steinen, og hugget inn teksten som står skrevet på steinen:
</p>

<p class="font-bold mx-auto">
    PER PERSEN ER MEDT NAVN <br>
    DENNE STEN HAVER JEG FORSANT <br>
    MED THO VOGE TONGE HER PÅLAGT <br>
    DET HAVER JEG LÖFT MED MIN MACHT  
</p>

<p>
    Per Persasteinen var kjent på Fosen, og fiskelag på vei til og fra Lofotfiske rodde gjerne innom Løvøy. Da fikk “skårungene”, altså de førstereisende guttene, prøve seg på løftesteinen. En spesielt sterk ung fisker skal ha prøvd, men ikke klart å løfte steinen, og i sinne slått av et stykke på 10-12 kg med en slegge. Bruddet etter sleggeslaget kan fremdeles tydes på den ene kortsiden av steinen.
</p>

<p>
    Da Peder Pedersen løftet steinen, veide den altså nærmere 260 kg. Det sies også at han la to ekstra lodd oppå steinen, og løftet en totalvekt på nærmere 300 kg. Hva som regnes som et godkjent løft er ukjent, men i likhet med flere andre norske løftesteiner er det en rimelig antakelse at løftet ble regnet som godkjent om steinen tydelig var over underlaget.
</p>

<div class="mx-4 md:mx-10">
    <div class="w-full h-80">
        <Map marker={stoneId} hasInfoWindow={false}/>
    </div>
</div>

<p>
    Steinen ble flyttet til museet på Sverresborg i 1935 for bevaring og ligger nå på museumsområdet, rett ved Haltdalen stavkirke. Dersom man går runden langs grusstien på museet vil man ved kystseksjonen passere steinen. Steinen er godt synlig fra stien når man passerer den.
</p>