import { SelectVendor, vendorsTable } from "@/db/schema";
import { db } from "@/db/connection";
import { MapPin, User } from "lucide-react";
import { FloorMapButton } from "./floor-map-button";
import "./styles.css";

// Server component that fetches vendors and renders them
export default async function Page() {
    return (
        <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h1 className="mb-8 text-3xl font-semibold lg:text-7xl">
                Find the 2024 Vendors!
            </h1>
        </div>
    );
}
