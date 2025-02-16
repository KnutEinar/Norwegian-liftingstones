<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let newLanguage: import('$lib/paraglide/runtime').AvailableLanguageTag = $state(languageTag());

	function switchToLanguage() {
		const canonicalPath = i18n.route(page.url.pathname);
		if (languageTag() == 'no') {
			const localisedPath = i18n.resolveRoute(canonicalPath, 'en');
			goto(localisedPath);
		} else {
			const localisedPath = i18n.resolveRoute(canonicalPath, 'no');
			goto(localisedPath);
		}
	}

	const lang_label: Record<import('$lib/paraglide/runtime').AvailableLanguageTag, string> = {
		no: '/no.png',
		en: '/gb.png'
	};
</script>

<!-- <select
	class="font-semibold text-menu-text bg-gray-600 hover:outline"
	bind:value={newLanguage}
	onchange={switchToLanguage}
>
	{#each availableLanguageTags as langTag}
		<option value={langTag} selected={languageTag() === langTag}>{lang_label[langTag]}</option>
	{/each}
</select> -->

<button
	class="font-semibold text-menu-text hover:outline outline-4 outline-offset-2 rounded-sm m-4 content-center"
	onclick={switchToLanguage}
>
	<img class="object-scale-down h-6" src={lang_label[languageTag()]} alt="Current Language" />
</button>
