<script lang="ts">
	import NavbarButton from '$lib/components/NavbarButton.svelte';
	import Hamburger from './Hamburger.svelte';
	import HamburgerButton from './HamburgerButton.svelte';
	import LangSelectMini from './LangSelectMini.svelte';
	import { base } from '$app/paths';
	import * as m from '$lib/paraglide/messages.js';

	let links = [
		{ name: m.nav_link_home(), path: '' },
		{ name: m.nav_link_map(), path: 'kart' },
		{ name: m.nav_link_stone_list(), path: 'steinliste' },
		{ name: m.nav_link_about(), path: 'om' },
		{ name: m.nav_link_contact(), path: 'kontakt' }
	];

	let hamburgerPressed: boolean = $state(false);

	function onHamPress() {
		hamburgerPressed = !hamburgerPressed;
	}
</script>

<nav class="bg-bg-gray relative">
	<div class="max-w-screen-xl flex items-center justify-between mx-auto p-4 h-20">
		<div class="content-center justify-start">
			<a class="font-extrabold text-2xl text-[#c8c8c8]" href="{base}/">{m.title()}</a>
		</div>
		<div class="md:hidden">
			<Hamburger {onHamPress} {hamburgerPressed}></Hamburger>
		</div>
		<div class="hidden md:block">
			<div class="items-center flex justify-end">
				{#each links as { name, path }}
					<NavbarButton {name} source={path} />
				{/each}
				<LangSelectMini />
			</div>
		</div>
	</div>
	<div
		class={`md:hidden w-full mx-auto absolute z-10 bg-bg-gray opacity-95 ${hamburgerPressed ? 'h-min' : 'h-0'} transition-[height] duration-500 overflow-hidden`}
	>
		<div class="items-center flex flex-col justify-start mb-4">
			{#each links as { name, path }}
				<HamburgerButton {name} source={path} onPress={() => (hamburgerPressed = false)} />
			{/each}
			<LangSelectMini />
		</div>
	</div>
</nav>
