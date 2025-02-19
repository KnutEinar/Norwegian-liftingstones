<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import * as m from '$lib/paraglide/messages';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/kolagarden.jpeg?enhanced&w=768';
	let stoneId = 'kolagarden';
	let heading = m.kolagarden_name();
</script>

<ArticleHeading {heading} />

<enhanced:img class="mx-auto object-scale-down max-h-96" src={topImg} alt={m.kolagarden_name()} />

<p>
	{@html m.kolagarden_1()}
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map focused_marker={stoneId} single_marker={true} hasInfoWindow={false} />
	</div>
</div>

<div>
	{m.kolagarden_2()}
</div>
