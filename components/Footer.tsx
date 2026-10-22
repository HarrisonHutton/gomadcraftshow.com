import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Find Vendors", path: "/vendors" },
    { name: "Register", path: "/register" },
    { name: "Contact us", path: "/contact" },
];

export function Footer() {
    return (
        <footer className="relative overflow-hidden bg-primary text-primary-foreground">
            {/* Gold glow */}
            <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8">
                <div className="flex flex-col justify-between gap-10 md:flex-row">
                    <div className="max-w-sm">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/images/Olympia.png"
                                alt="Olympia Logo"
                                width={44}
                                height={44}
                            />
                            <span className="font-display text-3xl font-semibold">
                                GOMAD
                            </span>
                        </div>
                        <p className="mt-4 text-primary-foreground/70">
                            Greece Olympia Music and Drama&apos;s Annual Craft
                            Show. 1139 Maiden Lane, Greece, NY 14615.
                        </p>
                    </div>

                    <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-primary-foreground/80">
                        {footerLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    className="transition-colors hover:text-accent"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-14 flex flex-col justify-between gap-2 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row">
                    <span>&copy; 2026. GOMAD. All rights reserved.</span>
                    <Link
                        href="mailto:gomadcraftshow@gmail.com"
                        className="transition-colors hover:text-accent"
                    >
                        gomadcraftshow@gmail.com
                    </Link>
                </div>
            </div>
        </footer>
    );
}
