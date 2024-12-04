// GroceryList.js

import { useState, useEffect } from 'react';
import { Checkbox, CheckboxGroup, Button, Input } from '@nextui-org/react';
import BackButton from './BackButton'; // Ensure you're importing the updated BackButton

const GroceryList = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);

  // Load grocery list from localStorage when the component mounts
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('groceryItems')) || [];
    const savedCheckedItems =
      JSON.parse(localStorage.getItem('checkedItems')) || [];
    setGroceryItems(savedItems);
    setCheckedItems(savedCheckedItems);
  }, []);

  // Save grocery items and checked items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('groceryItems', JSON.stringify(groceryItems));
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [groceryItems, checkedItems]);

  // Handle adding a new item to the grocery list
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setGroceryItems((prevItems) => [...prevItems, newItem]);
      setNewItem(''); // Clear the input field

      // Mark the subtask as completed in localStorage
      const storedCheckedSteps =
        JSON.parse(localStorage.getItem('groceryShoppingSteps')) || [];
      if (!storedCheckedSteps.includes('make-grocery-list')) {
        storedCheckedSteps.push('make-grocery-list');
        localStorage.setItem(
          'groceryShoppingSteps',
          JSON.stringify(storedCheckedSteps)
        );
      }
    }
  };

  // Handle deleting individual items
  const handleDeleteItem = (itemToDelete) => {
    setGroceryItems((prevItems) =>
      prevItems.filter((item) => item !== itemToDelete)
    );
    setCheckedItems((prevChecked) =>
      prevChecked.filter((item) => item !== itemToDelete)
    );
  };

  // Clear the entire grocery list and localStorage
  const handleClearAll = () => {
    setGroceryItems([]);
    setCheckedItems([]);
    // Remove from local storage
    localStorage.removeItem('groceryItems');
    localStorage.removeItem('checkedItems');

    // Optionally, unmark the subtask as completed
    const storedCheckedSteps =
      JSON.parse(localStorage.getItem('groceryShoppingSteps')) || [];
    const updatedSteps = storedCheckedSteps.filter(
      (step) => step !== 'make-grocery-list'
    );
    localStorage.setItem(
      'groceryShoppingSteps',
      JSON.stringify(updatedSteps)
    );
  };

  // Handle checkbox toggle and apply/remove strikethrough
  const handleCheckboxChange = (selectedValues) => {
    setCheckedItems(selectedValues);
  };

  return (
    <>
      {/* Use the modified BackButton to navigate back to Grocery Shopping */}
      <BackButton to="/home/grocery-shopping" />
      <h1 className="text-4xl font-bold">Grocery List</h1>
      <br />

      {/* Input field and Add button */}
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <Input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a grocery item"
          fullWidth
          clearable
        />
        <Button
          onClick={handleAddItem}
          style={{
            marginLeft: '10px',
            backgroundColor: '#EADAFF',
            color: '#000',
          }}
        >
          Add
        </Button>
      </div>

      {/* Grocery items list with checkboxes */}
      <CheckboxGroup
        label="Your Grocery List"
        value={checkedItems}
        onChange={handleCheckboxChange}
        color="secondary"
      >
        {groceryItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox value={item}>
              <span
                style={{
                  textDecoration: checkedItems.includes(item)
                    ? 'line-through'
                    : 'none',
                  color: '#000',
                }}
              >
                {item}
              </span>
            </Checkbox>
            <Button
              onClick={() => handleDeleteItem(item)}
              style={{
                marginLeft: '5px',
                backgroundColor: 'transparent',
                color: 'grey',
                width: '32px',
                padding: '0',
                border: 'none',
                minWidth: '32px',
              }}
            >
              X
            </Button>
          </div>
        ))}
      </CheckboxGroup>

      {/* Conditionally display the "Clear All" button */}
      {groceryItems.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <Button
            onClick={handleClearAll}
            style={{ backgroundColor: '#FF6B6B', color: '#fff' }}
          >
            Clear All
          </Button>
        </div>
      )}
    </>
  );
};

export default GroceryList;
