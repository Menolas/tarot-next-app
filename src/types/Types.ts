interface BaseCard {
    id: string;
    name: string;
    image: string;
}

interface Suite extends BaseCard {
    suite: 'chalices' | 'swords' | 'pentacles' | 'wands';
    value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "page" | "knight" | "queen" | "king";
}

interface Arcana extends BaseCard {
    value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;
}

export type Card =
    | Arcana
    | Suite;
