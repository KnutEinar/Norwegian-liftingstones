<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import ArticleImg from '$lib/components/ArticleImg.svelte';
	import * as m from '$lib/paraglide/messages';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/IMG_4772.jpeg?enhanced&w=768';
	let stoneId = 'tausaloftet';

	let heading = m.tausaloftet_name();
</script>

<ArticleHeading {heading} />

<enhanced:img class="mx-auto object-scale-down max-h-96" src={topImg} alt={m.tausaloftet_name()} />

<p>
	{@html m.tausaloftet_1()}
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	{m.tausaloftet_2()}
</p>
