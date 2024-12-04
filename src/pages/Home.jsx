// Home.js

import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [userName, setUserName] = useState('');

  // Initial tasks without 'completed' property
  const tasks = [
    {
      id: 1,
      title: 'Task 1: Get groceries',
      description: 'Your fridge is looking a bit empty... 🤔',
      route: '/home/grocery-shopping',
    },
    {
      id: 2,
      title: 'Task 2: Sign up for an event',
      description: 'Get ready to meet some new people 🎉',
      route: '/events',
    },
  ];

  useEffect(() => {
    // Retrieve the user's name from local storage
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  // Function to determine if Grocery Shopping task is completed
  const isGroceryTaskCompleted = () => {
    const storedCheckedSteps =
      JSON.parse(localStorage.getItem('groceryShoppingSteps')) || [];
    // Check if all subtasks are completed
    return storedCheckedSteps.length === 3; // Adjust based on the number of subtasks
  };

  // Function to determine if Events task is completed
  const isEventsTaskCompleted = () => {
    return localStorage.getItem('eventsTaskCompleted') === 'true';
  };

  return (
    <>
      <h1 className="text-4xl font-bold mt-3">
        Welcome, {userName}
      </h1>
      <br />
      <h2>These tasks will help you learn more about the DFW area! Feel free to complete these tasks as many times as needed in any order.</h2>
      <br />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {tasks.map((task) => {
          let completed = false;
          if (task.id === 1) {
            completed = isGroceryTaskCompleted();
          } else if (task.id === 2) {
            completed = isEventsTaskCompleted();
          }

          return (
            <div
              key={task.id}
              style={{
                padding: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: completed ? '#d3ffd3' : '#f9f9f9',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  textDecoration: completed ? 'line-through' : 'none',
                }}
              >
                {task.title}
              </p>
              <p>{task.description}</p>
              <br />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <Link to={task.route} style={{ textDecoration: 'none' }}>
                  <Button
                    style={{
                      backgroundColor: '#EADAFF',
                      color: '#000',
                    }}
                  >
                    {completed ? 'View' : 'Start'}
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

export default Home;