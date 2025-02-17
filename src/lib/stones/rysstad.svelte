<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import * as m from '$lib/paraglide/messages';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/rysstad.jpeg?enhanced&w=768';
	let stoneId = 'rysstad';

	let heading = m.rysstad_name();
</script>

<ArticleHeading {heading} />

<enhanced:img class="mx-auto object-scale-down max-h-96" src={topImg} alt={m.rysstad_name()} />

<p>
	{m.rysstad_1()}
</p>

<p>
	{m.rysstad_2()}
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	{m.rysstad_3()}
</p>
