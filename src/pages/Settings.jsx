import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import BackButton from "./BackButton";

const Settings = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [showRegisteredEvents, setShowRegisteredEvents] = useState(false);

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

  const handleResetProfile = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const confirmResetProfile = () => {
    confirmAlert({
      message: "Are you sure you want to reset all your information? This action is irreversible.",
      buttons: [
        {
          label: "Reset",
          onClick: handleResetProfile,
        },
        {
          label: "Cancel",
        },
      ],
      overlayClassName: "custom-overlay",
      closeOnClickOutside: false,
      customUI: ({ message, onClose }) => (
        <div style={{ textAlign: "center", padding: "20px", width: "300px", background: "#fff", borderRadius: "8px" }}>
          <p>{message}</p>
          <br/>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <Button
              onClick={() => {
                onClose();
                handleResetProfile();
              }}
              style={{
                backgroundColor: "rgba(255, 111, 97, 0.8)",
                color: "#fff",
                border: "1px solid #ccc",
                padding: "20px 20px",
                fontSize: "14px",
              }}
            >
              Yes, Reset
            </Button>
            <Button onClick={onClose} style={{
              backgroundColor: "#f9f9f9",
              color: "#666",
              border: "1px solid #ccc",
              padding: "20px 20px",
              fontSize: "14px",
            }}>
              Cancel
            </Button>
          </div>
        </div>
      ),
    });
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

  const handleViewRegisteredEvents = () => {
    setShowRegisteredEvents(!showRegisteredEvents);
  };

  // Get registered events from localStorage
  const registeredEvents = JSON.parse(localStorage.getItem("events")) || [];

  return (
    <div>
      <BackButton />
      <h1 className="text-4xl font-bold">Settings</h1>
      <br />
      <h2>
        Edit onboarding information here. Your changes will be automatically
        saved.{" "}
      </h2>
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

        <div style={{ marginTop: "40px" }}>
          <Button
            auto
            onClick={handleViewRegisteredEvents}
            style={{
              backgroundColor: "#EADAFF",
              color: "#000",
              border: "1px solid #ccc",
              padding: "10px 20px",
            }}
          >
            View Registered Events
          </Button>
        </div>

        {showRegisteredEvents && (
          <div style={{ marginTop: "20px" }}>
            <h3 className="font-bold">Your Registered Events:</h3>
            {registeredEvents.length > 0 ? (
              <ul>
                {registeredEvents.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            ) : (
              <p>No events registered.</p>
            )}
          </div>
        )}

        <div style={{ marginTop: "30px" }}>
          <Button
            auto
            style={{
              backgroundColor: "rgba(255, 111, 97, 0.8)",
              color: "#fff",
              border: "1px solid #ccc",
              padding: "10px 20px",
            }}
            onClick={confirmResetProfile}
          >
            Reset Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
