<script lang="ts">
    import NavbarButton from "$lib/NavbarButton.svelte"
    import Hamburger from "./Hamburger.svelte";
	import HamburgerButton from "./HamburgerButton.svelte";

    let links = [
        {name: "Kart", path: "/"},
        {name: "Steinliste", path: "/stones"},
        {name: "Om Prosjektet", path: "/about"},
        {name: "Kontakt", path: "/contact"}
    ]

    let hamburgerPressed:boolean = false;

    function onHamPress() {
        hamburgerPressed = !hamburgerPressed;
    }
</script>

<nav class="bg-bg-gray ">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4 h-20">
        <div class="content-center mx-8">
            <a class="text-center font-extrabold text-2xl text-[#c8c8c8]" href="/">Norske Løftesteiner</a>
        </div>
        <div class="md:hidden">
            <Hamburger on:click={() => onHamPress()} bind:pressed={hamburgerPressed}></Hamburger>
        </div>
        <div class="hidden md:block">
            <div class="items-center flex justify-end">
                {#each links as {name, path}}
                    <NavbarButton name={name} source={path}/>
                {/each}
            </div>
        </div>
    </div>
    <div class={`${hamburgerPressed ? "h-56" : "h-0"} transition-[height] duration-500 overflow-hidden`}>
        <div class="items-center flex flex-col justify-start">
            {#each links as {name, path}}
                <HamburgerButton on:click={() => {hamburgerPressed = false;}} name={name} source={path}/>
            {/each}
        </div>
    </div>
</nav>