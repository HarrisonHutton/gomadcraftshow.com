import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black text-gray-200">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-16 md:px-8">
                <span>
                    <Link href="/contact">Contact us</Link>
                </span>
                <div className="flex w-full">
                    <span className="my-14 h-[1px] w-full bg-gray-200"></span>
                </div>
                <div>
                    <span>&copy; 2024. GOMAD. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}
