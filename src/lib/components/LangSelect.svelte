<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let newLanguage: import('$lib/paraglide/runtime').AvailableLanguageTag = $state(languageTag());

	function switchToLanguage() {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}

	const lang_label: Record<import('$lib/paraglide/runtime').AvailableLanguageTag, string> = {
		no: 'Norsk',
		en: 'English'
	};
</script>

<select
	class="font-semibold text-menu-text bg-gray-600 hover:outline"
	bind:value={newLanguage}
	onchange={switchToLanguage}
>
	{#each availableLanguageTags as langTag}
		<option value={langTag} selected={languageTag() === langTag}>{lang_label[langTag]}</option>
	{/each}
</select>
