import {Card} from "@/types/Types";

export const pickRandomCards = ({cards, count}: {cards: Card[]; count: number}) => {
    let chosenCards: Card[] = [];
    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * cards.length);
        const card = cards[index];
        chosenCards = [...chosenCards, card];
        cards = cards.filter((_, i) => i !== index);
    }
    return chosenCards;
}

export const getQuestionPrompt = (chosenCards: Card[]) => {
    return `Can you reveal my fate by interpreting the meaning of the ${chosenCards[0].name}, ${chosenCards[1].name}, and ${chosenCards[2].name} I drew from the tarot deck?`;

}
