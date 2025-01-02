<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';
	import { stones } from '$lib/stones'

	//import { PUBLIC_GOOGLEMAPS_API_KEY } from '$env/static/public';
	export let latitude = 61.00725466051024;
	export let longitude = 8.927172642666734;
	export let mapZoom = 6;

	export let hasInfoWindow:boolean = true;
	export let marker:string;

	let mapElement: HTMLElement;
	let map: google.maps.Map;
	let openInfoWindow: google.maps.InfoWindow;

	onMount(async function () {
		const loader = new Loader({
			apiKey: 'AIzaSyCl5xwKj0_wdWb8juJlNpfazdR6dDuKMLQ',
			version: 'weekly'
		});

		const { Map } = await loader.importLibrary('maps');

		map = new Map(mapElement, {
			center: { lat: latitude , lng: longitude },
			zoom: mapZoom,
			mapId: "ab4e76c745d42374",
			disableDefaultUI: true,
    		zoomControl: true,
			clickableIcons: false,
		});

		if(hasInfoWindow){
			openInfoWindow = new google.maps.InfoWindow({
				maxWidth: 250
			})
		}
		openInfoWindow.setContent(`	<div class="flex flex-col gap-2">
										<h1 class="texl-lg font-bold mx-auto">
											Prosjektet er under utvikling
										</h1>
										<p>
										Flere løftesteiner vil bli lagt inn fortløpende. Dersom du vet om noen løftesteiner;  
										</p>
										<a class="mx-auto px-2 text-sm border-2 border-black rounded-sm bg-bg-gray font-bold text-white"
											href="/contact">Ta kontakt</a>
									</div>`);
		openInfoWindow.setPosition({lat: 61.00725466051024, lng: 8.927172642666734});
		openInfoWindow.open(map, map);

		populateAllMarkers();
	});

	async function populateAllMarkers(){
		if(marker){
			if(marker in stones){
				populateSingleMarker(marker);
				map.setCenter(stones[marker].location)
				map.setZoom(10)
			}
		} else {
			for(let key in stones){
				populateSingleMarker(key);
			}
		}
	};

	async function populateSingleMarker(stone: string){
		const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

		const currStone = stones[stone]

		const marker = new AdvancedMarkerElement({
			map,
			position: currStone.location,
			title: currStone.name
		});

		if(hasInfoWindow){
			marker.addListener("click", function(){
				if(openInfoWindow){
					openInfoWindow.close();
				}

				let infoContent = `<div class="size-full flex flex-col gap-2">`
				
				if(currStone.page){
					infoContent += `<a class="font-bold text-lg" href="/stones/${stone}">${currStone.name}</a>`
				} else {
					infoContent += `<h1 class="font-bold text-lg">${currStone.name}</h1>`
				}

				if(currStone.img){
					infoContent += `<img class="object-scale-down size-full px-2" src=${"src/lib/images/stones/" + currStone.img} alt=""/>`
				}
								
				infoContent +=	`<div class="flex flex-row flex-wrap mx-auto content-center gap-6"> 
									<p class=""> <strong>Vekt: </strong> ${currStone.weight} kg</p>
									<p class=""> <strong>Løftbar: </strong> ${currStone.liftable}</p>
								</div>
								<div class="">
									<p class="w-full">${currStone.aboutBody}</p>
								</div>`

				// Append "Read More" if there is a page on this stone
				if(currStone.page){
					infoContent += `<a class="hover:text-blue-500" href="/stones/${stone}">Les mer</a>`;
				}
				
				infoContent += `</div>`
				
				if(openInfoWindow){
					openInfoWindow.setContent(infoContent);
					openInfoWindow.open(map, marker);
				}
				
			})

			map.addListener("click", function(){
				openInfoWindow.close();
			})
		}
	};

</script>

<div class="h-full w-full" bind:this={mapElement} />