<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import ArticleImg from '$lib/components/ArticleImg.svelte';
	import * as m from '$lib/paraglide/messages';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/IMG_4290.jpeg?enhanced&w=768';
	let stoneId = 'helleland';

	let heading = m.helleland_name();

	// @ts-expect-error
	import artImg from '$lib/images/stones/IMG_4287.jpeg?enhanced&w=768';
</script>

<ArticleHeading {heading} />

<enhanced:img class="mx-auto object-scale-down max-h-96" src={topImg} alt={m.about_helleland_img()} />

<p>
	{m.helleland_p1()}
</p>

<ArticleImg img={artImg} alt={''} imgSize={'max-h-72'}></ArticleImg>

<p>
	{m.helleland_p2()}
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map focused_marker={stoneId} single_marker={true} hasInfoWindow={false} />
	</div>
</div>

<p>
	{m.helleland_p3()}
</p>
