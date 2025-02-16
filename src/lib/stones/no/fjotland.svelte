<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import ArticleImg from '$lib/components/ArticleImg.svelte';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/fjotland.jpeg?enhanced&w=768';
	let stoneId = 'fjotland';

	let heading = 'Lesarsteinen og Prestesteinen';

	// @ts-expect-error
	import artImg from '$lib/images/stones/fjotland-2.jpeg?enhanced&w=768';
</script>

<ArticleHeading {heading} />

<enhanced:img
	class="mx-auto object-scale-down max-h-96"
	src={topImg}
	alt="Lesarsteinen og Prestesteinen ved Kvenåsen Skulehus"
/>

<p>
	Like ved skolehuset på Fjotland bygdemuseum ligger det to løftesteiner, den mindre Lesarsteinen,
	og den tyngre Prestesteinen. Begge steinene er greie å få tak på, men Prestesteinen er naturlig
	nok svært utfordrende å løfte.
</p>

<p>
	Å løfte Lesarsteinen var fra gammelt av en manndomsprøve som mange unge fjotlendinger har prøvd
	seg på. Steinen veier 102 kg. Opprinnelig lå steinen nedenfor kirken i Fjotland, helt nede i
	vannkanten ved Fjotlandsvatnet.
</p>

<ArticleImg img={artImg} alt={'Lesarsteinen og Prestesteinen'} imgSize={'max-h-72'}>
	Prestesteinen (venstre) og Lesarsteinen (høyre)
</ArticleImg>

<p>
	Prestesteinen er med sine 207 kg om lag dobbelt så tung som Lesarsteinen, og det sies at en av
	prestene i bygda skal ha løftet steinen. Akkurat hvilken prest som har gitt steinen tilnavnet er
	ikke sikkert, men noen peker på Per Tobias Gunnuson Eiesland. “Per prest” som han også ble kalt
	var selv fjotlending, født på Eiesland i Fjotland i 1840. Han var prest i Fjotland i perioden
	1886-1900.
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	Steinene ligger rett utenfor Kvenåsen skulehus, langs Fylkesvei-835. Skolen ble lagt ned i 1951,
	og ble brukt som forsamlingshus frem til bygget ble flyttet til bygdemuseet i 1999.
</p>
