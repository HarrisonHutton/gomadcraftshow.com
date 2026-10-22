"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navbarLinks = [
    { name: "Home", path: "/" },
    { name: "Find Vendors", path: "/vendors" },
    { name: "Contact", path: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    /* Close the mobile menu whenever the route changes. */
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    /* Prevent the page from scrolling behind the open mobile menu. */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
                <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-2.5">
                        <Image
                            src="/images/Olympia.png"
                            alt="Olympia Logo"
                            width={36}
                            height={36}
                            className="transition-transform duration-300 group-hover:-rotate-12"
                        />
                        <span className="font-display text-2xl font-semibold tracking-tight">
                            GOMAD
                        </span>
                    </Link>

                    {/* Nav links */}
                    <ul className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/60 p-1 md:flex">
                        {navbarLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    className={cn(
                                        "block rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                                        pathname === link.path
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                                    )}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Register CTA */}
                    <div className="hidden md:block">
                        <Button asChild variant="gold">
                            <Link href="/register">
                                Register
                                <ArrowUpRight className="ml-1.5 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className="-mr-2 rounded-full p-2 transition-colors hover:bg-secondary md:hidden"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </nav>
            </header>

            {/* Rendered outside the header: its backdrop-blur would otherwise
             * become the containing block for this fixed overlay. */}
            {menuOpen && (
                <div className="fixed inset-x-0 bottom-0 top-16 z-40 bg-background duration-200 animate-in fade-in slide-in-from-top-2 md:hidden">
                    <ul className="flex h-full flex-col gap-2 p-4">
                        {navbarLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={cn(
                                        "block rounded-2xl px-5 py-4 font-display text-3xl transition-colors",
                                        pathname === link.path
                                            ? "bg-secondary"
                                            : "hover:bg-secondary",
                                    )}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="mt-auto">
                            <Button
                                asChild
                                variant="gold"
                                size="lg"
                                className="h-16 w-full text-xl"
                            >
                                <Link
                                    href="/register"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Register
                                    <ArrowUpRight className="ml-2 h-6 w-6" />
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
