"use client";

import { Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./card.css";

export default function Register() {
    const openSmallCafeMap = () => {
        const smallCafeMapFile = "/floor-maps/small-cafe.pdf";
        window.open(smallCafeMapFile, "_blank");
    };

    const openLargeCafeMap = () => {
        const largeCafeMapFile = "/floor-maps/large-cafe.pdf";
        window.open(largeCafeMapFile, "_blank");
    };

    const openGymMap = () => {
        const gymMapFile = "/floor-maps/gym.pdf";
        window.open(gymMapFile, "_blank");
    };

    return (
        <div className="px-4 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div>
                    <h1 className="text-7xl font-semibold">Register</h1>
                    <p className="mt-4 text-xl">
                        Register to be a vendor at our Annual Craft Show!
                    </p>
                    <div className="mt-8 rounded-lg border border-green-700 bg-green-100 p-4">
                        <p className="text-green-900">
                            At this point, the only remaining spaces are{" "}
                            <strong>S-04</strong> and <strong>S-09</strong> in
                            the Small Cafe.
                        </p>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-center text-5xl font-semibold">
                        2024 Booth Rates
                    </h2>
                    <div className="flex justify-center">
                        <div className="my-10 flex flex-col gap-10 text-xl lg:flex-row">
                            <div className="card">
                                <h3 className="text-center text-3xl font-semibold">
                                    Small Cafe
                                </h3>
                                <span className="-mt-3 h-[1px] w-full bg-gradient-to-r from-transparent via-black to-transparent"></span>
                                <div className="flex h-full flex-col justify-between">
                                    <div className="w-full">
                                        <div className="flex w-full flex-col gap-5">
                                            <div className="flex justify-between">
                                                <span>Regular Space</span>
                                                <span className="font-semibold">
                                                    $40.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <Button onClick={openSmallCafeMap}>
                                        <div className="flex items-center gap-2">
                                            <Map />
                                            <span>Small Cafe Map</span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="text-center text-3xl font-semibold">
                                    Large Cafe
                                </h3>
                                <span className="-mt-3 h-[1px] w-full bg-gradient-to-r from-transparent via-black to-transparent"></span>
                                <div className="flex h-full flex-col justify-between">
                                    <div className="w-full">
                                        <div className="flex w-full flex-col gap-5">
                                            <div className="flex justify-between">
                                                <span>Regular Space</span>
                                                <span className="font-semibold">
                                                    $55.00
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Corner Space</span>
                                                <span className="font-semibold">
                                                    $65.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <Button onClick={openLargeCafeMap}>
                                        <div className="flex items-center gap-2">
                                            <Map />
                                            <span>Large Cafe Map</span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div className="card">
                                <h3 className="text-center text-3xl font-semibold">
                                    Gym
                                </h3>
                                <span className="-mt-3 h-[1px] w-full bg-gradient-to-r from-transparent via-black to-transparent"></span>
                                <div className="flex h-full flex-col justify-between">
                                    <div className="w-full">
                                        <div className="flex w-full flex-col gap-5">
                                            <div className="flex justify-between">
                                                <span>Regular Space</span>
                                                <span className="font-semibold">
                                                    $60.00
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Endcap Space</span>
                                                <span className="font-semibold">
                                                    $70.00
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Corner Space</span>
                                                <span className="font-semibold">
                                                    $85.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <Button onClick={openGymMap}>
                                        <div className="flex items-center gap-2">
                                            <Map />
                                            <span>Gym Map</span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
