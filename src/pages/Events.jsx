import { Input } from "@nextui-org/input";
import { Slider } from "@nextui-org/slider";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Button} from "@nextui-org/react";
import { useState } from "react";

const Events = () => {
    const [selectedCulture, setSelectedCulture] = useState("");

    const cultures = [
        { value: "chinese", label: "Chinese 🇨🇳" },
        { value: "spanish", label: "Spanish 🇪🇸" },
        { value: "argentinian", label: "Argentinian 🇦🇷" },
        { value: "mongolian", label: "Mongolian 🇲🇳" },
        { value: "french", label: "French 🇫🇷" },
        { value: "indian", label: "Indian 🇮🇳" },
        { value: "korean", label: "Korean 🇰🇷" }
    ];
    
    const handleCultureToggle = (culture) => {
        setSelectedCulture((prev) => (prev === culture ? "" : culture));
    };

    return (
        <div className="flex flex-col justify-between h-[calc(100vh-80px)] p-4 space-y-6">
            <h1>Find an Event</h1>

            <div>
                <Input placeholder="Enter zip code" className="w-full" />
            </div>

            <div>
                <p className="font-bold">Radius</p>
                <Slider
                    label="Distance (miles)"
                    step={1}
                    maxValue={50}
                    minValue={0}
                    defaultValue={10}
                    className="max-w-md"
                    color="secondary"
                />
            </div>

            <div>
                <p className="font-bold">Date</p>
                <DateRangePicker
                    label="Choose a date range"
                    className="max-w-xs"
                />
            </div>

            <div>
                <p className="font-bold">Select a culture</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {cultures.map((culture) => (
                        <Button
                            key={culture.value}
                            onClick={() => handleCultureToggle(culture.value)}
                            style={{
                                backgroundColor: selectedCulture === culture.value ? '#EADAFF' : '#f9f9f9',
                                color: selectedCulture === culture.value ? '#000' : '#666',
                                border: '1px solid #ccc',
                                margin: '0 4px',
                            }}
                        >
                            {culture.label}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="mt-auto flex justify-center pb-16">
                <Button
                    auto
                    as="a"
                    href="/events/events-near-me"
                    style={{ backgroundColor: '#EADAFF', color: '#000' }}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default Events;