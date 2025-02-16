<script lang="ts">
	import { base } from '$app/paths';
	import LangSelect from './LangSelect.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<footer class="mt-auto">
	<div class="bg-bg-gray h-28 flex flex-row content-center gap-6">
		<div class="text-menu-text flex-shrink-0 px-4 content-center mx-auto">
			<strong>{m.developed_by()}:</strong> <br />
			Knut Einar Skår
		</div>
		<div class="mx-auto my-auto">
			<LangSelect />
		</div>
	</div>
</footer>
