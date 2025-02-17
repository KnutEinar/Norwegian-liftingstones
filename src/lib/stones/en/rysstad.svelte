<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/rysstad.jpeg?enhanced&w=768';
	let stoneId = 'rysstad';

	let heading = 'The Manhood Stone at Rysstad';
</script>

<ArticleHeading {heading} />

<enhanced:img
	class="mx-auto object-scale-down max-h-96"
	src={topImg}
	alt="Lifting stone at Rysstad"
/>

<p>
	Outside Setesdal Museum at Rysstad lies a lifting stone that was historically used as a manhood
	test. The stone weighs 133.5 kg, has a flat underside and a rounded top. Originally, the stone was
	located near Brokke in Fardalen, to the west of Rysstad, one of Setesdal's side valleys.
</p>

<p>
	The stone was a manhood stone, used by younger boys in the area. If one of the boys managed to
	lift the stone, he was allowed to join the older men in drinking beer and spirits, certainly a
	strong motivation! The stone has been used as a manhood test in Fardalen as long as anyone can
	remember, but exactly how far back the tradition goes is unknown.
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	The stone was moved from Fardalen to the museum in 1998 for preservation. It is now located in
	front of the museum building, right next to the flagpole on the lawn.
</p>
