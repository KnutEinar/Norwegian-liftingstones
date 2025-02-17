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
	Several legends exist about the great strength of Peder Pedersen from Fosen. Pedersen was a giant
	man who lived on the farm Løvøy in Åfjord, and in addition to having great strength, he was also
	said to be a skilled blacksmith. He is said to have lifted the now <strong>247.5 kg</strong> heavy
	stone and carved the text which is written in the stone today:
</p>

<div>
	<p class="font-bold mx-auto w-min text-nowrap">
		PER PERSEN ER MEDT NAVN <br />
		DENNE STEN HAVER JEG FORSANT <br />
		MED THO VOGE TONGE HER PÅLAGT <br />
		DET HAVER JEG LÖFT MED MIN MACHT
	</p>

	<p class="text-center italic text-sm mt-4">
		(In the 1800s, the names Per and Peder were used interchangeably, the pronunciation seems to
		have been Per
		<a
			class="font-semibold hover:text-blue-500"
			href="https://snl.no/Peder_-_mannsnamn#:~:text=til%20d%C3%B8mes%20Peeder.)-,Skriftforma%20Peder%20kan%20i%20folketeljingane%20st%C3%A5%20for%20uttaleforma%20Per.,-Historisk%20bruk%20av"
		>
			[1]
		</a>)
	</p>
</div>

<p>The text roughly translates to;</p>

<p class="mx-10">
	<i> My name is Per Persen, and I swear that I have lifted this stone with my own might. </i>
</p>

<p>
	Per Persasteinen was famous in Fosen, and fishing crews on their way to and from Lofoten often
	visited Løvøy. Here, the “skårungene”, meaning the first-time sailors, would try to lift the
	stone. One particularly strong young fisherman is said to have tried, but was unable to lift the
	stone, and in anger, struck off a piece weighing 10-12 kg with a sledgehammer. The break from the
	sledgehammer strike can still be seen on one of the short sides of the stone.
</p>

<p>
	When Peder Pedersen lifted the stone, it weighed nearly 260 kg. It is also said that he added two
	extra weights on top of the stone, lifting a total weight of nearly 300 kg. What constitutes a
	good lift is unknown, but like several other Norwegian lifting stones, it is a reasonable
	assumption that the lift was considered valid if the stone clearly broke off the ground during the
	attempt.
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	The stone was moved to the museum at Sverresborg in 1935 for preservation and is now located on
	the museum grounds, right next to Haltdalen Stave Church. If you walk along the path around the
	museum, you will pass the stone near the coastal section. The stone is clearly visible from the
	path as you pass it.
</p>
