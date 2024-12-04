// GroceryShopping.js

import { useState, useEffect } from 'react';
import { Checkbox, Button } from '@nextui-org/react';
import BackButton from './BackButton';
import { Link } from 'react-router-dom';

const GroceryShopping = () => {
  const [checkedSteps, setCheckedSteps] = useState([])

  useEffect(() => {
    // Retrieve checked steps from local storage
    const temp = JSON.parse(localStorage.getItem('groceryShoppingSteps')) || [];
    setCheckedSteps(temp);
  }, []);

  const steps = [
    {
      value: 'make-grocery-list',
      label: 'Make Grocery List',
      title: "Subtask 1: Make a Grocery List",
      description: "Plan ahead and list down all the essentials you need 📝",
      route: '/home/grocery-shopping/make-grocery-list',
    },
    {
      value: 'find-stores',
      label: 'Find Stores Near Me',
      title: "Subtask 2: Find Stores Near Me",
      description: "Discover the best stores around for your grocery needs 🛒",
      route: '/home/grocery-shopping/find-stores',
    },
    {
      value: 'schedule-visit',
      label: 'Schedule Visit',
      title: "Subtask 3: Schedule a Visit",
      description: "Set aside some time that works best for you to go shopping ⏰",
      route: '/home/grocery-shopping/schedule-visit',
    },
  ];

  return (
    <>
      <BackButton />
      <h1 className="text-4xl font-bold">Grocery Shopping</h1>
      <br />
      <h2>Love to cook? Let's get the ingredients! Feel free to complete these subtasks as many times as needed in any order.</h2>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {steps.map((step) => {
          const isCompleted = checkedSteps.includes(step.value);
  
          return (
            <div
              key={step.value}
              style={{
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: isCompleted ? "#d3ffd3" : "#f9f9f9",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textDecoration: isCompleted ? "line-through" : "none",
                }}
              >
                {step.label}
              </p>
              <p>{step.description}</p>

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Link to={step.route} style={{ textDecoration: "none" }}>
                  <Button
                    style={{
                      backgroundColor: "#EADAFF",
                      color: "#000",
                    }}
                  >
                    {isCompleted ? "View" : "Start"}
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GroceryShopping;
