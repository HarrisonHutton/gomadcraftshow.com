import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    ArrowUpRight,
    CalendarDays,
    Clock,
    MapPin,
    Sparkles,
    Store,
    Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
    { value: "100+", label: "Local vendors" },
    { value: "3", label: "Shopping halls" },
    { value: "6 hrs", label: "Of shopping" },
];

export default function Home() {
    return (
        <div className="pb-20">
            {/* Hero section */}
            <section className="px-2 pt-2 md:px-4 md:pt-4">
                <div className="relative isolate overflow-hidden rounded-[2rem] bg-primary text-white">
                    <Image
                        src="/images/craft-show-gym.jpeg"
                        alt="Shoppers browsing booths at the craft show"
                        fill
                        priority
                        sizes="100vw"
                        className="-z-20 object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[hsl(155_60%_8%)] via-[hsl(155_60%_10%/0.7)] to-[hsl(155_60%_10%/0.15)]" />

                    <div className="mx-auto flex min-h-[640px] max-w-7xl flex-col justify-between gap-10 px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24 xl:flex-row xl:items-end">
                        {/* Hero text */}
                        <div className="flex max-w-3xl flex-col justify-end duration-700 animate-in fade-in slide-in-from-bottom-6">
                            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                                <span className="sm:hidden">
                                    Sat, Dec 12th, 2026
                                </span>
                                <span className="hidden sm:inline">
                                    Saturday, December 12th, 2026
                                </span>
                                &middot;
                                <span className="whitespace-nowrap">
                                    10 AM - 4 PM
                                </span>
                            </span>
                            <p className="mt-8 text-lg font-medium text-white/80 md:text-xl">
                                Greece Olympia Music and Drama
                            </p>
                            <h1 className="mt-2 font-display text-[3.5rem] font-medium leading-[0.95] tracking-tight sm:text-6xl md:text-8xl">
                                Annual{" "}
                                <span className="italic text-accent">
                                    Craft
                                </span>{" "}
                                Show
                            </h1>
                            <p className="mt-6 max-w-[50ch] text-lg text-white/80 md:text-xl">
                                Western New York&apos;s largest winter craft
                                show, featuring over 100 vendors! Join us for a
                                day of shopping, food, and fun!
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <Button asChild variant="gold" size="lg">
                                    <Link href="/register">
                                        Register to be in the show!
                                        <ArrowUpRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button asChild variant="glass" size="lg">
                                    <Link href="/vendors">
                                        Find vendors
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* News card */}
                        <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl delay-300 duration-700 animate-in fade-in slide-in-from-bottom-6 fill-mode-both">
                            <div className="flex items-center justify-between text-sm text-white/70">
                                <span className="inline-flex items-center gap-1.5 font-semibold text-accent">
                                    <Sparkles className="h-4 w-4" />
                                    News from GOMAD
                                </span>
                                <span>07/07/26</span>
                            </div>
                            <p className="mt-4 font-display text-2xl font-medium sm:text-3xl">
                                Only 5 spots{" "}
                                <span className="whitespace-nowrap">
                                    left! 🎉
                                </span>
                            </p>
                            <p className="mt-2 text-white/80">
                                Head over to our registration page to fill out
                                your application now!
                            </p>
                            <Button
                                asChild
                                className="mt-6 w-full bg-white text-primary hover:bg-white/90"
                            >
                                <Link href="/register">
                                    Register now!
                                    <ArrowUpRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="mx-auto mt-12 max-w-7xl px-4 md:px-8">
                <dl className="grid grid-cols-3 divide-x divide-border rounded-3xl border bg-card py-6 shadow-sm">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col-reverse px-2 text-center sm:px-4"
                        >
                            <dt className="text-balance text-xs leading-tight text-muted-foreground sm:text-sm md:text-base">
                                {stat.label}
                            </dt>
                            <dd className="mb-1 font-display text-3xl font-medium text-primary md:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* Show info */}
            <section className="relative mx-auto mt-16 max-w-7xl px-4 md:mt-24 md:px-8">
                <div className="bg-dots pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Plan your visit
                </p>
                <h2 className="mt-3 max-w-2xl font-display text-[2.75rem] font-medium tracking-tight sm:text-5xl md:text-7xl">
                    Where &amp; when
                </h2>

                <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3">
                    {/* Location */}
                    <div className="group flex flex-col justify-between rounded-3xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8 md:col-span-2 md:row-span-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-5 w-5" />
                            <span>Location</span>
                        </div>
                        <div className="mt-8 md:mt-16">
                            <p className="font-display text-4xl font-medium tracking-tight md:text-6xl">
                                Greece Olympia School
                            </p>
                            <p className="mt-3 text-xl text-muted-foreground md:text-2xl">
                                1139 Maiden Lane, Greece, NY 14615
                            </p>
                            <Button asChild variant="outline" className="mt-8">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=1139+Maiden+Lane+Greece+NY+14615"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Get directions
                                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="rounded-3xl bg-accent p-6 text-accent-foreground shadow-sm sm:p-8">
                        <div className="flex items-center gap-2 opacity-70">
                            <CalendarDays className="h-5 w-5" />
                            <span>Craft Show Date</span>
                        </div>
                        <p className="mt-6 font-display text-4xl font-medium tracking-tight md:mt-10">
                            December 12th, 2026
                        </p>
                    </div>

                    {/* Sale time */}
                    <div className="rounded-3xl border bg-card p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-5 w-5" />
                            <span>Shopping Hours</span>
                        </div>
                        <p className="mt-6 font-display text-4xl font-medium tracking-tight md:mt-10">
                            10 AM - 4 PM
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Open to the public &middot; Saturday, December
                            12th, 2026
                        </p>
                    </div>

                    {/* For the vendors */}
                    <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground shadow-sm sm:p-8 md:col-span-3">
                        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
                        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
                            <div>
                                <div className="flex items-center gap-2 text-primary-foreground/70">
                                    <Store className="h-5 w-5" />
                                    <span>For the vendors</span>
                                </div>
                                <div className="mt-6 flex items-center gap-3">
                                    <Wrench className="h-6 w-6 text-accent" />
                                    <span className="text-primary-foreground/70">
                                        Vendor Setup
                                    </span>
                                </div>
                                <p className="mt-1 font-display text-4xl font-medium tracking-tight md:text-5xl">
                                    7 AM - 9:30 AM
                                </p>
                                <p className="mt-2 text-sm text-primary-foreground/70">
                                    Morning of the show &middot; Saturday,
                                    December 12th, 2026
                                </p>
                            </div>
                            <Button
                                asChild
                                variant="gold"
                                size="lg"
                                className="w-full md:w-auto"
                            >
                                <Link href="/register">
                                    Booth rates &amp; application
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
