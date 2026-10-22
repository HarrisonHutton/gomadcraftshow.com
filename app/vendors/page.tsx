import { Megaphone } from "lucide-react";
import { Vendors } from "./vendors";

export const revalidate = 3600;

// Server component that fetches vendors and renders them
export default async function Page() {
    return (
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 md:px-8 md:pt-24 md:pb-24">
            <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                Find vendors
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.75rem] leading-[1.05] font-medium tracking-tight sm:text-5xl md:text-7xl">
                Here are our vendors from 2025!
            </h1>
            <div className="mt-8 rounded-2xl border border-accent/50 bg-accent/15 p-4 sm:p-5">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Megaphone className="h-4 w-4" />
                    </div>
                    <p className="font-semibold">2026 vendors coming soon!</p>
                </div>
                <p className="mt-2 text-muted-foreground">
                    We&apos;ll update this page with our 2026 vendor list as we
                    get closer to the show. In the meantime, browse last
                    year&apos;s vendors below.
                </p>
            </div>
            <Vendors />
        </div>
    );
}
