import Link from "next/link";

export function Navbar() {
    return (
        <nav>
            <ul className="mx-auto flex max-w-4xl justify-between text-3xl font-semibold">
                <div>
                    <li className="align-center flex justify-center rounded-lg p-4">
                        <Link href="/">Home</Link>
                    </li>
                </div>
                <div className="flex gap-2">
                    <li className="align-center flex justify-center rounded-lg p-4">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="align-center flex justify-center rounded-lg p-4">
                        <Link href="/contact">Contact</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}
