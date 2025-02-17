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
	alt="The lifting stone is located by Eldhuset"
/>

<p>
	Sunnhordlandstunet is a regional museum located in Vidsten park in Leirvik, on the island of
	Stord. The lifting stone, weighing <strong>106.5 kg</strong>, can be found inside the museum
	grounds, near the entrance to Eldhuset (An old kitchen). There is also a slightly smaller stone
	here, presumably as a warm-up for those who want to try lifting the main stone.
</p>

<p>
	A lift is considered valid if the stone is lifted straight up, such that it is clearly above the
	ground, without any aids. The stone is round and can be quite slippery, making it difficult for
	most people to get a good grip on it.
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	The stone originally comes from Vatnadalen and is said to have been discovered in the Vatna River
	in 1913, by a work crew during the construction of a power plant. This year is also engraved on
	the top of the stone. At its original location, the stone was used as a test of strength until the
	1960s when it was moved to the Vidsten park and the museum. Today, the stone is accessible to
	anyone who wants to try their hand at lifting it, and it continues to attract interest.
</p>

<ArticleImg
	img={artImg}
	alt={'Torkel Ravndal lifting the stone at Sunnhordland Museum'}
	imgSize={'h-96'}
>
	Torkel Ravndal lifting the stone at Sunnhordland Museum (photo: Avisa Sunnhordaland, 1991)
</ArticleImg>

<p>
	Strength legend and Strongman Torkel Ravndal from Figgjo is one of those who has lifted the stone.
	When he performed one of his famous strength shows in Leirvik in the summer of 1991, he lifted the
	stone and remarked:
</p>

<p class="mx-10">
	<i> Slike brukte me å kyla etter kverandre på gata heime i Stavanger. </i> &ensp;
	<i> (We used to throw these at each other on the streets back home in Stavanger.) </i>
</p>
