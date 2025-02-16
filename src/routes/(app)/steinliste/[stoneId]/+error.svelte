<script lang="ts">
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';

	if (page.status != 500) {
		throw error;
	}
</script>

<h1 class="font-bold text-2xl text-center m-10">Finner ingen info om denne steinen 😢</h1>
