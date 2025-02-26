<script lang="ts">
	import { base } from '$app/paths';
	import LangSelect from './LangSelect.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<footer class="mt-auto">
	<div class="bg-bg-gray h-28 flex flex-row content-center gap-6">
		<div class="text-menu-text flex-shrink-0 px-4 content-center mx-auto">
			<strong>{m.developed_by()}:</strong> <br />
			<div class="">
				<a
					class="hover:underline flex flex-row gap-1"
					href="https://www.instagram.com/knuteinarskar"
				>
					Knut Einar Skår
					<img class="h-5 my-auto" src="/ig.png" alt="Instagram logo" />
				</a>
			</div>
		</div>
		<div class="mx-auto my-auto">
			<LangSelect />
		</div>
	</div>
</footer>
