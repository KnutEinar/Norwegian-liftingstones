<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import ArticleImg from '$lib/components/ArticleImg.svelte';

	// Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/fjotland.jpeg?enhanced&w=768';
	let stoneId = 'fjotland';

	let heading = 'The Reader’s Stone and the Preacher’s Stone';

	// @ts-expect-error
	import artImg from '$lib/images/stones/fjotland-2.jpeg?enhanced&w=768';
</script>

<ArticleHeading {heading} />

<enhanced:img
	class="mx-auto object-scale-down max-h-96"
	src={topImg}
	alt="The Lesar Stone and the Preacher’s Stone at Kvenåsen Schoolhouse"
/>

<p>
	Right next to the schoolhouse at the Fjotland Village Museum, there are two lifting stones: the
	smaller Reader’s Stone (Lesarsteinen) and the heavier Preacher’s Stone (Prestesteinen). Both
	stones provide a decent grip, but the Preacher’s Stone is naturally much more challenging to lift.
</p>

<p>
	Lifting the Reader’s Stone was traditionally considered a test of manhood, one that many young
	Fjotland residents attempted. The stone weighs 102 kg. Originally, it was located below Fjotland
	Church, right at the water’s edge of Fjotlandsvatnet.
</p>

<ArticleImg img={artImg} alt={'The Reader’s Stone and the Preacher’s Stone'} imgSize={'max-h-72'}>
	The Preacher’s Stone (left) and the Reader’s Stone (right)
</ArticleImg>

<p>
	Weighing in at 207 kg, about twice the weight of the Reader’s Stone, the Preacher’s Stone is said
	to have been lifted by one of the village priests. It is uncertain exactly which priest gave the
	stone its name, but some point to Per Tobias Gunnuson Eiesland. Known as “Per Prest” (Per Priest)
	he he was a Fjotland native, born in Eiesland in 1840, and served as priest in Fjotland from 1886
	to 1900.
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	The stones are located just outside Kvenåsen Schoolhouse, along Fylkesvei-835. The school closed
	down in 1951 and was used as a community house until the building was moved to the museum in 1999.
</p>
