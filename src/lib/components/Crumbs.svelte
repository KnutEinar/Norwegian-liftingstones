<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { i18n } from '$lib/i18n';
	import { availableLanguageTags } from '../paraglide/runtime';
	import * as m from '$lib/paraglide/messages';

	let urls: Array<string> = $state([]);
	let names: Array<string> = $state([]);

	const getFilteredUrl = (): void => {
		urls = i18n
			.route(page.url.pathname)
			.split('/')
			.filter((path) => path.length > 0)
			.filter((path) => path !== base.replaceAll('/', ''));

		for (let i = 1; i < urls.length; i++) {
			urls[i] = `${urls[i - 1]}/${urls[i]}`;
		}

		names = page.url.pathname
			.split('/')
			.filter((path) => path.length > 0)
			.filter((path) => path !== base.replaceAll('/', ''));

		for (let i = 0; i < availableLanguageTags.length; i++) {
			if (names[0] == availableLanguageTags[i]) {
				names.shift();
			}
		}

		//Remove underlines and make first letter of every word uppercase
		for (let i = 0; i < names.length; i++) {
			names[i] = names[i]
				.replaceAll('_', ' ')
				.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
		}
	};

	onMount(() => {
		getFilteredUrl();
	});

	afterNavigate(() => {
		getFilteredUrl();
	});
</script>

<div class="w-full mb-6">
	<ol class="flex flex-row gap-3 md:gap-6 justify-start text-sm sm:text-base">
		<li class="hover:font-bold">
			<a href="{base}/">{m.home()}</a>
		</li>
		<li class="">/</li>
		{#each urls as item, index}
			<li class="hover:font-bold last:hover:font-semibold last:font-semibold">
				<a href="{base}/{item}">{names[index]}</a>
			</li>
			{#if index !== urls.length - 1}
				<li class="">/</li>
			{/if}
		{/each}
	</ol>
</div>
