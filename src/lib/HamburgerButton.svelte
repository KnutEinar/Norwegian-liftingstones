<script lang="ts">
    import { base } from '$app/paths';
    export let name:string;
    export let source:string;
</script>

<a class="font-bold text-[#c8c8c8] p-3 text-lg hover:underline underline-offset-4 decoration-menu-text decoration-4"
    href="{base}{source}" on:click>{name}</a>