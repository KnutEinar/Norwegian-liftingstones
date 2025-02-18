<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import ArticleImg from '$lib/components/ArticleImg.svelte';
	import * as m from '$lib/paraglide/messages';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/IMG_4266.jpeg?enhanced&w=768';
	let stoneId = 'trolten';

	let heading = m.trolten_name();

	// @ts-expect-error
	import artImg from '$lib/images/stones/IMG_5013.jpeg?enhanced&w=768';
</script>

<ArticleHeading {heading} />

<enhanced:img class="mx-auto object-scale-down max-h-96" src={topImg} alt={m.trolten_name()} />

<p>
	{@html m.trolten_1()}
</p>

<ArticleImg img={artImg} alt={m.trolten_img()} imgSize={'max-w-80'}>
	{m.trolten_img()}
</ArticleImg>

<p>
	{m.trolten_2()}
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	{m.trolten_3()}
</p>
