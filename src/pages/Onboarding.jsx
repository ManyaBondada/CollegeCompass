import { useNavigate } from "react-router-dom";
import {Input} from "@nextui-org/react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";

const Onboarding = ({setHasCompletedOnboarding}) => {

    const navigate = useNavigate(); 

    const handleFinishOnboarding = () => {
        console.log("Onboarding finished!");
        // setHasCompletedOnboarding(true);  // TODO: handle a state change?
        navigate('/home', {replace: true});
    };

    return (
        <div clasName="flex flex-col justify-between min-h-screen">
            <h1>Welcome Name</h1>
            <br className="" />
            <p>Let's set up your account!</p>
            <br className="" />
            <p className="font-bold"> Where are you moving from? </p>
            <br className="" />
            <Input type="" label="" />
            <br className="" />
            <p className="font-bold"> What are you interested in? </p>
            <br className="" />
            <CheckboxGroup
                label="Select interests"
                orientation="horizontal"
                color="secondary"
                >
                <Checkbox value="cooking">Cooking</Checkbox>
                <Checkbox value="arts-crafts">Arts & Crafts</Checkbox>
                <Checkbox value="gaming">Gaming</Checkbox>
                <Checkbox value="travel">Travel</Checkbox>
                <Checkbox value="sports">Sports</Checkbox>
            </CheckboxGroup>
            <br className="" />
            <p className="font-bold"> What year in school are you? </p>
            <br className="" />
            <RadioGroup
                label="Select a year"
                orientation="horizontal"
                color="secondary"
                >
                <Radio value="undergraduate">Undergrad</Radio>
                <Radio value="masters">Masters</Radio>
                <Radio value="phd">PhD</Radio>
            </RadioGroup>
            <br className="" />
            <br className="" />
            <br className="" />
            <br className="" />
            <br className="" />
            <div className="flex justify-center">
                <Button 
                    radius="full" 
                    onClick={handleFinishOnboarding}
                    >
                    Submit
                </Button>
            </div>
            
        </div>
    );
}
 
export default Onboarding;