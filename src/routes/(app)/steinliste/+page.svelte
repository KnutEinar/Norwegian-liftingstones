<script lang="ts">
	import { base } from '$app/paths';
	import { stones, type stone } from '$lib/stones';
	import Crumbs from '$lib/components/Crumbs.svelte';
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';

	const images: any = import.meta.glob('$lib/images/stones/**.jpeg', {
		eager: true,
		query: {
			w: 500
		}
	});

	let endElement: HTMLDivElement;

	let searchTerm: string = $state('');
	let maxIndex: number = $state(0);
	// let sorted_stones: stone = $derived(Object.fromEntries(Object.entries(stones).filter((entry) => entry[1].name().toLowerCase().includes(searchTerm.toLowerCase()))));
	let sorted_stones: stone = $state(shuffleObject(stones));

	function shuffleObject(obj: stone) {
		const entries = Object.entries(obj);
		for (let i = entries.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[entries[i], entries[j]] = [entries[j], entries[i]];
		}
		return Object.fromEntries(entries);
	}

	const onChangeVisibility = () => {
		if (maxIndex < Object.keys(sorted_stones).length) {
			maxIndex += 2;
			console.log('scroll');
		}
	};

	onMount(() => {
		let observer = new IntersectionObserver(onChangeVisibility, {
			root: null,
			rootMargin: '0px 0px -50px 0px',
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
				<div class="outline rounded-md shadow-lg">
					<div class="p-5">
						<div class="flex justify-center">
							{#if stone.page}
								<h2>
									<a
										class="hover:underline font-bold text-xl mx-auto text-center"
										href="{base}/steinliste/{stoneId}">{stone.name()}</a
									>
								</h2>
							{:else}
								<h2>
									<a
										class="hover:underline font-bold text-xl mx-auto text-center"
										href="{base}/kart/{stoneId}">{stone.name()}</a
									>
								</h2>
							{/if}
						</div>
						<div
							class={`grid grid-cols-1 ${stone.img ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-5 mt-8`}
						>
							{#if stone.img}
								<div class="md:order-last">
									<img
										class="object-scale-down p-2"
										src={images[`/src/lib/images/stones/${stone.img}.jpeg`].default}
										alt="${stone.name()}"
									/>
								</div>
							{/if}
							<div class="flex flex-col gap-5">
								<div class="flex flex-row flex-wrap justify-center gap-10">
									<p>
										<strong>{m.weight()}: </strong>
										{#if stone.weight}
											{stone.weight.toString().replace(',', ' og ')} kg
										{:else}
											{m.unknown()}
										{/if}
									</p>
									<p><strong>{m.liftable()}: </strong> {stone.liftable()}</p>
								</div>
								<p>{@html stone.aboutBody()}</p>

								{#if stone.page}
									<a
										class="size-min text-nowrap px-4 py-2 text-md rounded-md border-2 border-bg-gray"
										href="{base}/steinliste/{stoneId}"
										><i>{m.read_more()}</i>
									</a>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>

<div bind:this={endElement} class="h-1"></div>
