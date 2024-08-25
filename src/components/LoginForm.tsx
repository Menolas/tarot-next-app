export default function LoginForm() {
    return (
        <div className="border-dashed">
            <form className="form form--login">
                <div className="form__input-block">
                    <label htmlFor="email" className="form__label">
                        Pledge Your Soul (Or Just Your Email)
                    </label>
                    <input type="email" id="email" className="form__input"/>
                </div>
                <div className="form__input-block">
                    <label htmlFor="password" className="form__label">Enchanted Phrase</label>
                    <div className="form__input-wrap form__input-wrap--password">
                        <button className="btn btn-show-password"></button>
                        <input type="password" id="password" className="form__input"/>
                    </div>

                </div>
                <div className="form__input-block">
                    <button className="btn form__btn">Complete the Ritual</button>
                    <a>Lost your password?</a>
                </div>
            </form>
        </div>
    );
}
