'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
    label: string;
    href: string;
};

type Props = {
    navLinks: NavLink[];
}

export default function Navigation ({navLinks} : Props) {
    const pathname = usePathname();
return(
    <>
        {navLinks.map(link => {
            const isActive = pathname === link.href;

            return(
                <Link className = "itemHeader" key = {link.label} href = {link.href} style={{ color: isActive ? "white" : "" }}>{link.label}</Link>
            )
        })}
    </>
)
}

