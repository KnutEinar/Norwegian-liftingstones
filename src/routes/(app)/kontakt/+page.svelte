<script lang="ts">
	import Crumbs from '$lib/components/Crumbs.svelte';
	import ArticleImg from '$lib/components/ArticleImg.svelte';
	import { base } from '$app/paths';
	import * as m from '$lib/paraglide/messages';
	// @ts-expect-error
	import topImg from '$lib/images/stones/IMG_4789.jpeg?enhanced&w=768';
</script>

<div class="max-w-screen-md mx-auto px-4">
	<Crumbs />

	<div class="flex flex-col gap-10">
		<p class="mx-auto text-center font-bold text-2xl">{m.need_help()}</p>

		<p class="font-semibold text-lg text-center">
			{m.contact_goal()}
		</p>

		<div class="flex flex-col md:flex-row-reverse gap-10">
			<ArticleImg
				img={topImg}
				alt={'Knut Einar løfter Mannsløftet på Kolagarden'}
				imgSize={'max-h-[90] min-w-80'}
				padding={''}
			>
				<a href="{base}/steinliste/kolagarden" class="underline hover:text-blue-500"
					>{m.kolagarden_name()}</a
				>
			</ArticleImg>

			<div class="flex flex-col gap-10 md:py-6 min-h-full justify-between">
				<p>
					{m.contact_about()}
				</p>
				<p>{m.contact_contact_me()}</p>
				<div>
					<p>Knut Einar Skår</p>
					<a class="text-blue-600 underline" href="mailto:knut.einar.skaar@gmail.com"
						>knut.einar.skaar@gmail.com</a
					>
				</div>
			</div>
		</div>
	</div>
</div>
