import Link from "next/link";
import Navigation from "./Navigation";

const navItems = [
        {label: "Home", href: "/"},
        {label: "Blog", href: "/blog"},
        {label: "About", href: "/about"}
];

const Header = () => {
return(
    <header className="containerHeader">
        <div className="itemsHeader">
        <Navigation navLinks = {navItems} />
        </div>
    </header>
)
};

export default Header;