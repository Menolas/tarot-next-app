"use client";

import Hand from "../assets/svg/hand.svg";
import Medallion1 from "../assets/svg/medallion1.svg";
import Medallion2 from "../assets/svg/medallion2.svg";
import {SmokeAnimation} from "@/components/SmokeAnimation";
import {useEffect, useState} from "react";
import AnimatedCard from "@/components/AnimatedCard";
import {pickRandomCards} from "@/utils";
import {useAppContext} from "@/AppProvider";

type OfferBlockProps = {
    onScrollToTarot: () => void;
    onScrollToLogin: () => void;
};

export const OfferBlock = ({
   onScrollToTarot,
   onScrollToLogin
}: OfferBlockProps) => {
    const { state, setState } = useAppContext();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isDeckShaking, setIsDeckShaking] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

    }, []);

    const handleClick = () => {
        const chosenCards = pickRandomCards({ cards: state.tarots, count: 3 });
        setState(prevState => ({
            ...prevState,
            chosenCards,
        }));
        setIsDeckShaking(true);
        setTimeout(() => {
            onScrollToTarot();
            setIsDeckShaking(false);
        }, 2000);

    };

    return (
        <section className={`offer-block ${isLoaded ? "loaded" : ""}`}>
            {!isLoaded
                ? <div>Loading...</div>
                : (
                    <>
                        <SmokeAnimation/>
                        <h1 className="offer-block__title title title--primary">
                            <span>Discover</span>
                            <span>Your</span>
                            <span>Fate</span>
                        </h1>
                        <div className="offer-block__screen offer-block__screen--moon">
                            <div className="moon"></div>
                        </div>
                        <div className="offer-block__screen offer-block__screen--cards">
                            <div className="offer-block__screen-bg">
                                <Medallion1 />
                                <Medallion2 />
                            </div>
                            <div className="inner-wrap">
                                <button
                                    className="btn offer-block__btn offer-block__btn--left"
                                    onClick={() => {
                                        handleClick();
                                    }}
                                    disabled={state.isResponseLoading}
                                >
                                    Shake the Deck
                                </button>
                                <div
                                    className="center"
                                    onClick={() => {
                                        handleClick();
                                    }}
                                >
                                    <AnimatedCard
                                        frontUrl="/decor-img/card.webp"
                                        backUrl="/decor-img/card1.webp"
                                        isDeckShaking={isDeckShaking}
                                        animation="cardTwistAnimation 3s infinite"
                                    />
                                    <div className="hand"><Hand/></div>
                                </div>
                                <button
                                    className="btn offer-block__btn offer-block__btn--right"
                                    onClick={onScrollToLogin}
                                >
                                    Join the Circle <br/> of the Chosen
                                </button>
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    );
};
