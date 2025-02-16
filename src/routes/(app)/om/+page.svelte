<script lang="ts">
	import { base } from '$app/paths';
	import Crumbs from '$lib/components/Crumbs.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<enhanced:img
	class="min-w-full object-contain -mt-4 md:-mt-6"
	src="$lib/images/stones/kolagarden_banner.jpeg?w=1780"
	alt="Løftesteinen på Kolagarden i vakre omgivelser"
/>

<div class="max-w-screen-md mx-auto px-4 mt-4">
	<Crumbs />
	<div class="flex flex-col gap-10">
		{@render data.content?.()}
	</div>
</div>
