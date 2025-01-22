export interface stone {
    [stoneId: string]: {
        name: string;
        location: {lat: number, lng: number};
        weight: number | Array<number>;
        liftable: "Ja" | "Nei" | "Ukjent";
        aboutBody: string;
        page: Boolean;
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
        aboutBody: "Mer info kommer",
        img: "Israelsneset",
        page: false,
    },
    per_persasteinen: {
        name: "Per Persasteinen",
        location: {lat: 63.417769, lng: 10.355263},
        weight: 247.5,
        liftable: "Ja",
        aboutBody: "Per Persasteinen er oppkalt etter Peder Pedersen, en bydekjempe fra Fosen som skal ha løftet steinen og hugget inn teksten som står skrevet på den. Løftesteinen var kjent på Fosen, og har historisk blitt besøkt av fiskelag på vei til Lofotfiske.",
        page: true,
        img: "per_persasteinen",
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
    },
    helleland: {
        name: "Helleland-steinen",
        location: {lat: 58.541571421993346, lng: 6.125394277642868},
        weight: 173,
        liftable: "Ja",
        aboutBody: `Steinen ligger ved Helleland kirke, ved parkeringsplassen utenfor kirkeporten.
                    Et løft består av å løfte steinen opp på et om lag 30 cm høyt platå (lensmanssteinen).`,
        img: "IMG_4290",
        page: false,
    },
    rysstad: {
        name: "Manndomssteinen på Rysstad",
        location: {lat: 59.09516969698624, lng: 7.527288455485615},
        weight: 133.5,
        liftable: "Ja",
        aboutBody: `Manndomssteinen på Rysstad ligger utenfor Setesdalsmuseet. Den veier 133.5 kg, og kommer opprinnelig fra Fardalen, vest for Rysstad.`,
        page: true,
        img: "rysstad",
    },
    fjotland: {
        name: "Lesarsteinen og Prestesteinen",
        location: {lat: 58.522686877144366, lng: 6.991169064223241},
        weight: [102, 207],
        liftable: "Ja",
        aboutBody: `I Fjotland ligger det to løftesteiner, den mindre Lesarsteinen, og den tyngre Prestesteinen. Lesarsteinen var en manndomsprøve for unge fjotlendinger, og Prestesteinen skal ha blitt løftet en av prestene i Fjotland på sent 1800-tallet.`,
        page: true,
        img: "fjotland",
    }
}