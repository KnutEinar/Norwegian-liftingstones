<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import ArticleImg from '$lib/components/ArticleImg.svelte';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/Sunnhordaland.jpeg?enhanced&w=768';
	let stoneId = 'sunnhordaland_museum';

	let heading = 'The lifting stone at Sunnhordaland Museum';

	// @ts-expect-error
	import artImg from '$lib/images/stones/Sunnhordaland_Ravndal.jpg?enhanced&w=768';
</script>

<ArticleHeading {heading} />

<enhanced:img
	class="mx-auto object-scale-down max-h-96"
	src={topImg}
	alt="Løftesteinen ligger ved Eldhuset"
/>

<p>
	Sunnhordlandstunet er et regionalt museum som ligger i Vidstenparken i Leirvik, på Stord.
	Løftesteinen på <strong>106.5 kg</strong> finner man inne på museumsområdet, ved inngangen til Eldhuset.
	Det ligger også en noe mindre stein her, antagelig vis som en oppvarming for de som ønsker å prøve
	seg på løftesteinen.
</p>

<p>
	Løftet er godkjent om steinen løftes rett opp fra bakken, slik at den tydelig er over underlaget,
	uten hjelpemidler. Steinen er rundt, og kan være rimelig sleip, derfor blir den største
	utfordringen for de fleste å få godt nok tak på steinen.
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	Steinen kommer opprinnelig fra Vatnadalen, og skal ha blitt funnet av et arbeidslag i Vatnaelva i
	1913 ved utbyggingen av kraftverket. Dette årstallet er også gravert inn på oversiden av steinen.
	Ved den opprinnelige plasseringen ble steinen brukt som en styrkeprøve frem til 60-tallet da den
	ble flyttet til Vidstenparken og museet. I dag ligger steinen tilgjengelig for alle som ønsker å
	prøve seg, og den er gjevnlig gjenstand for interresse.
</p>

<ArticleImg
	img={artImg}
	alt={'Torkel Ravndal løfter steinen på Sunnhordaland Museum'}
	imgSize={'h-96'}
>
	Torkel Ravndal løfter steinen på Sunnhordaland Museum (foto: Avisa Sunnhordaland (1991))
</ArticleImg>

<p>
	Styrkelegenden Torkel Ravndal fra Figgjo er en av dem som har løftet steinen. Da han sommeren 1991
	hadde opptreden i Leirvik løftet han steinen, og uttalte:
</p>

<p class="mx-10"><i> Slike brukte me å kyla etter kverandre på gata heime i Stavanger. </i></p>
