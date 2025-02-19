<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<div class="h-dvh w-dvw flex flex-col">
	<Navbar />

	{@render children?.()}
</div>
