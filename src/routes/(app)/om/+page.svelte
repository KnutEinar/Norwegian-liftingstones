<script lang="ts">
	import { base } from '$app/paths';
	import ArticleImg from '$lib/components/ArticleImg.svelte';
	import Crumbs from '$lib/components/Crumbs.svelte';
	import * as m from '$lib/paraglide/messages';

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

<enhanced:img
	class="min-w-full object-contain -mt-4 md:-mt-6"
	src="$lib/images/stones/kolagarden_banner.jpeg?w=1780"
	alt="Løftesteinen på Kolagarden i vakre omgivelser"
/>

<div class="max-w-screen-md mx-auto px-4 mt-4">
	<Crumbs />

	<div class="flex flex-col gap-10">
		<h1 class="text-4xl font-semibold text-center">{m.about_title()}</h1>

		<p class="text-center">
			<strong>
				{m.about_intro()}
			</strong>
		</p>

		<ArticleImg img={Helleland} alt={m.about_helleland_img()} imgSize={'max-h-72'}>
			{m.about_helleland_img()}
		</ArticleImg>

		<p>
			{m.about_1()}
		</p>

		<p>
			{@html m.about_2()}
		</p>

		<p>
			{m.about_3()}
		</p>

		<div class="flex flex-col gap-10 md:flex-row md:gap-0">
			<div class="md:order-last my-auto">
				<ArticleImg img={Judas} alt={m.about_judas()} imgSize={'max-h-80 min-w-80'}>
					{m.about_judas()}
				</ArticleImg>
			</div>

			<div class="flex flex-col gap-10">
				<p>
					{m.about_4()}
				</p>
				<p>
					{m.about_5()}
				</p>
			</div>
		</div>
		<p>
			{m.about_6()}
		</p>

		<ArticleImg img={Veiing} alt={m.about_sunnhordaland_alt()} imgSize={'max-h-80'}>
			<a href="{base}/steinliste/sunnhordaland_museum" class="underline hover:text-blue-500"
				><i>{m.sunnhordaland_museum_name()}</i></a
			>
			{m.about_sunnhordaland_text()}
		</ArticleImg>

		<p>
			{m.about_7()}
		</p>
		<a
			class="mx-auto px-2 text-lg border-2 border-black rounded-sm bg-bg-gray font-bold text-white"
			href="{base}/kontakt">{m.contact()}</a
		>
	</div>
</div>
