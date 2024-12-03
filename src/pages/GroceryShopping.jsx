<<<<<<< HEAD
// GroceryShopping.js

import { useState, useEffect } from 'react';
import { Checkbox, Button } from '@nextui-org/react';
import BackButton from './BackButton';
import { Link } from 'react-router-dom';

const GroceryShopping = () => {
  const [checkedSteps, setCheckedSteps] = useState(() => {
    return JSON.parse(localStorage.getItem('groceryShoppingSteps')) || [];
  });

  const steps = [
    {
      value: 'make-grocery-list',
      label: 'Make Grocery List',
      route: '/home/grocery-shopping/make-grocery-list',
    },
    {
      value: 'find-stores',
      label: 'Find Stores Near Me',
      route: '/home/grocery-shopping/find-stores',
    },
    {
      value: 'schedule-visit',
      label: 'Schedule Visit',
      route: '/home/grocery-shopping/schedule-visit',
    },
  ];

  // Update checkedSteps whenever localStorage changes
  useEffect(() => {
    const updateCheckedSteps = () => {
      const storedCheckedSteps =
        JSON.parse(localStorage.getItem('groceryShoppingSteps')) || [];
      if (JSON.stringify(checkedSteps) !== JSON.stringify(storedCheckedSteps)) {
        setCheckedSteps(storedCheckedSteps);
      }
    };

    // Call the function once to initialize
    updateCheckedSteps();

    // Set up an interval to check for changes every second
    const intervalId = setInterval(updateCheckedSteps, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [checkedSteps]);

  // Update main task completion status whenever checkedSteps changes
  useEffect(() => {
    // Update main task completion status
    const allStepsCompleted = steps.length === checkedSteps.length;

    // Retrieve tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    if (tasks && Array.isArray(tasks)) {
      // Update the specific task's completion status
      const updatedTasks = tasks.map((task) =>
        task.id === 1 // Use task ID to identify the task
          ? { ...task, completed: allStepsCompleted }
          : task
      );

      // Save updated tasks back to localStorage
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } else {
      // Handle the case where tasks are not found
      console.error('Tasks not found in localStorage. Cannot update task status.');
    }
  }, [checkedSteps]);

=======
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

>>>>>>> 7c5f33137d3d921a8ae43c5d564c009c42736df8
  return (
    <>
      <BackButton />
      <h1 className="text-4xl font-bold">Grocery Shopping</h1>
      <br />
<<<<<<< HEAD
      <h2>Steps to Complete</h2>
      <br />
      {steps.map((step) => (
        <div
          key={step.value}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <Checkbox
            isSelected={checkedSteps.includes(step.value)}
            isDisabled // Disable manual checking
            style={{ marginRight: '10px' }}
          />
          <span>{step.label}</span>
          <Link to={step.route} style={{ marginLeft: '8px' }}>
            <Button
              auto
              color="secondary"
              style={{
                backgroundColor: '#EADAFF',
                color: '#000',
              }}
            >
              Go
            </Button>
          </Link>
        </div>
      ))}
=======
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
>>>>>>> 7c5f33137d3d921a8ae43c5d564c009c42736df8
    </>
  );
};

export default GroceryShopping;
