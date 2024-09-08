import Logo from "@/components/Logo";
import MainMenu from "@/components/MainMenu";

type HeaderProps = {
    onScrollToLogin: () => void;
};

export const Header = ({onScrollToLogin}: HeaderProps) => {
    return (
        <header className="main-header container">
            <Logo />
            <MainMenu onScrollToLogin={onScrollToLogin} />
        </header>
    );
};
