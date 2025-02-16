<script lang="ts">
	import type { PageData } from './$types';
	import Crumbs from '$lib/components/Crumbs.svelte';

	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto w-full">
	<Crumbs />

	<div class="flex flex-col gap-10">
		{@render data.content?.()}
	</div>
</div>
