<script lang="ts">
    import { base } from "$app/paths";
    import Judas from "$lib/images/stones/judas_stone_2023.jpeg"
    import Kirke from "$lib/images/stones/IMG_4290.jpeg"
    import Veiing from "$lib/images/stones/IMG_4179.jpeg"
</script>

<div class="mx-auto">
    <div class="flex flex-col gap-8">
        <p class="text-center"><strong>
            Formålet med dette prosjektet er å samle inn informasjon og å bevare historiene om 
            historiske løftesteiner fra hele Norge.
        </strong></p>

        <img  class="object-scale-down max-h-96 mx-auto px-4"
            src={Kirke} alt="">

        <p>
            Løftesteiner er et fenomen som sannsynligvis strekker seg tilbake til tidenes morgen. Mennesket
            har alltid vært opptatt av styrke, og man har nok alltid vært interressert i å se hvem som er sterkest.
            Løfting av stein har dermed blitt en verdensomspennende konkurranseform, og man kjenner til løftesteiner
            fra hele verden. I moderne til har mye av den historiske steinløftingen veket for andre
            styrkekonkurranser, og dette har ført til at informasjon og historier om løftesteinene går tapt.
        </p>

        <p>
            I Norge har vi mange historiske løftesteiner, og sannsynligvis enda flere som ligger klare til å bli oppdaget igjen.
            Den eldste steinen med kjent opphav, som jeg kjenner til, er <i>Viske-løftet</i> av Sevat Embrikson fra 1750.
            Om man ønsker å finne steiner som denne, eller ønsker å høre historiene om dem vil man fort komme til kort.
            Det finnes faktisk ingen samlet kilde til denne informasjonen. Enkelte kilder, hvor man kan lese om en, eller kanskje
            en håndfull steiner eksisterer, men det finnes ingen oppslagsverk som tar for seg hele Norge. 
        </p>

        <p class="">
            Dette har vært min inspirasjon til å starte dette prosjektet. Målet har siden starten vært å samle
            informasjon om alle de norske løftesteinene vi kjenner til, i et samlet oppslagsverk. Uten et slikt
            oppslagsverk er jeg redd fryktelig mye kulturhistorie vil gå tapt.
        </p>
    
        <div class="flex flex-col-reverse md:flex-row">
            <div class="flex flex-col gap-8">
                <p>
                    Min egen interresse for historiske løftesteiner startet med historiene om løftesteinene
                    på Island. Island vil nok for de aller fleste forbindes med vulkaner og isbreer, men 
                    for en liten gruppe spesielt interresserte, meg inkludert, er Island synonymt med 
                    styrkekultur og løftesteiner.
                </p>
                <p>
                    Fysisk styrke har nok av klimatiske årsaker alltid vært viktig i den islandske kulturen.
                    Og Island har i likhet med Norge veldig mange historiske løftesteiner. Men til forskjell fra 
                    Norge har historiene om løftestiner på Island til en større grad blitt tatt vare på, 
                    og de er lettere å oppdrive.
                </p>
            </div>
            <div class="mx-auto h-auto flex flex-col px-4">
                <img  class="object-scale-down max-h-80 min-w-80"
                    src={Judas} alt="">
                <p class="text-center text-sm">
                    Judas-steinen (127 kg) i Látravík på Island i 2023
                </p>
            </div>
        </div>
        <p>
            Etter en tur til Island i 2023, hvor jeg besøkte flere av de mest kjente løftesteinene i landet,
            ble jeg veldig nyskjerrig på hvorvidt det fantes tilsvarende steiner i Norge. Og etter utallige timer
            med leting ble ideen til dette prosjektet født. Nå prøver jeg å få reist rundt til de steinene jeg
            kjenner til, både for å prøve å løfte dem, men også for å bekrefte at de fremdeles ligger der de skal.
        </p>
        <div class="mx-auto h-auto flex flex-col px-4">
            <img  class="object-scale-down max-h-80 mx-5"
                src={Veiing} alt="">
            <p class="text-center text-sm">
                <a href="{base}/steinliste/sunnhordaland_museum"><i>Steinen på Sunnhordaland Museum</i> kontrollveies</a>
            </p>
        </div>
        <p>
            Som nevnt, er skriftlige kilder på løftesteiner mangelfulle, men samtidig har jeg hatt veldig
            interressante samtaler med personer rundt i Norge som kjenner til løftesteiner i sitt nærområde.
            Jeg trenger derfor din hjelp til å fullføre dette prosjektet! Dersom du kjenner til løftesteiner
            som ikke er nevnt på denne siden, eller har mer info om noen av steinene, ønsker jeg svært gjerne
            å høre fra deg. Kanskje kan du hjelpe til med å bevare den norske styrkekulturen med løftesteiner.
        </p>
        <a class="mx-auto px-2 text-lg border-2 border-black rounded-sm bg-bg-gray font-bold text-white"
        href="{base}/kontakt">Ta kontakt</a>
    </div>
    
</div>