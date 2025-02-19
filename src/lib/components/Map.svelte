<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';
	import { stones } from '$lib/stones';
	import { base } from '$app/paths';
	import MapCloseButton from './MapCloseButton.svelte';
	import { languageTag } from '$lib/paraglide/runtime';
	import { i18n } from '$lib/i18n';
	import * as m from '$lib/paraglide/messages';

	const images: any = import.meta.glob('$lib/images/stones/**.jpeg', {
		eager: true,
		query: {
			w: 250
		}
	});

	interface Props {
		center?: { lat: number; lng: number };
		mapZoom?: number;
		hasInfoWindow?: boolean;
		focused_marker?: string | undefined;
		single_marker?: boolean;
		dev_info?: boolean;
	}

	let {
		center = { lat: 61.00725466051024, lng: 8.927172642666734 },
		mapZoom = 6,
		hasInfoWindow = true,
		focused_marker = undefined,
		single_marker = false,
		dev_info = false,
	}: Props = $props();

	let mapElement: HTMLElement;
	let map: google.maps.Map;
	let openInfoWindow: google.maps.InfoWindow;

	onMount(async () => {
		const loader = new Loader({
			apiKey: 'AIzaSyCl5xwKj0_wdWb8juJlNpfazdR6dDuKMLQ',
			version: 'weekly'
		});

		const { Map } = (await loader.importLibrary('maps')) as google.maps.MapsLibrary;

		map = new Map(mapElement, {
			center: center,
			zoom: mapZoom,
			mapId: 'ab4e76c745d42374',
			disableDefaultUI: true,
			zoomControl: true,
			clickableIcons: false
		});

		if (hasInfoWindow) {
			openInfoWindow = new google.maps.InfoWindow({
				maxWidth: 250,
				minWidth: 250
			});

			openInfoWindow.setHeaderDisabled(true);

			if (dev_info) {
				set_dev_info();
			}
		}

		populateAllMarkers();
	});

	async function populateAllMarkers() {
		if (focused_marker) {
			if (focused_marker in stones) {
				map.setCenter(stones[focused_marker].location);
				map.setZoom(10);
			}
			if(single_marker) {
				populateSingleMarker(focused_marker);
				return;
			}
		} 
		for (let key in stones) {
			populateSingleMarker(key);
		}
	}

	async function populateSingleMarker(stone: string) {
		const { AdvancedMarkerElement } = (await google.maps.importLibrary(
			'marker'
		)) as google.maps.MarkerLibrary;

		const currStone = stones[stone];

		const marker = new AdvancedMarkerElement({
			map,
			position: currStone.location,
			title: currStone.name()
		});

		if (hasInfoWindow) {
			marker.addListener('click', function () {
				if (openInfoWindow) {
					openInfoWindow.close();
				}

				let infoContent = `<div class="size-full flex flex-col gap-3 my-3">`;

				if (currStone.page) {
					infoContent += `<a class="font-bold text-lg text-center" href=${i18n.resolveRoute(`${base}/steinliste/${stone}`, languageTag())}>${currStone.name()}</a>`;
				} else {
					infoContent += `<h1 class="font-bold text-lg text-center">${currStone.name()}</h1>`;
				}

				if (currStone.img) {
					infoContent += `<img class="object-scale-down size-full px-2"
									src=${images[`/src/lib/images/stones/${currStone.img}.jpeg`].default} alt="${currStone.name()}"/>`;
				}

				infoContent += `<div class="flex flex-row justify-evenly"> 
									<p class=""> <strong>${m.weight()}: </strong> 
									${currStone.weight ? currStone.weight.toString().replaceAll(',', ' ' + m.and() + ' ') + ' kg' : m.unknown()}
									</p>
									<p class=""> <strong>${m.liftable()}: </strong> ${currStone.liftable()}</p>
								</div>
								<div class="">
									<p class="w-full">${currStone.aboutBody()}</p>
								</div>`;

				// Append "Read More" if there is a page on this stone
				if (currStone.page) {
					infoContent += `<a class="hover:text-blue-500 underline" href=${i18n.resolveRoute(`${base}/steinliste/${stone}`, languageTag())}>${m.read_more()}</a>`;
				}

				infoContent += `</div>`;

				if (openInfoWindow) {
					openInfoWindow.setContent(infoContent);
					openInfoWindow.open(map, marker);
				}
			});

			map.addListener('click', function () {
				openInfoWindow.close();
			});

			if(stone == focused_marker){
				google.maps.event.trigger(marker, 'click');
			}
		}
	}

	async function set_dev_info(){
		let content = `	<div class="flex flex-col gap-3 my-3">
							<h1 class="texl-lg font-bold mx-auto text-center">
								${m.map_under_development()}
							</h1>								
							<p>
							${m.map_stone_to_be_added()}  
							</p>
							<a class="mx-auto px-2 text-sm border-2 border-black rounded-sm bg-bg-gray font-bold text-white"
								href="${i18n.resolveRoute(`${base}/kontakt`, languageTag())}">${m.contact()}</a>
						</div>`;

		openInfoWindow.setContent(content);

		openInfoWindow.setPosition(center);
		openInfoWindow.open(map, map);
	}
</script>

<div class="h-full w-full" bind:this={mapElement}></div>
