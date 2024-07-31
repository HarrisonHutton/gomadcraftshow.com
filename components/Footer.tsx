import Link from "next/link";

export function Footer() {
    return (
        <div className="bg-black text-gray-200">
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
                <span>
                    <Link href="/contact">Contact us</Link>
                </span>
            </div>
        </div>
    );
}
