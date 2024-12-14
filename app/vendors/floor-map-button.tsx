"use client";

import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";

export function FloorMapButton({ location }: { location: string }) {
    const openMap = () => {
        let parsedLoc = location.toLowerCase();
        /* Remove any whitespace in the location. */
        parsedLoc = parsedLoc.replace(" ", "-");
        let mapFile = `/floor-maps/${parsedLoc}.pdf`;
        window.open(mapFile, "_blank");
    };

    return (
        <Button onClick={openMap}>
            <div className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                <span>See floor map</span>
            </div>
        </Button>
    );
}
