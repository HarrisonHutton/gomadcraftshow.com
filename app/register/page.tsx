import { ArrowUpRight, FileText, Map, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";

const boothRates = [
    {
        location: "Small Cafe",
        map: "/floor-maps/small-cafe.pdf",
        spaces: [{ name: "Regular Space", price: 45, details: ["7ft x 8ft"] }],
    },
    {
        location: "Large Cafe",
        map: "/floor-maps/large-cafe.pdf",
        spaces: [
            { name: "Regular Space", price: 60, details: ["6ft x 8ft"] },
            { name: "Corner Space", price: 70, details: ["2 display sides"] },
        ],
    },
    {
        location: "Gym",
        map: "/floor-maps/gym.pdf",
        spaces: [
            { name: "Regular Space", price: 65, details: ["6ft x 10ft"] },
            {
                name: "Endcap Space",
                price: 75,
                details: ["6ft x 12ft", "3 display sides"],
            },
            {
                name: "Corner Space",
                price: 90,
                details: ["15ft x 6ft + 6ft x 6ft", "2 display sides"],
            },
        ],
    },
];

export default function Register() {
    return (
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 md:px-8 md:pt-24 md:pb-24">
            {/* Header */}
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
                <div>
                    <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        Vendors
                    </p>
                    <h1 className="mt-3 font-display text-[3.5rem] font-medium tracking-tight sm:text-6xl md:text-8xl">
                        Register
                    </h1>
                    <p className="mt-6 max-w-xl text-xl text-muted-foreground">
                        Register to be a vendor at our Annual Craft Show! Fill
                        out the 2026 application here.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Button asChild size="lg">
                            <a
                                href="/applications/2026_craft_show_application.pdf"
                                target="_blank"
                            >
                                <FileText className="mr-2 h-5 w-5" />
                                2026 Application
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <a
                                href="/applications/2026_rules_and_regs.pdf"
                                target="_blank"
                            >
                                <ScrollText className="mr-2 h-5 w-5" />
                                Rules and Regulations
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Availability notice */}
                <div className="relative overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-8">
                    <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
                    <span className="relative inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-accent-foreground" />
                        Waitlist open
                    </span>
                    <p className="relative mt-4 font-display text-3xl font-medium">
                        The show is full! 🎉
                    </p>
                    <p className="relative mt-2 text-primary-foreground/75">
                        Thank you to everyone who applied! You may still send
                        in your application to be placed on our waitlist.
                    </p>
                </div>
            </div>

            {/* Booth rates */}
            <section className="mt-16 md:mt-24">
                <h2 className="font-display text-4xl font-medium tracking-tight md:text-6xl">
                    2026 Booth Rates
                </h2>
                <div className="mt-8 grid gap-5 md:mt-10 lg:grid-cols-3">
                    {boothRates.map((room) => (
                        <div
                            key={room.location}
                            className="flex flex-col rounded-3xl border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
                        >
                            <div className="flex items-baseline justify-between gap-4">
                                <h3 className="font-display text-3xl font-medium">
                                    {room.location}
                                </h3>
                                <span className="text-sm text-muted-foreground">
                                    from{" "}
                                    <span className="text-lg font-semibold text-foreground">
                                        ${room.spaces[0].price}
                                    </span>
                                </span>
                            </div>

                            <ul className="mt-6 grow divide-y border-t">
                                {room.spaces.map((space) => (
                                    <li key={space.name} className="py-4">
                                        <div className="flex justify-between text-lg">
                                            <span>{space.name}</span>
                                            <span className="font-semibold tabular-nums">
                                                ${space.price.toFixed(2)}
                                            </span>
                                        </div>
                                        {space.details.map((detail) => (
                                            <p
                                                key={detail}
                                                className="text-sm text-muted-foreground"
                                            >
                                                {detail}
                                            </p>
                                        ))}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                asChild
                                variant="outline"
                                className="mt-6 w-full"
                            >
                                <a href={room.map} target="_blank">
                                    <Map className="mr-2 h-4 w-4" />
                                    {room.location} Map
                                    <ArrowUpRight className="ml-1 h-4 w-4" />
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
