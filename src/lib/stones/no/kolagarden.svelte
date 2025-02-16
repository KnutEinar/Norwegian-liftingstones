<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/kolagarden.jpeg?enhanced&w=768';
	let stoneId = 'kolagarden';
	let heading = 'Mannsløftet på Kolagarden';
</script>

<ArticleHeading {heading} />

<enhanced:img
	class="mx-auto object-scale-down max-h-96"
	src={topImg}
	alt="Mannsløftet på Kolagarden"
/>

<p>
	På Kolagarden ligger det en stein på <strong>128 kg</strong> som blir kalt et Mannsløft. En mann måtte
	klare å løfte denne. Steinen er noe avlang, og er relativt grei å få godt tak på. Fra området hvor
	steinen ligger har man god utsikt utover hele dalen.
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<div>
	For å nå steinen må man gå noe. Fra Gardavegen følger man den private vegen fra bommen og opp til
	gården, herfra er det ganske bratt og ulendt opp til steinen. Mannsløftet ligger godt synlig på en
	liten steinknaus. Det er omtrent 1.5 km opp til steinen fra Gardavegen.
</div>
