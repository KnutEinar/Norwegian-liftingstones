<script>
	import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";

    let { children } = $props();
</script>


<div class="flex flex-col min-h-screen">
    <Navbar />

    <div class="pt-4 md:pt-6 pb-14">
        {@render children?.()}
    </div>

    <Footer />
</div>
