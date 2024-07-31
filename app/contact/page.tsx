import Link from "next/link";

export default function Contact() {
    return (
        <div className="">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div>
                    <h1 className="text-7xl font-semibold">Contact</h1>
                    <p className="my-4 text-xl">
                        Message us at{" "}
                        <Link
                            href="mailto:gomadcraftshow@gmail.com"
                            className="text-green-400 transition-all hover:underline"
                        >
                            gomadcraftshow@gmail.com
                        </Link>{" "}
                        and we&apos;ll respond as soon as possible.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
