"use client";

import { Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./card.css";

export default function Register() {
    const openFile = (filename: string) => {
        window.open(filename, "_blank");
    };

    const openSmallCafeMap = () => {
        openFile("/floor-maps/small-cafe.pdf");
    };

    const openLargeCafeMap = () => {
        openFile("/floor-maps/large-cafe.pdf");
    };

    const openGymMap = () => {
        openFile("/floor-maps/gym.pdf");
    };

    const openApplication = () => {
        openFile("/applications/2025_craft_show_application.pdf");
    };

    const openFees = () => {
        openFile("/applications/2024_craft_show_fees.pdf");
    };

    return (
        <div className="">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div>
                    <h1 className="text-7xl font-semibold">Register</h1>
                    <p className="mt-4 text-xl">
                        Register to be a vendor at our Annual Craft Show!
                    </p>

                    <div className="mt-8 rounded-lg border border-green-700 bg-green-100 p-4 text-green-900">
                        <span className="text-xl font-semibold">
                            One last spot available in the 2025 show! 🎉
                        </span>
                        <p>
                            We have one spot remaining in the small cafe this
                            year. Fill out the application now if you want it!
                        </p>
                        <p className="mt-2">
                            Note that sending in your application does not
                            guarantee you the spot, but you may be placed on our
                            waitlist.
                        </p>
                    </div>

                    <div className="mt-6 text-xl">
                        <p>Fill out the 2025 application here!</p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                className="mt-2"
                                onClick={openFees}
                            >
                                <span>Rules and Regulations</span>
                            </Button>
                            <Button
                                size="lg"
                                className="mt-2"
                                onClick={openApplication}
                            >
                                <span>2025 Application</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-center text-5xl font-semibold">
                        2025 Booth Rates
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
                                            <div className="w-full">
                                                <div className="flex justify-between">
                                                    <span>Regular Space</span>
                                                    <span className="font-semibold">
                                                        $40.00
                                                    </span>
                                                </div>
                                                <span className="opacity-50">
                                                    7ft x 8ft
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
                                            <div className="w-full">
                                                <div className="flex justify-between">
                                                    <span>Regular Space</span>
                                                    <span className="font-semibold">
                                                        $55.00
                                                    </span>
                                                </div>
                                                <span className="opacity-50">
                                                    6ft x 8ft
                                                </span>
                                            </div>

                                            <div className="w-full">
                                                <div className="flex justify-between">
                                                    <span>Corner Space</span>
                                                    <span className="font-semibold">
                                                        $65.00
                                                    </span>
                                                </div>
                                                <span className="opacity-50">
                                                    2 display sides
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
                                            <div className="w-full">
                                                <div className="flex justify-between">
                                                    <span>Regular Space</span>
                                                    <span className="font-semibold">
                                                        $60.00
                                                    </span>
                                                </div>
                                                <span className="opacity-50">
                                                    6ft x 10ft
                                                </span>
                                            </div>

                                            <div className="w-full">
                                                <div className="flex justify-between">
                                                    <span>Endcap Space</span>
                                                    <span className="font-semibold">
                                                        $70.00
                                                    </span>
                                                </div>
                                                <div className="flex flex-col opacity-50">
                                                    <span>6ft x 12ft</span>
                                                    <span>3 display sides</span>
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className="flex justify-between">
                                                    <span>Corner Space</span>
                                                    <span className="font-semibold">
                                                        $85.00
                                                    </span>
                                                </div>
                                                <div className="flex flex-col opacity-50">
                                                    <span>
                                                        15ft x 6ft + 6ft x 6ft
                                                    </span>
                                                    <span>2 display sides</span>
                                                </div>
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
