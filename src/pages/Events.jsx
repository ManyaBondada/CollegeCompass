import {Input} from "@nextui-org/input";
import {Slider} from "@nextui-org/slider";
import {DateRangePicker} from "@nextui-org/date-picker";
import {Button} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import NavigationButton from "./NavigationButton";


const Events = () => {
    return (
        <div className="">
            <h1> Find an event </h1>
            <br className="" />
            <Input type="" placeholder="Enter zip code" ></Input>
            <br className="" />
            <p className="font-bold">Radius</p>
            <br className="" />
            <Slider 
                label="Distance (miles)" 
                step={1} 
                maxValue={50} 
                minValue={0} 
                defaultValue={10}
                className="max-w-md"
                color="secondary"
            />
            <br className="" />
            <p className="font-bold">Date</p>
            <br className="" />
            <DateRangePicker 
                label="Choose a date range" 
                className="max-w-xs" 
            />
            <br className="" />
            <p className="font-bold">Select a culture</p>
            <br className="" />
            <RadioGroup
                orientation="horizontal"
                color="secondary"
                >
                <Radio value="chinese">Chinese</Radio>
                <Radio value="spanish">Spanish</Radio>
                <Radio value="argentinian">Argentinian</Radio>
                <Radio value="mongolian">Mongolian</Radio>
                <Radio value="french">French</Radio>
            </RadioGroup>
            <br className="" />
            <br className="" />
            <br className="" />
            <br className="" />
            <br className="" />
            <div>
                <div className="flex justify-center">
                <NavigationButton 
                    label="Submit"
                    link="/events/events-near-me" 
                    >
                    Submit
                </NavigationButton>
            </div>
            </div>

        </div>
     );
}
 
export default Events;