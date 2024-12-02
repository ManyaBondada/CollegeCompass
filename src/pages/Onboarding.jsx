import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input, CheckboxGroup, Checkbox, Button, RadioGroup, Radio } from "@nextui-org/react";

const Onboarding = ({ setHasCompletedOnboarding }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  // Load the name from local storage on component mount
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedLocation = localStorage.getItem("userLocation");
    if (savedName) {
      setName(savedName);
    }
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  // Save the name to local storage whenever it changes
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem("userName", newName);
  };

  // Save the location to local storage whenever it changes
  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    localStorage.setItem("userLocation", newLocation);
  };

  const handleFinishOnboarding = () => {
    console.log("Onboarding finished!");
    setHasCompletedOnboarding(true);
    navigate("/home", { replace: true });
  };

  const handleInterestToggle = (interest) => {
    setSelectedInterests(
      (prev) =>
        prev.includes(interest)
          ? prev.filter((i) => i !== interest) // Deselect
          : [...prev, interest] // Select
    );
  };

  const handleYearToggle = (year) => {
    setSelectedYear((prev) => (prev === year ? "" : year)); // Toggle selection
  };

  const interests = [
    { value: "cooking", label: "🍳 Cooking" },
    { value: "arts-crafts", label: "🎨 Arts & Crafts" },
    { value: "gaming", label: "🎮 Gaming" },
    { value: "travel", label: "✈️ Travel" },
    { value: "sports", label: "⚽ Sports" },
  ];

  const schoolYears = [
    { value: "undergraduate", label: "🎓 Undergrad" },
    { value: "masters", label: "📚 Masters" },
    { value: "phd", label: "👩‍🎓 PhD" },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold mt-3">Welcome, {name || "Guest"}!</h1>
      <br />
      <h2>Let's set up your account!</h2>
      <br />
      <div className="space-y-6">
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
          <Input
            placeholder="Enter your previous location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        <div>
          <p className="font-bold">What are you interested in?</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {interests.map((interest) => (
              <Button
                key={interest.value}
                onClick={() => handleInterestToggle(interest.value)}
                style={{
                  backgroundColor: selectedInterests.includes(interest.value)
                    ? "#EADAFF"
                    : "#f9f9f9",
                  color: selectedInterests.includes(interest.value)
                    ? "#000"
                    : "#666",
                  border: "1px solid #ccc",
                  margin: "0 4px",
                }}
              >
                {interest.label}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold">What year in school are you?</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {schoolYears.map((year) => (
              <Button
                key={year.value}
                onClick={() => handleYearToggle(year.value)}
                style={{
                  backgroundColor:
                    selectedYear === year.value ? "#EADAFF" : "#f9f9f9",
                  color: selectedYear === year.value ? "#000" : "#666",
                  border: "1px solid #ccc",
                  margin: "0 4px",
                }}
              >
                {year.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-auto flex justify-center">
          <Button
            onClick={handleFinishOnboarding}
            style={{ backgroundColor: "#EADAFF", color: "#000" }}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
