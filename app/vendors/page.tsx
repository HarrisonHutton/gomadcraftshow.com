import { Megaphone } from "lucide-react";
import { Vendors } from "./vendors";

export const dynamic = "force-dynamic";

// Server component that fetches vendors and renders them
export default async function Page() {
    return (
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:px-8 md:pb-24 md:pt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Find vendors
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-[2.75rem] font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                Here are our vendors from 2025!
            </h1>
            <div className="mt-8 flex items-start gap-4 sm:items-center rounded-2xl border border-accent/50 bg-accent/15 p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Megaphone className="h-5 w-5" />
                </div>
                <div>
                    <p className="font-semibold">2026 vendors coming soon!</p>
                    <p className="mt-1 text-muted-foreground">
                        We&apos;ll update this page with our 2026 vendor list
                        as we get closer to the show. In the meantime, browse
                        last year&apos;s vendors below.
                    </p>
                </div>
            </div>
            <Vendors />
        </div>
    );
}
