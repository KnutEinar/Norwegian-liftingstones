<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import ArticleImg from '$lib/components/ArticleImg.svelte';
	import * as m from '$lib/paraglide/messages';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/fjotland.jpeg?enhanced&w=768';
	let stoneId = 'fjotland';

	let heading = m.fjotland_name();

	// @ts-expect-error
	import artImg from '$lib/images/stones/fjotland-2.jpeg?enhanced&w=768';
</script>

<ArticleHeading {heading} />

<enhanced:img class="mx-auto object-scale-down max-h-96" src={topImg} alt={m.fjotland_img_alt()} />

<p>
	{m.fjotland_1()}
</p>

<p>
	{m.fjotland_2()}
</p>

<ArticleImg img={artImg} alt={m.fjotland_name()} imgSize={'max-h-72'}>
	{m.fjotland_artImg_text()}
</ArticleImg>

<p>
	{m.fjotland_3()}
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	{m.fjotland_4()}
</p>
