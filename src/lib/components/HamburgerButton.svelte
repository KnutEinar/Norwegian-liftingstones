<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		name: string;
		source: string;
		onPress: () => void;
	}

	let { name, source, onPress }: Props = $props();
</script>

<a
	class="font-bold text-[#c8c8c8] p-3 text-lg hover:underline underline-offset-4 decoration-menu-text decoration-4"
	href="{base}/{source}"
	onclick={onPress}>{name}</a
>
