<script lang="ts">
	let { children } = $props();
</script>

<div class="max-w-screen-md mx-auto px-4">
	{@render children?.()}
</div>
