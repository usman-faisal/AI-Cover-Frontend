'use client';
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Model } from "@/lib/types"
import { UseFormSetValue } from "react-hook-form";
import { FormProps } from "@/lib/types"

interface ModelSelectProps {
    setValue: UseFormSetValue<FormProps>;
}

export function ModelSelect({ setValue }: ModelSelectProps) {
    const [data, setData] = React.useState<Model[]>([])
    const [open, setOpen] = React.useState<boolean>(false)
    const [selectedModel, setSelectedModel] = React.useState<string>("")

    async function handleValueChange(searchTerm: string) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/search/${searchTerm}`)
            const responseJson = await response.json();
            responseJson.length = 5;
            setData(responseJson)
        } catch (e) {
            setData([])
        }
    }

    function handleSelect(model: string) {
        setSelectedModel(model)
        setValue("model", model)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {selectedModel
                        ? data.find((m) => m.clipboard.toLowerCase() === selectedModel.toLowerCase())?.title.slice(0, 20)
                        : "Select model..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput onValueChange={handleValueChange} placeholder="Search model..." />
                    <CommandEmpty>No model found.</CommandEmpty>
                    <CommandGroup>
                        {data.map((model) => (
                            <CommandItem
                                key={model.clipboard}
                                value={model.clipboard}
                                onSelect={() => handleSelect(model.clipboard)}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        selectedModel === model.clipboard ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {model.title.slice(0, 20)}...
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
