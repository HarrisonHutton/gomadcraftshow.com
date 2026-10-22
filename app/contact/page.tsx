import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 md:px-8 md:pt-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Get in touch
            </p>
            <h1 className="mt-3 font-display text-6xl font-medium tracking-tight md:text-8xl">
                Contact
            </h1>

            <div className="relative mt-12 overflow-hidden rounded-3xl border bg-card p-8 shadow-sm md:p-12">
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
                        className="mt-2 block break-all font-display text-3xl font-medium text-primary underline-offset-8 transition-all hover:underline md:text-5xl"
                    >
                        gomadcraftshow@gmail.com
                    </Link>
                    <Button asChild size="lg" className="mt-8">
                        <Link href="mailto:gomadcraftshow@gmail.com">
                            Send us an email
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
