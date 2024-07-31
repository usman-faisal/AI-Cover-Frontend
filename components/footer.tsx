import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-6 px-4 md:px-6 border-t">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">&copy; 2024 AI Cover Generator. All rights reserved.</p>
                <nav className="flex items-center gap-4">
                    <Link href="#" className="text-xs hover:underline" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs hover:underline" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-xs hover:underline" prefetch={false}>
                        Contact Us
                    </Link>
                </nav>
            </div>
        </footer>
    )
}
