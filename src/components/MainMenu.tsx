type MainMenuProps = {
    onScrollToLogin: () => void;
};

export default function MainMenu({ onScrollToLogin }: MainMenuProps) {
    return (
        <nav className="main-menu">
            <ul className="main-menu__list">
                <li className="main-menu__item">
                    <button
                        className="btn main-menu__link"
                        onClick={onScrollToLogin}
                    >
                        Join the Circle of the Chosen
                    </button>
                </li>
            </ul>
        </nav>
    );
};
