import Medallion3 from "@/assets/svg/medallion3.svg";
import Medallion4 from "@/assets/svg/medallion4.svg";
import {forwardRef, useEffect, useState} from "react";
import AnimatedCard from "@/components/AnimatedCard";
import {useAppContext} from "@/AppProvider";
import {pickRandomCards} from "@/utils";

export const Tarot = forwardRef<HTMLDivElement>((props, ref) => {
    const { state, setState } = useAppContext();
    const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);

    const chosenCards = state.chosenCards;
    let cards = [];
    for (let i = 0; i < 3; i++) {
        const card = <AnimatedCard
            key={i}
            width={280}
            height={447}
            frontUrl="/decor-img/Card-middle.webp"
            backUrl={chosenCards[i] ? chosenCards[i].image : "/decor-img/Card-middle.webp"}
            animation="CardFlipAnimation 2s forwards"
            onClickAction={() => handleCardFlip(i)}
        />
        cards.push(card);
    }


    const handleClick = () => {
        const chosenCards = pickRandomCards({ cards: state.tarots, count: 3 });
        setState(prevState => ({
            ...prevState,
            chosenCards,
        }));
        setFlippedCards([false, false, false]);
    };

    const handleCardFlip = (index: number) => {
        if (chosenCards.length > 0) {
            const newFlippedCards = [...flippedCards];
            newFlippedCards[index] = true;
            setFlippedCards(newFlippedCards);
        }
    };

    useEffect(() => {

        if (flippedCards.every(card => card)) {
            setTimeout(() => {
                setState({
                    ...state,
                    isPredictionReady: true,
                });
            }, 2000)
        }
    }, [flippedCards]);

    return (
        <section className="tarot" ref={ref}>
            <div className="tarot__screen-bg">
                <Medallion3/>
                <Medallion4/>
            </div>
            <div className="container">

                <div className="tarot__cards-container">
                    { cards}
                </div>
                {state.chosenCards.length > 0 && !state.isPredictionReady && (
                    <h2 className="tarot__title title">Unveil Your Destiny, Card by Card...</h2>
                )}
                <div className={state.isPredictionReady ? "tarot__info-block" : "tarot__info-block blur"}>
                    <div className="tarot__result">
                        <h3 className="title title--third tarot__result-title">
                            {state.response ? 'The Cards Have Spoken' : "The cards are still silent..."}
                        </h3>
                        {state.response && <p className="tarot__result-text">{state.response}</p>}
                    </div>
                    <button
                        className="btn btn-try-again border-dashed"
                        onClick={handleClick}
                        disabled={state.isResponseLoading}
                    >
                        Revoke and Retry
                    </button>
                </div>
            </div>
        </section>
    );
});

Tarot.displayName = "Tarot";
