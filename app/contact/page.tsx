import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:px-8 md:pb-24 md:pt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Get in touch
            </p>
            <h1 className="mt-3 font-display text-[3.5rem] font-medium tracking-tight sm:text-6xl md:text-8xl">
                Contact
            </h1>

            <div className="relative mt-8 overflow-hidden rounded-3xl border bg-card p-6 shadow-sm sm:p-8 md:mt-12 md:p-12">
                <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_left,black,transparent_60%)]" />
                <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                        <Mail className="h-7 w-7" />
                    </div>
                    <p className="mt-6 max-w-xl text-xl text-muted-foreground">
                        Message us and we&apos;ll respond as soon as possible.
                    </p>
                    <Link
                        href="mailto:gomadcraftshow@gmail.com"
                        className="mt-2 block font-display text-xl font-medium text-primary underline-offset-8 transition-all hover:underline sm:text-3xl md:text-5xl"
                    >
                        {/* Only ever wrap after the @ on very narrow screens. */}
                        gomadcraftshow@
                        <wbr />
                        gmail.com
                    </Link>
                    <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
                        <Link href="mailto:gomadcraftshow@gmail.com">
                            Send us an email
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
