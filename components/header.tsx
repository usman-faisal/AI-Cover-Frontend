import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
    return (

        <header className="py-6 px-4 md:px-6 border-b">
            <div className="container flex items-center justify-between">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <span className="text-xl font-semibold">AI Cover Generator</span>
                </Link>

                <Button>Get Started</Button>
            </div>
        </header>
    )
}
