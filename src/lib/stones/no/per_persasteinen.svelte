<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/per_persasteinen.jpeg?enhanced&w=768';
	let stoneId = 'per_persasteinen';
	let heading = 'Per Persasteinen';
</script>

<ArticleHeading {heading} />

<enhanced:img class="mx-auto object-scale-down max-h-96" src={topImg} alt="Per Persasteinen" />

<p>
	Det går flere sagn om de store kreftene til Peder Pedersen fra Fosen. Pedersen var en bygdekjempe
	som bodde på gården Løvøy i Åfjord, som i tilleg til å inneha store krefter også skal ha vært en
	dyktig smed. Han skal ha løftet den nå <strong>247.5 kg</strong> tunge steinen, og hugget inn teksten
	som står skrevet på steinen:
</p>

<div>
	<p class="font-bold mx-auto w-min text-nowrap">
		PER PERSEN ER MEDT NAVN <br />
		DENNE STEN HAVER JEG FORSANT <br />
		MED THO VOGE TONGE HER PÅLAGT <br />
		DET HAVER JEG LÖFT MED MIN MACHT
	</p>

	<p class="text-center italic text-sm mt-4">
		(På 1800-tallet ble navnene Per og Peder brukt noe om hverandre, uttaleformen er trolig Per <a
			href="https://snl.no/Peder_-_mannsnamn#:~:text=til%20d%C3%B8mes%20Peeder.)-,Skriftforma%20Peder%20kan%20i%20folketeljingane%20st%C3%A5%20for%20uttaleforma%20Per.,-Historisk%20bruk%20av"
			class="font-semibold hover:text-blue-500">[1]</a
		>)
	</p>
</div>

<p>
	Per Persasteinen var kjent på Fosen, og fiskelag på vei til og fra Lofotfiske rodde gjerne innom
	Løvøy. Da fikk “skårungene”, altså de førstereisende guttene, prøve seg på løftesteinen. En
	spesielt sterk ung fisker skal ha prøvd, men ikke klart å løfte steinen, og i sinne slått av et
	stykke på 10-12 kg med en slegge. Bruddet etter sleggeslaget kan fremdeles tydes på den ene
	kortsiden av steinen.
</p>

<p>
	Da Peder Pedersen løftet steinen, veide den altså nærmere 260 kg. Det sies også at han la to
	ekstra lodd oppå steinen, og løftet en totalvekt på nærmere 300 kg. Hva som regnes som et godkjent
	løft er ukjent, men i likhet med flere andre norske løftesteiner er det en rimelig antakelse at
	løftet ble regnet som godkjent om steinen tydelig var over underlaget.
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	Steinen ble flyttet til museet på Sverresborg i 1935 for bevaring og ligger nå på museumsområdet,
	rett ved Haltdalen stavkirke. Dersom man går runden langs grusstien på museet vil man ved
	kystseksjonen passere steinen. Steinen er godt synlig fra stien når man passerer den.
</p>
