import { Vendors } from "./vendors";

export const dynamic = "force-dynamic";

// Server component that fetches vendors and renders them
export default async function Page() {
    return (
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 md:px-8 md:pt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Find vendors
            </p>
            <h1 className="mt-3 max-w-4xl font-display text-5xl font-medium tracking-tight md:text-7xl">
                Here are our vendors from 2025!
            </h1>
            <Vendors />
        </div>
    );
}
