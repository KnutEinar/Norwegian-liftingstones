<script lang="ts">
    import { stones } from '$lib/stones';

    export let data;
</script>

<div class="mx-auto w-full">
    <svelte:component this={data.content} />
</div>