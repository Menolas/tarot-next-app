import Medallion3 from "@/assets/svg/medallion3.svg";
import Medallion4 from "@/assets/svg/medallion4.svg";
import {forwardRef, useEffect, useState} from "react";
import AnimatedCard from "@/components/AnimatedCard";
import {useAppContext} from "@/AppProvider";
import {pickRandomCards} from "@/utils";
import {ChatGPTComponent} from "@/components/ChatGPTComponent";


export const Tarot = forwardRef<HTMLDivElement>((props, ref) => {
    const { state, setState } = useAppContext();
    const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);
    const [isPredictionReady, setIsPredictionReady] = useState(false);
    const [resetFlipped, setResetFlipped] = useState(false);

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
            resetFlipped={resetFlipped}
            onClickAction={() => handleCardFlip(i)}
        />
        cards.push(card);
    }


    const handleClick = () => {
        const chosenCards = pickRandomCards({ cards: state.tarots, count: 3 });
        setState({
            ...state,
            chosenCards,
        });
        setFlippedCards([false, false, false]);
        setIsPredictionReady(false);
        setResetFlipped(true);
    };

    const handleCardFlip = (index: number) => {
        const newFlippedCards = [...flippedCards];
        newFlippedCards[index] = true;
        setFlippedCards(newFlippedCards);
    };

    useEffect(() => {
        if (resetFlipped) {
            setResetFlipped(false);
        }
    }, [resetFlipped]);

    useEffect(() => {

        if (flippedCards.every(card => card)) {
            setTimeout(() => {
                setIsPredictionReady(true);
            }, 3000)
        }
    }, [flippedCards]);

    return (
        <section className="tarot" ref={ref}>
            <div className="tarot__screen-bg">
                <Medallion3/>
                <Medallion4/>
            </div>
            <div className="container">
                <h2 className="tarot__title title">Unveil Your Destiny, Card by Card...</h2>
                <div className="tarot__cards-container">
                    { cards}
                </div>
                <ChatGPTComponent />
                <div className={isPredictionReady ? "tarot__info-block" : "tarot__info-block blur"}>
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
                    <button
                        className="btn btn-try-again border-dashed"
                        onClick={handleClick}
                    >
                        Revoke and Retry
                    </button>
                </div>
            </div>
        </section>
    );
});

Tarot.displayName = "Tarot";
