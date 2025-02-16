<script lang="ts">
	interface Props {
		onHamPress: () => void;
		hamburgerPressed: Boolean;
	}
	let { onHamPress, hamburgerPressed }: Props = $props();
</script>

<button
	class="h-10 w-12 flex flex-col justify-between p-2"
	onclick={onHamPress}
	aria-label="Hamburgermeny"
>
	<div
		class={`w-full h-1/6 bg-[#c8c8c8] rounded-sm ${hamburgerPressed ? 'rotate-[45deg] translate-y-2.5' : ''} transition-all duration-300`}
	></div>
	<div
		class={`w-full h-1/6 bg-[#c8c8c8] rounded-sm ${hamburgerPressed ? 'opacity-0' : 'opacity-100 transition-opacity duration-300 ease-in'}`}
	></div>
	<div
		class={`w-full h-1/6 bg-[#c8c8c8] rounded-sm ${hamburgerPressed ? '-rotate-[45deg] -translate-y-2.5' : ''} transition-all duration-300`}
	></div>
</button>
