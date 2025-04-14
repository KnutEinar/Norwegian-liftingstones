<script lang="ts">
	import { base } from '$app/paths';
	import type { stone as stone_t } from '$lib/stones';
	import * as m from '$lib/paraglide/messages';

	const images: any = import.meta.glob('$lib/images/stones/**.jpeg', {
		eager: true,
		query: { w: 500 }
	});

	let { stoneId, stone }: { stoneId: string; stone: stone_t[1] } = $props();
</script>

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
		<div class={`grid grid-cols-1 ${stone.img ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-5 mt-8`}>
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
