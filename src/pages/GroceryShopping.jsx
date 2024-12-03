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

  return (
    <>
      <BackButton />
      <h1 className="text-4xl font-bold">Grocery Shopping</h1>
      <br />
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
    </>
  );
};

export default GroceryShopping;
