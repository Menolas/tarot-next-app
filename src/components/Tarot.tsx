export default function Tarot() {
    return (
        <section className="tarot">
            <div className="container">
                <h2 className="tarot__title title title--secondary">Unveil Your Destiny, Card by Card</h2>
                <div className="tarot__cards-container">
                    <div className="tarot__card-wrap">
                        <img src="../img/Card-left.png" alt="Tarot Card"/>
                    </div>
                    <div className="tarot__card-wrap">
                        <img src="../img/Card-middle.png" alt="Tarot Card"/>
                    </div>
                    <div className="tarot__card-wrap">
                        <img src="../img/Card-right.png" alt="Tarot Card"/>
                    </div>
                </div>
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
                    <button className="btn btn-try-again">
                        Revoke and Retry
                    </button>
                </div>
            </div>
        </section>
    );
};
