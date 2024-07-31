import { Button } from "@/components/ui/button";
import { ArrowUpRight, CalendarDays, Wrench, Clock, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import "./card.css";

export default function Home() {
    return (
        <div
            className="relative"
            style={{
                backgroundImage: "url(./grid-tile-4.png)",
                backgroundPositionX: "50%",
                backgroundPositionY: "20%",
            }}
        >
            {/* Transparent gradient for the background grid */}
            <div className="absolute top-0 h-20 w-full bg-gradient-to-b from-white to-transparent"></div>

            {/* Hero section */}
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:px-8 xl:flex-row">
                {/* Hero text */}
                <div className="flex h-[500px] flex-col justify-center">
                    <div className="mt-12">
                        <h1 className="text-3xl font-semibold md:text-4xl">
                            Greece Olympia Music and Drama
                        </h1>
                    </div>
                    <div className="mt-2 md:mt-6">
                        <h2 className="text-6xl font-bold md:text-8xl">
                            Annual Craft Show
                        </h2>
                    </div>
                    <div className=" ">
                        <p className="text-3xl font-semibold">
                            December 14th, 2024
                        </p>
                    </div>
                    <div className="mt-4">
                        <p className="max-w-[50ch] text-xl">
                            Western New York&apos;s largest winter craft show,
                            featuring over 100 vendors! Join us for a day of
                            shopping, food, and fun!
                        </p>
                    </div>
                    <div className="mt-4">
                        <Button>
                            <Link
                                href="/register"
                                className="flex items-center"
                            >
                                <span>Register to be in the show!</span>
                                <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* News card */}
                <div className="card mt-8 text-black md:mt-0">
                    <p className="text-3xl font-semibold">2 Spots Left!</p>
                    <p className="mt-[-16px] opacity-50">07/29/24</p>
                    <p>
                        We had a record number of returning vendors this year
                        and only have 2 available spaces for 2024. As always, we
                        will accept applications to be placed on the waiting
                        list.
                    </p>
                    <p className="author">GOMAD</p>
                    <Button>
                        <Link href="/register" className="flex items-center">
                            <span>Register now!</span>
                            <ArrowUpRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Craft show images */}
            <div className="diagonal-clip relative mt-12 h-auto w-full md:mt-0">
                <div className="absolute inset-0 z-10 opacity-50">
                    {/* <Image
                        src="/images/olympia-mesh.png"
                        alt="green and gold mesh gradient"
                        layout="fill"
                    /> */}
                </div>
                <Image
                    src="/images/craft-show-gym.jpeg"
                    alt="Craft show gym"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                />
            </div>

            {/* For the vendors */}
            <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
                <div className="py-6 text-5xl font-semibold md:mx-auto md:text-7xl">
                    <span>When should I get there?</span>
                </div>
                <div className="flex flex-col gap-6 text-2xl md:text-3xl">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <CalendarDays />
                            <span>Craft Show Date</span>
                        </div>
                        <span className="text-4xl font-semibold md:text-5xl">
                            December 14th, 2024
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <Clock />
                            <span>Sale Time</span>
                        </div>
                        <span className="text-4xl font-semibold md:text-5xl">
                            10 AM - 4 PM
                        </span>
                    </div>
                </div>
                <div className="mt-12 flex flex-col gap-2 md:flex-row">
                    <div className="">
                        <div className="flex items-center gap-2 bg-gradient-to-tr from-blue-600 to-cyan-500 bg-clip-text text-5xl font-bold text-transparent">
                            {/* <Store className="h-8 w-8 text-black" /> */}
                            <h3 className="text-black">For the vendors</h3>
                        </div>
                        <div className="mt-4 flex flex-col gap-4 text-2xl md:text-3xl">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <Wrench />
                                    <span>Setup Time</span>
                                </div>
                                <span className="text-4xl font-semibold md:text-5xl">
                                    7 AM - 9:30 AM
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="h-full w-[2px] bg-gradient-to-t from-transparent via-black to-transparent"></div> */}
                </div>
            </div>
        </div>
    );
}
