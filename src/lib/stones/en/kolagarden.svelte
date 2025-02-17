<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import ArticleHeading from '$lib/components/ArticleHeading.svelte';

	// Config
	// @ts-expect-error
	import topImg from '$lib/images/stones/kolagarden.jpeg?enhanced&w=768';
	let stoneId = 'kolagarden';
	let heading = 'The Manhood Stone at Kolagarden';
</script>

<ArticleHeading {heading} />

<enhanced:img
	class="mx-auto object-scale-down max-h-96"
	src={topImg}
	alt="The Manhood Stone at Kolagarden"
/>

<p>
	At Kolagarden farm, there is a stone weighing <strong>128 kg (282 lbs)</strong>, known as a
	Manhood Stone. A man was expected to be able to lift this stone. The stone is somewhat elongated,
	making it relatively easy to get a good grip on. From the area where the stone is located, you
	have a great view over the entire valley.
</p>

<div class="mx-4 md:mx-10">
	<div class="w-full h-80">
		<Map marker={stoneId} hasInfoWindow={false} />
	</div>
</div>

<div>
	To reach the stone, you have to walk a bit. From Gardavegen, follow the private road from the gate
	up to the farm. From there, the path is quite steep and rugged up to the stone. The stone is
	clearly visible on a small rock outcrop. It is approximately 1.5 km (0.9 miles) from Gardavegen to
	the stone.
</div>
