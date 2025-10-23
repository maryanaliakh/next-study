import Link from "next/link";

const Header = () => {
return(
    <header className="containerHeader">
        <div className="itemsHeader">
        <Link className="itemHeader" href="/">Home</Link>
        <Link className="itemHeader" href="/blog">Blog</Link>
        <Link className="itemHeader" href="/about">About</Link>
        </div>
    </header>
)
};

export default Header;