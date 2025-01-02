export interface stone {
    [stoneId: string]: {
        name: string;
        location: {lat: number, lng: number};
        weight: number;
        liftable: "Ja" | "Nei" | "Ukjent";
        aboutBody: string;
        page?: Boolean;
        img?: string;
    }
}

export const stones: stone = {
    sunnhordaland_museum: {
        name: "Løftesteinen ved Sunnhordaland Museum",
        location: {lat: 59.783423, lng: 5.501304},
        weight: 106.5,
        liftable: "Ja",
        aboutBody: `Ved eldhust på Sunnhordalandstunet ligger en løftestein fra Stord. Steinen er rund og sleip, og kan være utfordrende å få tak på. Steinen har blant annet blitt løftet av Torkel Ravndal.`,
        page: true,
        img: "Sunnhordaland",
    },
    israelsneset: {
        name: "Israelsneset Gard",
        location: {lat: 59.398444, lng: 6.102514},
        weight: 148,
        liftable: "Ja",
        aboutBody: "string",
        page: false,
        img: "Israelsneset",
    },
    per_persasteinen: {
        name: "Per Persasteinen",
        location: {lat: 63.417769, lng: 10.355263},
        weight: 247.5,
        liftable: "Ja",
        aboutBody: "Per Persasteinen er oppkalt etter Peder Pedersen, en bydekjempe fra Fosen som skal ha løftet steinen og hugget inn teksten som står skrevet på den. Løftesteinen var kjent på Fosen, og har historisk blitt besøkt av fiskelag på vei til Lofotfiske.",
        page: true,
        img: "Per_Persasteinen",
    },
    kolagarden: {
        name: "Mannsløftet på Kolagarden",
        location: {lat: 59.656874, lng: 6.933725},
        weight: 128,
        liftable: "Ja",
        aboutBody: `På Kolagarden ligger det en stein som blir kalt et Mannsløft. En mann måtte klare
                    å løfte denne. Steinen ligger godt synlig på en liten steinknaus.`,
        img: "kolagarden",
        page: true,
    }
}