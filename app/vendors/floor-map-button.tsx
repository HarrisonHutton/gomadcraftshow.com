import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";

export function FloorMapButton({ location }: { location: string }) {
    /* Remove any whitespace in the location. */
    const parsedLoc = location.toLowerCase().replace(" ", "-");
    const mapFile = `/floor-maps/${parsedLoc}.pdf`;

    return (
        <Button asChild variant="outline" size="sm">
            <a href={mapFile} target="_blank">
                <Map className="mr-2 h-4 w-4" />
                See floor map
            </a>
        </Button>
    );
}
