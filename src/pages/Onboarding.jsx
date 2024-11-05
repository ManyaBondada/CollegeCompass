import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input, CheckboxGroup, Checkbox, Button, RadioGroup, Radio } from "@nextui-org/react";

const Onboarding = ({ setHasCompletedOnboarding }) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    // Load the name from local storage on component mount
    useEffect(() => {
        const savedName = localStorage.getItem("userName");
        if (savedName) {
            setName(savedName);
        }
    }, []);

    // Save the name to local storage whenever it changes
    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        localStorage.setItem("userName", newName);
    };

    const handleFinishOnboarding = () => {
        console.log("Onboarding finished!");
        setHasCompletedOnboarding(true);
        navigate('/home', { replace: true });
    };

    return (
        <div className="flex flex-col justify-between h-[calc(100vh-80px)] p-4 space-y-6">
            <h1 className="text-2xl font-bold">Welcome, {name || "Guest"}!</h1>
            <p>Let's set up your account!</p>

            <div>
                <p className="font-bold">What's your name?</p>
                <Input 
                    placeholder="Enter your name" 
                    value={name} 
                    onChange={handleNameChange}
                />
            </div>

            <div>
                <p className="font-bold">Where are you moving from?</p>
                <Input placeholder="Enter your previous location" />
            </div>

            <div>
                <p className="font-bold">What are you interested in?</p>
                <CheckboxGroup label="Select interests" orientation="horizontal" color="secondary">
                    <Checkbox value="cooking">Cooking</Checkbox>
                    <Checkbox value="arts-crafts">Arts & Crafts</Checkbox>
                    <Checkbox value="gaming">Gaming</Checkbox>
                    <Checkbox value="travel">Travel</Checkbox>
                    <Checkbox value="sports">Sports</Checkbox>
                </CheckboxGroup>
            </div>

            <div>
                <p className="font-bold">What year in school are you?</p>
                <RadioGroup label="Select a year" orientation="horizontal" color="secondary">
                    <Radio value="undergraduate">Undergrad</Radio>
                    <Radio value="masters">Masters</Radio>
                    <Radio value="phd">PhD</Radio>
                </RadioGroup>
            </div>

            <div className="mt-auto flex justify-center pb-16">
                <Button
                    onClick={handleFinishOnboarding}
                    style={{ backgroundColor: '#EADAFF', color: '#000' }}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default Onboarding;
