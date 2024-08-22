import Link from "next/link";

export default function MainMenu() {
    return (
        <nav className="main-menu">
            <ul className="main-menu__list">
                <li className="main-menu__item">
                    <Link className="main-menu__link" href="/">Home</Link>
                </li>
                <li className="main-menu__item">
                    <Link className="main-menu__link" href="/services">Services</Link>
                </li>
                <li className="main-menu__item">
                    <Link className="main-menu__link" href="/contacts">Contacts</Link>
                </li>
            </ul>
        </nav>
    );
};
