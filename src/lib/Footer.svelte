<script lang="ts">
    import { base } from "$app/paths";
    let links = [
        {name: "Hjem", path: ""},
        {name: "Kart", path: "kart"},
        {name: "Steinliste", path: "steinliste"},
        {name: "Om", path: "om"},
        {name: "Kontakt", path: "kontakt"}
    ]
</script>

<footer class="mt-auto">
    <div class="bg-bg-gray h-28 flex flex-row content-center gap-6">
        <div class="text-menu-text flex-shrink-0 px-4 content-center mx-auto">
            <strong>Utviklet av:</strong> <br>
            Knut Einar Skår
        </div>
        <div class="py-4 md:flex flex-row flex-wrap content-center mx-auto hidden ">
            {#each links as {name, path}}
                <a href="{base}/{path}"
                    class="text-menu-text decor text-center px-4 py-1 hover:underline underline-offset-4 decoration-menu-text decoration-2">
                    {name}
                </a>
            {/each}
        </div>
    </div>
</footer>