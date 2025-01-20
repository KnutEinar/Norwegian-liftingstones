<script lang="ts">
    interface Props {
        heading: string
    }

    let { heading }: Props = $props();
</script>

<h1 class="font-bold text-2xl text-center">{ heading }</h1>