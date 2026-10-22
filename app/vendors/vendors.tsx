import { SelectVendor, vendorsTable } from "@/db/schema";
import { db } from "@/db/connection";
import { MapPin, User } from "lucide-react";
import { FloorMapButton } from "./floor-map-button";

// Function to fetch vendors
const getVendors = async () => {
    return db.select().from(vendorsTable);
};

// Function to determine the location based on the vendor location
const getLocation = (locationString: string) => {
    if (locationString.startsWith("G")) {
        return "Gym";
    } else if (locationString.startsWith("C")) {
        return "Large Cafe";
    } else if (locationString.startsWith("S")) {
        return "Small Cafe";
    }
    return "Unknown";
};

const toAnchor = (location: string) => location.toLowerCase().replace(" ", "-");

export async function Vendors() {
    // Fetch vendors directly here in the server component
    const vendors: SelectVendor[] = await getVendors();

    let locationsToVendors: { [key: string]: SelectVendor[] } = {};
    vendors.forEach((vendor) => {
        const location = getLocation(vendor.location);
        if (!locationsToVendors[location]) {
            locationsToVendors[location] = [];
        }
        locationsToVendors[location].push(vendor);
    });
    const locations = Object.keys(locationsToVendors).reverse();

    return (
        <>
            {/* Jump links */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-muted-foreground">
                    {vendors.length} vendors in
                </span>
                {locations.map((location) => (
                    <a
                        key={location}
                        href={`#${toAnchor(location)}`}
                        className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-secondary"
                    >
                        {location}{" "}
                        <span className="text-muted-foreground">
                            {locationsToVendors[location].length}
                        </span>
                    </a>
                ))}
            </div>

            {locations.map((location) => (
                <section
                    key={location}
                    id={toAnchor(location)}
                    className="mt-16 scroll-mt-20"
                >
                    <div className="sticky top-16 z-10 -mx-4 flex items-center justify-between gap-4 border-b bg-background/85 px-4 py-4 backdrop-blur-xl md:-mx-8 md:px-8">
                        <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                                <MapPin className="h-5 w-5" />
                            </span>
                            <h2 className="font-display text-3xl font-medium">
                                {location}
                            </h2>
                        </div>
                        <FloorMapButton location={location} />
                    </div>

                    <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {locationsToVendors[location].map((vendor) => (
                            <li
                                key={vendor.id}
                                className="flex flex-col justify-between gap-6 rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <span className="text-xl font-semibold leading-snug">
                                    {vendor.vendor_name ||
                                        `${vendor.first_name} ${vendor.last_name}`}
                                </span>
                                <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1.5">
                                        <User className="h-4 w-4" />
                                        {vendor.first_name} {vendor.last_name}
                                    </span>
                                    <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs font-semibold text-foreground">
                                        {vendor.location}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </>
    );
}
