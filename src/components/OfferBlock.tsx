"use client";

import Image from 'next/image';
import Hand from "../assets/svg/hand.svg";
import Medallion1 from "../assets/svg/medallion1.svg";
import Medallion2 from "../assets/svg/medallion2.svg";
import {SmokeAnimation} from "@/components/SmokeAnimation";
import {useEffect, useState} from "react";

export default function OfferBlock() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

    }, []);
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
                                <button className="btn offer-block__btn offer-block__btn--left">
                                    Embrace <br/>the Unknown
                                </button>
                                <div className="center">
                                    <div className="card-container">
                                        <div className="card">
                                            <div className="card__front">
                                                <Image
                                                    src="/decor-img/card.png"
                                                    alt="Tarot Card"
                                                    width={365}
                                                    height={450}
                                                />
                                            </div>
                                            <div className="card__back">
                                                <Image
                                                    src="/decor-img/card1.png"
                                                    alt="Tarot Card"
                                                    width={365}
                                                    height={450}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hand"><Hand/></div>
                                </div>
                                <button className="btn offer-block__btn offer-block__btn--right">
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
