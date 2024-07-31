"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const navbarLinks = [
        { name: "Home", path: "/" },
        // { name: "Find Vendors", path: "/find-vendors" },
        { name: "Contact", path: "/contact" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white">
            <ul className="mx-auto flex items-center justify-between px-2 text-lg md:px-4">
                {/* LOGO */}
                <div className="ml-4 md:ml-0">
                    <li className="align-center flex justify-center rounded-lg md:p-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/images/Olympia.png"
                                alt="Olympia Logo"
                                width={35}
                                height={35}
                            />
                            <span className="font-bold">GOMAD</span>
                        </Link>
                    </li>
                </div>

                {/* Nav links */}
                <div className="hidden gap-2 md:flex">
                    {navbarLinks.map((link) => (
                        <li
                            key={link.name}
                            className="flex items-center justify-center rounded-lg p-4"
                        >
                            <Link
                                href={link.path}
                                className="transition-all hover:underline"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </div>

                {/* Register CTA */}
                <div className="hidden items-center p-4 md:flex">
                    <Button>
                        <Link href="/register" className="flex items-center">
                            <span>Register</span>
                            <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>

                {/* Mobile menu */}
                <div className="flex p-4 md:hidden">
                    <button
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                            console.log("menuOpen: ", menuOpen);
                        }}
                    >
                        <Menu />
                    </button>
                </div>
            </ul>
        </nav>
    );
}
