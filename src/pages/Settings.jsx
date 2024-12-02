import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import BackButton from "./BackButton";

const Settings = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    const savedLocation = localStorage.getItem("userLocation");
    const savedInterests =
      JSON.parse(localStorage.getItem("userInterests")) || [];
    const savedYear = localStorage.getItem("userYear") || "";

    if (savedName) setName(savedName);
    if (savedLocation) setLocation(savedLocation); 
    setSelectedInterests(savedInterests);
    setSelectedYear(savedYear);
  }, []);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem("userName", newName);
  };

  const handleLocationChange = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
    localStorage.setItem("userLocation", newLocation);
  };

  const handleInterestToggle = (interest) => {
    const updatedInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter((i) => i !== interest)
      : [...selectedInterests, interest];
    setSelectedInterests(updatedInterests);
    localStorage.setItem("userInterests", JSON.stringify(updatedInterests));
  };

  const handleYearToggle = (year) => {
    const newYear = selectedYear === year ? "" : year;
    setSelectedYear(newYear);
    localStorage.setItem("userYear", newYear);
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
    <div>
      <BackButton />
      <h1 className="text-4xl font-bold">Settings</h1>
      <br />
      <h2>Edit onboarding information here. Your changes will be automatically saved. </h2>
      <br />

      <div className="space-y-6">
        <div>
          <p className="font-bold">Name</p>
          <Input
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div>
          <p className="font-bold">Home Country</p>
          <Input
            placeholder="Enter your location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        <div>
          <p className="font-bold">Interests</p>
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
          <p className="font-bold">School Year</p>
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
      </div>
    </div>
  );
};

export default Settings;
