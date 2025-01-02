<script>
	import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";
</script>


<div class="flex flex-col min-h-screen w-full">
    <Navbar />

    <div class="max-w-screen-md px-4 mx-auto mt-10 mb-14">
        <slot/>
    </div>

    <Footer />
</div>
