import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";

const Onboarding = ({ setHasCompletedOnboarding }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedLocation = localStorage.getItem("userLocation");
    const savedInterests =
      JSON.parse(localStorage.getItem("userInterests")) || [];
    const savedYear = localStorage.getItem("userYear");

    if (savedName) setName(savedName);
    if (savedLocation) setLocation(savedLocation);
    if (savedInterests) setSelectedInterests(savedInterests);
    if (savedYear) setSelectedYear(savedYear);
  }, []);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem("userName", newName);
  };

  const handleFinishOnboarding = () => {
    if (!name.trim()) {
      alert("Name is required. Please enter your name before submitting.");
      return;
    }
    setHasCompletedOnboarding(true);
    localStorage.setItem("hasCompletedOnboarding", "true");
    navigate("/home", { replace: true });
  };

  const handleInterestToggle = (interest) => {
    setSelectedInterests((prev) => {
      const updatedInterests = prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest];
      localStorage.setItem("userInterests", JSON.stringify(updatedInterests));
      return updatedInterests;
    });
  };

  const handleYearToggle = (year) => {
    const updatedYear = selectedYear === year ? "" : year;
    setSelectedYear(updatedYear);
    localStorage.setItem("userYear", updatedYear);
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
      <h1 className="text-4xl font-bold mt-3">Welcome!</h1>
      <br />
      <h2>Let's set up your account! You <strong>must</strong> enter your name.</h2>
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
            onChange={(e) => setLocation(e.target.value)}
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

        <br />
        <h2>This information can be updated later in settings.</h2>

        <div className="mt-auto flex justify-center">
          <Button
            onClick={handleFinishOnboarding}
            disabled={!name.trim()} // Disable button if name is empty
            style={{
              backgroundColor: name.trim() ? "#EADAFF" : "#ccc",
              color: name.trim() ? "#000" : "#666",
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
