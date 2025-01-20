<script lang="ts">
    import { base } from "$app/paths";
    import ArticleImgText from "$lib/ArticleImgText.svelte";
    import Crumbs from "$lib/Crumbs.svelte";

    // import Judas from "$lib/images/stones/judas_stone_2023.jpeg"
    // import Kirke from "$lib/images/stones/IMG_4290.jpeg"
    // import Veiing from "$lib/images/stones/IMG_4179.jpeg"

    // @ts-expect-error
    import Helleland from "$lib/images/stones/IMG_4290.jpeg?enhanced&w=768";
    // @ts-expect-error
    import Judas from "$lib/images/stones/judas_stone_2023.jpeg?enhanced&w=768";
    // @ts-expect-error
    import Veiing from "$lib/images/stones/IMG_4179.jpeg?enhanced&w=768";
</script>

<enhanced:img class="min-w-full object-contain -mt-4 md:-mt-6"
            src="$lib/images/stones/kolagarden_banner.jpeg?w=1780" alt="Løftesteinen på Kolagarden i vakre omgivelser"/>


<div class="max-w-screen-md mx-auto px-4 mt-4">
    <Crumbs/>
    <div class="flex flex-col gap-10">
        <h1 class="text-4xl font-semibold text-center">
            Formålet med prosjektet
        </h1>

        <p class="text-center"><strong>
            Formålet med dette prosjektet er å kartlegge historiske løftesteiner fra hele Norge. På denne nettsiden vil jeg prøve å samle informasjon om flest mulig løftesteiner slik at denne informasjonen er allment tilgjengelig.
        </strong></p>

        <ArticleImgText img={Helleland}
            alt={"Helleland-steinen ved Helleland Kirke"}
            text={"Helleland-steinen ved Helleland Kirke utenfor Egersund"} 
            padding={"px-4 md:px-10"}
            imgSize={"max-h-72"}/>

        <p>
            Løftesteiner er et fenomen som sannsynligvis strekker seg tilbake til tidenes morgen. Mennesket har alltid vært opptatt av styrke, og man har nok alltid vært interessert i å konkurrere om hvem som er sterkest. Løfting av stein har dermed blitt en verdensomspennende konkurranseform, og man kjenner til løftesteiner fra hele verden. I moderne tid har mye av den historiske steinløftingen veket for andre styrkekonkurranser, og dette har ført til at informasjonen og historiene om løftesteinene går tapt.
        </p>

        <p>
            I Norge har vi mange historiske løftesteiner, og sannsynligvis enda flere som ligger klare til å bli oppdaget igjen. De norske steinene kommer i et bredt spekter av størrelser, fra de letteste på rundt 60 kg, til de tyngste på flere hundre kg. Den eldste steinen med kjent opphav, som jeg kjenner til, er <i>Viske-løftet</i> av Sevat Embrikson fra 1750. Om man ønsker å finne steiner som denne, eller ønsker å oppdrive historiene om dem, vil man fort komme til kort. Det finnes faktisk ingen samlet kilde til denne informasjonen. Enkelte kilder, hvor man kan lese om en, eller kanskje en håndfull steiner eksisterer, men det finnes ingen oppslagsverk som tar for seg hele Norge.
        </p>

        <p>
            Dette har vært min inspirasjon til å starte dette prosjektet. Målet har siden starten vært å samle informasjon om alle de norske løftesteinene vi kjenner til, i et samlet oppslagsverk. Uten et slikt oppslagsverk er jeg redd fryktelig mye kulturhistorie vil gå tapt.
        </p>
    
        <div class="space-y-10 md:space-y-0">
            <ArticleImgText img={Judas}
                alt={"Judas-steinen i Látravík på Island"}
                text={"Judas-steinen (127 kg) i Látravík på Island i 2023"} 
                padding={"px-4 md:px-10 md:float-right"}
                imgSize={"max-h-80 min-w-80"}/>

            <div class="flex flex-col gap-10">
                <p>
                    Min egen interesse for historiske løftesteiner startet med historiene om løftesteinene på Island. Island vil nok for de aller fleste forbindes med vulkaner og isbreer, men for en liten gruppe spesielt interesserte, meg inkludert, er Island synonymt med styrkekultur og løftesteiner.
                </p>
                <p>
                    Fysisk styrke har nok av klimatiske årsaker alltid vært viktig i den islandske kulturen. Og Island har i likhet med Norge veldig mange historiske løftesteiner. Men til forskjell fra Norge har historiene om løftestiner på Island til en større grad blitt tatt vare på, og de er lettere å oppdrive.
                </p>
            </div>
        </div>
        <p>
            Etter en tur til Island i 2023, hvor jeg besøkte flere av de mest kjente løftesteinene i landet, ble jeg veldig nysgjerrig på hvorvidt det fantes tilsvarende steiner i Norge. Og etter utallige timer med leting ble ideen til dette prosjektet født. 
        </p>

        <ArticleImgText img={Veiing}
                alt={"Steinen på Sunnhordaland Museum kontrollveies"}
                text={`<a href="${base}/steinliste/sunnhordaland_museum" class="underline hover:text-blue-500"><i>Steinen på Sunnhordaland Museum</i></a> kontrollveies`} 
                padding={"px-4 md:px-10"}
                imgSize={"max-h-80"}/>

        <p>
            Skriftlige kilder på løftesteiner er som nevnt svært mangelfulle, men det finnes sannsynligvis utallige personer rundt i Norge som kjenner til løftesteiner i sitt nærområde. Jeg trenger derfor din hjelp til å fullføre dette prosjektet! Dersom du kjenner til løftesteiner som ikke er nevnt på denne siden, eller har mer info om noen av steinene, ønsker jeg svært gjerne å høre fra deg. Kanskje kan du hjelpe til med å bevare den norske styrkekulturen rundt løftesteiner.
        </p>
        <a class="mx-auto px-2 text-lg border-2 border-black rounded-sm bg-bg-gray font-bold text-white"
        href="{base}/kontakt">Ta kontakt</a>
    </div>
    
</div>