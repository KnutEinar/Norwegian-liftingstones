<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		img: any;
		alt: string;
		imgSize?: string;
		padding?: string;
		children?: Snippet;
	}

	let { img, alt, imgSize = 'max-h-72', padding = 'px-4 md:px-10', children }: Props = $props();
</script>

<figure class="mx-auto {padding} table">
	<enhanced:img class="mx-auto object-scale-down min-h-0 min-w-0 {imgSize} w-min" src={img} {alt} />
	<figcaption class="table-caption caption-bottom text-center text-sm italic">
		{@render children?.()}
	</figcaption>
</figure>
