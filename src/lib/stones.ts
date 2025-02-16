import * as m from '$lib/paraglide/messages';

export interface stone {
	[stoneId: string]: {
		name(): string;
		location: { lat: number; lng: number };
		weight: number | Array<number>;
		liftable(): string;
		aboutBody(): string;
		page: Boolean;
		img?: string;
	};
}

export const stones: stone = {
	sunnhordaland_museum: {
		name: () => m.sunnhordaland_museum_name(),
		location: { lat: 59.783423, lng: 5.501304 },
		weight: 106.5,
		liftable: () => m.liftable_yes(),
		aboutBody: () => m.sunnhordaland_museum_about(),
		page: true,
		img: 'Sunnhordaland'
	},
	israelsneset: {
		name: () => m.israelsneset_name(),
		location: { lat: 59.398444, lng: 6.102514 },
		weight: 148,
		liftable: () => m.liftable_yes(),
		aboutBody: () => m.israelsneset_about(),
		img: 'Israelsneset',
		page: false
	},
	per_persasteinen: {
		name: () => m.per_persasteinen_name(),
		location: { lat: 63.417769, lng: 10.355263 },
		weight: 247.5,
		liftable: () => m.liftable_yes(),
		aboutBody: () => m.per_persasteinen_about(),
		page: true,
		img: 'per_persasteinen'
	},
	kolagarden: {
		name: () => m.kolagarden_name(),
		location: { lat: 59.656874, lng: 6.933725 },
		weight: 128,
		liftable: () => m.liftable_yes(),
		aboutBody: () => m.kolagarden_about(),
		img: 'kolagarden',
		page: true
	},
	helleland: {
		name: () => m.helleland_name(),
		location: { lat: 58.541571421993346, lng: 6.125394277642868 },
		weight: 173,
		liftable: () => m.liftable_yes(),
		aboutBody: () => m.helleland_about(),
		img: 'IMG_4290',
		page: false
	},
	rysstad: {
		name: () => m.rysstad_name(),
		location: { lat: 59.09516969698624, lng: 7.527288455485615 },
		weight: 133.5,
		liftable: () => m.liftable_yes(),
		aboutBody: () => m.rysstad_about(),
		page: true,
		img: 'rysstad'
	},
	fjotland: {
		name: () => m.fjotland_name(),
		location: { lat: 58.522686877144366, lng: 6.991169064223241 },
		weight: [102, 207],
		liftable: () => m.liftable_yes(),
		aboutBody: () => m.fjotland_about(),
		page: true,
		img: 'fjotland'
	}
};
