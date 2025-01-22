<script lang="ts">
    import NavbarButton from "$lib/NavbarButton.svelte"
    import Hamburger from "./Hamburger.svelte";
	import HamburgerButton from "./HamburgerButton.svelte";
    import { base } from "$app/paths";

    let links = [
        {name: "Hjem", path: ""},
        {name: "Kart", path: "kart"},
        {name: "Steinliste", path: "steinliste"},
        {name: "Om Prosjektet", path: "om"},
        {name: "Kontakt", path: "kontakt"}
    ]

    let hamburgerPressed:boolean = $state(false);

    function onHamPress() {
        hamburgerPressed = !hamburgerPressed;
    }
</script>

<nav class="bg-bg-gray relative">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4 h-20">
        <div class="content-center mx-8">
            <a class="text-center font-extrabold text-2xl text-[#c8c8c8]" href="{base}/">Norske Løftesteiner</a>
        </div>
        <div class="md:hidden">
            <Hamburger {onHamPress} {hamburgerPressed}></Hamburger>
        </div>
        <div class="hidden md:block">
            <div class="items-center flex justify-end">
                {#each links as {name, path}}
                    <NavbarButton name={name} source={path}/>
                {/each}
            </div>
        </div>
    </div>
    <div class={`md:hidden w-full mx-auto absolute z-10 bg-bg-gray opacity-95 ${hamburgerPressed ? "h-min" : "h-0"} transition-[height] duration-500 overflow-hidden`}>
        <div class="items-center flex flex-col justify-start">
            {#each links as {name, path}}
                <HamburgerButton name={name} source={path} onPress={() => hamburgerPressed = false}/>
            {/each}
            <div class="h-2"></div>
        </div>
    </div>
</nav>