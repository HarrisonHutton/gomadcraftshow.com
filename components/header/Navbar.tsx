"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

import styles from "./header.module.scss";

export function Navbar() {
    const pathname = usePathname();

    const navbarLinks = [
        { name: "Home", path: "/" },
        { name: "Find Vendors", path: "/vendors" },
        { name: "Contact", path: "/contact" },
    ];

    const [menuOpen, setMenuOpen] = useState(false);
    /* To prevent scrolling when the navbar is open, conditionally
     * apply the .noScroll class to the body element. */
    const toggleNavbar = useCallback(() => {
        setMenuOpen((prev) => {
            const newValue = !prev;
            document.body.classList.toggle(styles.noScroll, newValue);
            return newValue;
        });
    }, []);

    useEffect(() => {
        if (menuOpen) {
            toggleNavbar();
        }
    }, [pathname, menuOpen, toggleNavbar]);

    return (
        <>
            <nav className="bg-white">
                <ul className="mx-auto flex items-center justify-between px-2 text-lg md:px-4">
                    {/* LOGO */}
                    <div className="z-50">
                        <li className="align-center flex justify-center rounded-lg md:p-4">
                            <Link href="/" className="flex items-center gap-2">
                                <Image
                                    src="/images/Olympia.png"
                                    alt="Olympia Logo"
                                    width={35}
                                    height={35}
                                />
                                <span className="text-2xl font-bold">
                                    GOMAD
                                </span>
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
                        <Link href="/register">
                            <Button className="flex items-center">
                                <span>Register</span>
                                <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu */}
                    <div className="z-50 flex md:hidden">
                        <button
                            className="h-[50px] w-[50px] p-2"
                            onClick={toggleNavbar}
                        >
                            <div
                                className={`w-full transition-all ${styles.burger} ${menuOpen ? styles.burgerActive : ""}`}
                            ></div>
                        </button>
                    </div>
                </ul>
            </nav>

            {menuOpen && (
                <div className="absolute left-0 right-0 top-[50px] z-40 h-[calc(100dvh-50px)] bg-white">
                    <ul className="flex h-full flex-col">
                        {navbarLinks.map((link) => (
                            <li
                                key={link.name}
                                className="flex items-center justify-center rounded-lg"
                            >
                                <Link
                                    href={link.path}
                                    className="p-6 text-3xl transition-all hover:underline"
                                    onClick={() => {
                                        if (pathname === link.path) {
                                            toggleNavbar();
                                        }
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="flex w-full items-center p-4">
                            <Link
                                href="/register"
                                className="w-full"
                                onClick={() => {
                                    if (pathname === "/register") {
                                        toggleNavbar();
                                    }
                                }}
                            >
                                <Button className="flex w-full items-center p-6 text-3xl font-normal">
                                    <span>Register</span>
                                    <ArrowUpRight className="ml-2 h-8 w-8" />
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
