import { SelectVendor, vendorsTable } from "@/db/schema";
import { db } from "@/db/connection";
import { MapPin, User } from "lucide-react";
import { FloorMapButton } from "./floor-map-button";
import "./styles.css";

// Function to fetch vendors
// const getVendors = async () => {
//     return db.select().from(vendorsTable);
// };

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

// Server component that fetches vendors and renders them
export default async function Vendors() {
    // Fetch vendors directly here in the server component
    // const vendors: SelectVendor[] = await getVendors();
    const vendors: SelectVendor[] = [];

    let locationsToVendors: { [key: string]: SelectVendor[] } = {};
    vendors.forEach((vendor) => {
        const location = getLocation(vendor.location);
        if (!locationsToVendors[location]) {
            locationsToVendors[location] = [];
        }
        locationsToVendors[location].push(vendor);
    });

    return (
        <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h1 className="mb-8 text-3xl font-semibold lg:text-7xl">
                Find the 2024 Vendors!
            </h1>
            <div className="mx-auto mb-8 h-[600px] w-full max-w-5xl overflow-y-auto">
                {Object.keys(locationsToVendors)
                    .reverse()
                    .map((location) => (
                        <div key={location}>
                            <div className="sticky-header w-full bg-white">
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-8 w-8" />
                                        <span className="text-3xl font-extrabold">
                                            {location}
                                        </span>
                                    </div>
                                    <div className="p-1">
                                        <FloorMapButton location={location} />
                                    </div>
                                </div>
                                <div className="my-4 h-[1px] w-full bg-gray-300" />
                            </div>

                            <ul>
                                {/* List the vendors here */}
                                {locationsToVendors[location].map((vendor) => (
                                    <li
                                        className="my-4 flex flex-col"
                                        key={vendor.id}
                                    >
                                        {vendor.vendor_name ? (
                                            <span className="text-3xl font-semibold">
                                                {vendor.vendor_name}
                                            </span>
                                        ) : (
                                            <span className="text-3xl font-semibold">
                                                {vendor.first_name}{" "}
                                                {vendor.last_name}
                                            </span>
                                        )}
                                        <div className="mt-1 flex items-center gap-2">
                                            <User className="h-5 w-5" />
                                            <span className="m-0">
                                                {vendor.first_name}{" "}
                                                {vendor.last_name}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-5 w-5" />
                                            <span className="m-0">
                                                {vendor.location}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    );
}
