<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<div class="flex flex-col min-h-screen">
	<Navbar />
	<h1 class="font-bold text-2xl text-center m-10">{m.page_error()}</h1>
	<Footer />
</div>