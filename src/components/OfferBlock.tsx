import Hand from "../assests/svg/hand.svg";

export default function OfferBlock() {
    return (
        <section className="offer-block">
            <h1 className="offer-block__title title title--primary">
                <span>Discover</span>
                <span>Your</span>
                <span>Fate</span>
            </h1>
            <div className="offer-block__screen offer-block__screen--moon">
                <div className="moon"></div>
            </div>

            <div className="offer-block__screen offer-block__screen--cards">
                {/*<div className="clouds"></div>*/}
                <div className="inner-wrap">
                    <button className="btn offer-block__btn offer-block__btn--left">
                        Embrace <br />the Unknown
                    </button>
                    <div className="center">
                        <div className="card"></div>
                        <div className="hand"><Hand /></div>
                    </div>
                    <button className="btn offer-block__btn offer-block__btn--right">
                        Join the Circle <br /> of the Chosen
                    </button>
                </div>
            </div>
        </section>
    );
};
