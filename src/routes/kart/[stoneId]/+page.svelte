<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<Map focused_marker={data.stoneId}/>
