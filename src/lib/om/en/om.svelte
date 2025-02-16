<script lang="ts">
	import { base } from '$app/paths';
	import ArticleImg from '$lib/components/ArticleImg.svelte';
	import Crumbs from '$lib/components/Crumbs.svelte';

	// import Judas from "$lib/images/stones/judas_stone_2023.jpeg"
	// import Kirke from "$lib/images/stones/IMG_4290.jpeg"
	// import Veiing from "$lib/images/stones/IMG_4179.jpeg"

	// @ts-expect-error
	import Helleland from '$lib/images/stones/IMG_4290.jpeg?enhanced&w=768';
	// @ts-expect-error
	import Judas from '$lib/images/stones/judas_stone_2023.jpeg?enhanced&w=768';
	// @ts-expect-error
	import Veiing from '$lib/images/stones/IMG_4179.jpeg?enhanced&w=768';
</script>

<h1 class="text-4xl font-semibold text-center">The goal of this Project</h1>

<p class="text-center">
	<strong>
		The goal of this project is to document historical lifting stones from all over Norway. On this
		page, I will try to gather information about as many lifting stones as possible so that this
		information is publicly available.
	</strong>
</p>

<ArticleImg img={Helleland} alt={'Helleland-steinen besides Helleland Church'} imgSize={'max-h-72'}>
	Helleland-steinen besides Helleland Church outside Egersund
</ArticleImg>

<p>
	Lifting stones are a phenomenon that likely dates back to the dawn of time. Humans have always
	been fascinated by strength, and there has always been an interest in competing and determining
	who is the strongest. As a result, lifting stones have become a worldwide form of competition, and
	lifting stones are known from all over the world. In modern times, much of the historical stone
	lifting has been replaced by other strength sports, leading to the loss of information and history
	about these stones.
</p>

<p>
	In Norway, there are many historical lifting stones, and probably even more waiting to be
	rediscovered. Norwegian stones come in a wide range of sizes, from the lightest at around 60 kg to
	the heaviest weighing several hundred kilograms. The oldest stone with a known history that I am
	aware of is <i>Viske-løftet</i> by Sevat Embrikson from 1750. If one wishes to find stones like this
	one, or uncover their stories, it will turn into quite a challenge. In fact, there is no comprehensive
	source of this information. Some sources exist where one can read about one or perhaps a handful of
	stones, but there is no reference work covering all of Norway.
</p>

<p>
	This has been my inspiration for starting this project. Since its inception, my goal has been to
	compile information on all the known Norwegian lifting stones into a single reference . Without
	such a reference, I fear that an enormous amount of cultural history will be lost.
</p>

<div class="space-y-10 md:space-y-0">
	<div class="md:float-right">
		<ArticleImg
			img={Judas}
			alt={'The Judas Stone in Látravík, Iceland'}
			imgSize={'max-h-80 min-w-80'}
		>
			The Judas Stone (127 kg) in Látravík, Iceland, in 2023
		</ArticleImg>
	</div>

	<div class="flex flex-col gap-10">
		<p>
			My own interest in historical lifting stones began with the stories of lifting stones from
			Iceland. Most people associate Iceland with volcanoes and glaciers, but for a small group of
			particularly interested individuals, myself included, Iceland is synonymous with strength
			culture and lifting stones.
		</p>
		<p>
			Due to its climate, physical strength has always been important in Icelandic culture. Like
			Norway, Iceland has a great many historical lifting stones. However, unlike Norway, Iceland
			has preserved the stories of its lifting stones to a greater extent, making them easier to
			find.
		</p>
	</div>
</div>

<p>
	After a trip to Iceland in 2023, where I visited several of the country's most famous lifting
	stones, I became very curious about whether similar stones existed in Norway. After countless
	hours of searching, the idea for this project was born.
</p>

<ArticleImg
	img={Veiing}
	alt={'The stone at Sunnhordland Museum being weighed'}
	imgSize={'max-h-80'}
>
	<a href="{base}/steinliste/sunnhordaland_museum" class="underline hover:text-blue-500"
		><i>The stone at Sunnhordland Museum</i></a
	> being weighed
</ArticleImg>

<p>
	As mentioned, written sources on lifting stones in Norway are very scarce, but there are likely
	countless people across Norway who know about lifting stones in their local area. That is why I
	need your help to complete this project! If you know of any lifting stones that are not mentioned
	on this site or have more information about any of them, I would love to hear from you. Perhaps
	you can help preserve Norway’s strength culture of lifting stones.
</p>

<a
	class="mx-auto px-2 text-lg border-2 border-black rounded-sm bg-bg-gray font-bold text-white"
	href="{base}/kontakt">Contact</a
>
