import Logo from "@/components/Logo";
import MainMenu from "@/components/MainMenu";

export const Header = () => {
    return (
        <header className="main-header container">
            <Logo />
            <MainMenu />
        </header>
    );
};
