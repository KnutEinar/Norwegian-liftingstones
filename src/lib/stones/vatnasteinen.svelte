<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import ArticleImg from '$lib/components/ArticleImg.svelte';
	import * as m from '$lib/paraglide/messages';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/Sunnhordaland.jpeg?enhanced&w=768';
	let stoneId = 'vatnasteinen';

	let heading = m.sunnhordaland_museum_name();

	// @ts-expect-error
	import artImg from '$lib/images/stones/Sunnhordaland_Ravndal.jpg?enhanced&w=768';
</script>

<ArticleHeading {heading} />

<enhanced:img
	class="mx-auto object-scale-down max-h-96"
	src={topImg}
	alt={m.sunnhordaland_museum_name()}
/>

<p>
	{@html m.sunnhordaland_museum_1()}
</p>

<p>
	{m.sunnhordaland_museum_2()}
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map focused_marker={stoneId} single_marker={true} hasInfoWindow={false} />
	</div>
</div>

<p>
	{m.sunnhordaland_museum_3()}
</p>

<ArticleImg img={artImg} alt={m.sunnhordaland_museum_ravndal_img_alt()} imgSize={'h-96'}>
	{m.sunnhordaland_museum_ravndal_img_text()}
</ArticleImg>

<p>
	{m.sunnhordaland_museum_4()}
</p>

<p class="mx-10"><i> {@html m.sunnhordaland_museum_ravndal_quote()} </i></p>
