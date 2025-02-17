<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';
	import * as m from '$lib/paraglide/messages';

	//Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/per_persasteinen.jpeg?enhanced&w=768';
	let stoneId = 'per_persasteinen';
	let heading = m.per_persasteinen_name();
</script>

<ArticleHeading {heading} />

<enhanced:img
	class="mx-auto object-scale-down max-h-96"
	src={topImg}
	alt={m.per_persasteinen_name()}
/>

<p>
	{@html m.per_persasteinen_1()}
</p>

<div>
	<p class="font-bold mx-auto w-min text-nowrap">
		{@html m.per_persasteinen_inscription()}
	</p>

	<p class="text-center italic text-sm mt-4">
		({m.per_persasteinen_inscription_info()}
		<a
			class="font-semibold hover:text-blue-500"
			href="https://snl.no/Peder_-_mannsnamn#:~:text=til%20d%C3%B8mes%20Peeder.)-,Skriftforma%20Peder%20kan%20i%20folketeljingane%20st%C3%A5%20for%20uttaleforma%20Per.,-Historisk%20bruk%20av"
		>
			[1]
		</a>)
	</p>
</div>

{@html m.per_persasteinen_inscription_explain()}

<p>
	{m.per_persasteinen_2()}
</p>

<p>
	{m.per_persasteinen_3()}
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<p>
	{m.per_persasteinen_4()}
</p>
