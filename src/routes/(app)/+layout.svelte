<script>
	import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import Crumbs from "$lib/Crumbs.svelte";
</script>


<div class="flex flex-col min-h-screen w-full">
    <Navbar />

    <div class="max-w-screen-md px-4 mx-auto mt-4 md:mt-6 mb-14 ">
        <Crumbs />
        
        <slot/>
    </div>

    <Footer />
</div>
