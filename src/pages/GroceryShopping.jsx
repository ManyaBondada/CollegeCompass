import { Button } from "@nextui-org/react";
import BackButton from "./BackButton";

const GroceryShopping = () => {
  const subtasks = [
    {
      title: "Subtask 1: Make a Grocery List",
      description: "Plan ahead and list down all the essentials you need 📝",
      route: "/home/grocery-shopping/make-grocery-list",
    },
    {
      title: "Subtask 2: Find Stores Near Me",
      description: "Discover the best stores around for your grocery needs 🛒",
      route: "/home/grocery-shopping/find-stores",
    },
    {
      title: "Subtask 3: Schedule a Visit",
      description: "Set aside some time that works best for you to go shopping ⏰",
      route: "/home/grocery-shopping/schedule-visit",
    },
  ];

  return (
    <>
      <BackButton />
      <h1 className="text-4xl font-bold">Grocery Shopping</h1>
      <br />
      <h2>Love to cook? Let's get the ingredients! Feel free to complete these subtasks as many times as needed in any order.</h2>
      <br/>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {subtasks.map((subtask, index) => (
          <div
            key={index}
            style={{
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{ fontWeight: "bold" }}>{subtask.title}</p>
            <p>{subtask.description}</p>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                as="a"
                href={subtask.route}
                style={{ backgroundColor: "#EADAFF", color: "#000" }}
              >
                Start
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GroceryShopping;
