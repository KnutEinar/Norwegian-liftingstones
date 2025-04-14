<script lang="ts">
	import { base } from '$app/paths';
	import { stones, type stone } from '$lib/stones';
	import Crumbs from '$lib/components/Crumbs.svelte';
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';
	import StoneCard from '$lib/components/StoneCard.svelte';

	let endElement: HTMLDivElement;

	let searchTerm: string = $state('');
	let maxIndex: number = $state(0);
	let sorted_stones: stone = $state(shuffleObject(stones));

	function shuffleObject(obj: stone) {
		const entries = Object.entries(obj);
		for (let i = entries.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[entries[i], entries[j]] = [entries[j], entries[i]];
		}
		return Object.fromEntries(entries);
	}

	// TODO:
	// const sortByWeight = (obj: stone) => {
	// }

	const onChangeVisibility = () => {
		if (maxIndex < Object.keys(sorted_stones).length) {
			maxIndex += 2;
			console.log('scroll');
		}
	};

	onMount(() => {
		let observer = new IntersectionObserver(onChangeVisibility, {
			root: null,
			rootMargin: '0px 0px -60px 0px',
			threshold: 1
		});
		observer.observe(endElement);
	});
</script>

<Crumbs />

<div class="mx-auto mt-6 mb-10">
	<h1 class="text-4xl font-semibold text-center">
		{m.nav_link_stone_list()}
	</h1>
</div>

<div class="mx-auto">
	<div class="w-auto h-auto flex justify-center mb-10">
		<input
			type="text"
			placeholder={m.search_stones()}
			autocomplete="off"
			bind:value={searchTerm}
			class="appearance-none h-12 border-2 border-black outline-none focus:shadow-lg p-2"
		/>
	</div>

	<div class="mx-auto flex flex-col gap-8">
		{#each Object.entries(sorted_stones).filter((entry) => entry[1]
				.name()
				.toLowerCase()
				.includes(searchTerm.toLowerCase())) as [stoneId, stone], index}
			{#if index < maxIndex}
				<StoneCard {stoneId} {stone} />
			{/if}
		{/each}
	</div>
</div>

<div bind:this={endElement} class="h-1"></div>
