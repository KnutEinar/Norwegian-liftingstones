<script lang="ts">
	import { base } from '$app/paths';
	import Map from '$lib/components/Map.svelte';
	import ArticleImg from '$lib/components/ArticleImg.svelte';
	import * as m from '$lib/paraglide/messages.js';

	// @ts-expect-error
	import PerPers from '$lib/images/stones/per_persasteinen.jpeg?enhanced&w=768';
</script>

<!-- md:w-4/5 lg:w-2/3 -->
<div class="relative h-96 -mt-4 md:-mt-6 mb-10 bg-[#4b5e78]">
	<enhanced:img
		class="object-cover object-top h-full mx-auto"
		src="$lib/images/stones/home_banner.jpeg"
		alt="Løftesteinen på Kolagarden i vakre omgivelser"
	/>
	<h1
		class="absolute w-1/2 top-1/3 left-1/4 text-center font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]
            text-3xl sm:text-5xl lg:text-7xl"
	>
		{m.title()}
	</h1>
</div>

<div
	class="max-w-screen-md mx-auto px-4
            flex flex-col gap-10"
>
	<p class="font-semibold text-lg text-center">
		{m.home_intro()}
	</p>

	<ArticleImg img={PerPers} alt={m.home_per_pers_alt()} imgSize={'max-h-72'}>
		<a href="{base}/steinliste/per_persasteinen" class="underline hover:text-blue-500"
			>Per Persasteinen</a
		>
		{m.home_per_pers_text()}
	</ArticleImg>

	<p class="font-semibold text-xl text-center">{m.map_help_me()}</p>

	<p>
		{m.home_call_to_action()}
	</p>

	<div class="md:px-10 h-[28rem]">
		<Map />
	</div>
</div>

<!-- <div class="sm:hidden">'sm': '640px',</div>
<div class="md:hidden">'md': '768px',</div>
<div class="lg:hidden">'lg': '1024px',</div>
<div class="xl:hidden">'xl': '1280px'</div> -->
