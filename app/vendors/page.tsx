import { Vendors } from "./vendors";

export const dynamic = "force-dynamic";

// Server component that fetches vendors and renders them
export default async function Page() {
    return (
        <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h1 className="mb-8 text-3xl font-semibold lg:text-7xl">
                Find the 2025 Vendors!
            </h1>
            <Vendors />
        </div>
    );
}
