import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ModelSelect } from "./model-select"
import Header from "./header"
import Footer from "./footer"
import Form from "./form"

export function Main() {
    return (
        <div className="w-full min-h-screen bg-background text-foreground">
            <Header />
            <main className="py-12 md:py-24 px-4 md:px-6">
                <div className="container grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold">Generate AI-Powered YouTube Cover Songs</h1>
                        <p className="text-muted-foreground text-lg">
                            Create song covers.
                        </p>
                        <Form />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-muted rounded-xl overflow-hidden w-full max-w-md aspect-video">
                            <img
                                src="/placeholder.svg"
                                alt="Generated Cover Image"
                                width={1280}
                                height={720}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="mt-4 flex gap-2">
                            <Button variant="outline">Download</Button>
                            <Button variant="outline">Share</Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

