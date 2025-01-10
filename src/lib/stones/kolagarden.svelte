<script lang="ts">
	import Map from "$lib/Map.svelte";
    import Img from "$lib/images/stones/kolagarden.jpeg"
</script>

<h1 class="font-bold text-2xl text-center">Mannsløftet på Kolagarden</h1>

<img class="my-10 mx-auto content-center object-scale-down max-h-96"
    src={Img} alt="Mannsløftet på Kolagarden">

<p>
    På Kolagarden ligger det en stein på <strong>128 kg</strong> som blir kalt et Mannsløft. En mann måtte klare
    å løfte denne. Steinen er noe avlang, og er relativt grei å få godt tak på. Fra området hvor
    steinen ligger har man god utsikt utover hele dalen.
</p>

<div class="m-10">
    <div class="w-full h-80">
        <Map marker={"kolagarden"} hasInfoWindow={false}/>
    </div>
</div>

For å nå steinen må man gå noe. Fra Gardavegen følger man den private vegen fra bommen og opp til gården,
herfra er det ganske bratt og ulendt opp til steinen. Mannsløftet ligger godt synlig på en liten 
steinknaus. Det er omtrent 1.5 km opp til steinen fra Gardavegen.