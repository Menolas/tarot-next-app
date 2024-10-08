import Image from "next/image";
import React, {useEffect, useState} from "react";
import {useAppContext} from "@/AppProvider";

type PropsType = {
    width?: number;
    height?: number;
    frontUrl: string;
    backUrl: string;
    animation: string;
    isDeckShaking?: boolean;
    onClickAction?: () => void;
};

export default function AnimatedCard({
 width = 365,
 height = 450,
 frontUrl,
 backUrl,
 animation,
 isDeckShaking,
 onClickAction,
}: PropsType) {
    const { state, setState } = useAppContext();
    const [isAnimating, setIsAnimating] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        console.log(state.resetFlipped + " resetFlipped");
        console.log(isFlipped + " isFlipped");
        if (state.resetFlipped) {
            setIsFlipped(false);
            setState(prevState => ({
                ...prevState,
                resetFlipped: false, // Reset the flag after flipping the cards
            }));
        }
    }, [state.resetFlipped]);

    const handleClick = () => {
        setIsAnimating(true);
        if (onClickAction) {
            onClickAction();
        }

        setTimeout(() => {
            setIsAnimating(false);
            setIsFlipped(!isFlipped);

        }, 2000);
    };

    const animationStyle: React.CSSProperties = {
        animation: isAnimating || isDeckShaking ? animation : "none",
    };

    const style: React.CSSProperties = {
        width,
        height,
    };

    return (
        <div
            className={isFlipped ? "animated-card flipped" : "animated-card"}
            style={style}
            onClick={() => {
                if (!isFlipped) handleClick();
            }}
        >
            <div className="animated-card__wrap" style={animationStyle}>
                <div className="animated-card__front">
                    <Image
                        src={frontUrl}
                        alt="Tarot Card"
                        width={width}
                        height={height}
                    />
                </div>
                <div className="animated-card__back">
                    <Image
                        src={backUrl}
                        alt="Tarot Card"
                        width={width}
                        height={height}
                    />
                </div>
            </div>
        </div>
    );
}
