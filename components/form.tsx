'use client';
import { ModelSelect } from "./model-select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Select, SelectItem, SelectContent, SelectValue, SelectTrigger } from "./ui/select";
import { useForm, Controller } from "react-hook-form";
import { FormProps } from "@/lib/types"


export default function Form() {
    const { control, register, handleSubmit, setValue } = useForm<FormProps>({
        defaultValues: {
            url: '',
            model: '',
            conversion: '',
        },
    });

    function onSubmit(data: FormProps) {
        console.log(data);
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Label htmlFor="video-url">YouTube Video URL</Label>
                <Input
                    {...register('url')}
                    id="video-url"
                    type="text"
                    placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
            </div>
            <div className="space-y-1">
                <Label className="block">Select a Model</Label>
                <ModelSelect setValue={setValue} />
            </div>
            <div>
                <Label htmlFor="conversion-type">Conversion Type</Label>
                <Controller
                    control={control}
                    name="conversion"
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue
                                    placeholder="conversion" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male-to-male">male to male</SelectItem>
                                <SelectItem value="female-to-female">female to female</SelectItem>
                                <SelectItem value="male-to-female">male to female</SelectItem>
                                <SelectItem value="female-to-male">female to male</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />
            </div>
            <Button type="submit" className="w-full">
                Generate Cover Song
            </Button>
        </form>
    );
}
