import Medallion3 from "@/assets/svg/medallion3.svg";
import Medallion4 from "@/assets/svg/medallion4.svg";
import {Card} from "@/types/Types";
import Image from 'next/image';
import {tarots} from "@/data";
import {useEffect, useState} from "react";


export default function Tarot() {
    const [cardsDeck, setCardsDeck] = useState<Card[]>([...tarots]);
    const [chosenCards, setChosenCards] = useState<Card[]>([]);
    const [isPredictionReady, setIsPredictionReady] = useState(false);

    useEffect(() => {
        if (chosenCards.length === 3) {
            setIsPredictionReady(true);
        }

    }, [chosenCards]);

    const pickRandomCards = async () => {
        if (chosenCards.length < 3) {
            const index = Math.floor(Math.random() * cardsDeck.length);
            const card = cardsDeck[index];
            setChosenCards((prevChosenCards) => [...prevChosenCards, card]);
            setCardsDeck((prevDeck) => prevDeck.filter((_, i) => i !== index));
            console.log(JSON.stringify(card) + " chosen card");
            console.log(JSON.stringify(chosenCards) + " chosen cards");
            return card;
        }
        return;
    }

    return (
        <section className="tarot">
            <div className="tarot__screen-bg">
                <Medallion3/>
                <Medallion4/>
            </div>
            <div className="container">
                <h2 className="tarot__title title title--secondary">Unveil Your Destiny, Card by Card</h2>
                <div className="tarot__cards-container">
                    <div
                        className="tarot__card-wrap"
                        onClick={() => {
                            if (chosenCards.length === 0) pickRandomCards();
                        }}
                    >
                        <Image
                            src="/decor-img/Card-left.webp"
                            alt="Tarot Card"
                            width={315}
                            height={449}
                        />
                        <span>{chosenCards[0]?.name ?? "" }</span>
                    </div>
                    <div
                        className="tarot__card-wrap"
                        onClick={() => {
                            if (chosenCards.length === 1) pickRandomCards();
                        }}
                    >
                        <Image
                            src="/decor-img/Card-middle.webp"
                            alt="Tarot Card"
                            width={315}
                            height={449}
                        />
                        <span>{chosenCards[1]?.name ?? ""}</span>
                    </div>
                    <div
                        className="tarot__card-wrap"
                        onClick={() => {
                            if (chosenCards.length === 2) pickRandomCards();
                        }}
                    >
                        <Image
                            src="/decor-img/Card-right.webp"
                            alt="Tarot Card"
                            width={315}
                            height={449}
                        />
                        <span>{chosenCards[2]?.name ?? ""}</span>
                    </div>
                </div>
                {isPredictionReady && (
                    <div className="tarot__info-block">
                        <div className="tarot__result">
                            <h3 className="title title--third tarot__result-title">The Cards Have Spoken</h3>
                            <p className="tarot__result-text">
                                This card refers to an old Zen parable about how a sheep
                                raised a lion cub and he thought he was a sheep until the
                                old lion grabbed him and took him to a pond where he showed
                                him his reflection. Many of us are like this lion—our self-image
                                is formed not from our direct experience, but from the opinions
                                of others.
                            </p>
                        </div>
                        <button className="btn btn-try-again border-dashed">
                            Revoke and Retry
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
