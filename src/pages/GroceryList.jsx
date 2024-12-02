import { useState, useEffect } from 'react';
import { Checkbox, CheckboxGroup, Button, Input } from '@nextui-org/react';
import BackButton from './BackButton';

const GroceryList = () => {
    const [groceryItems, setGroceryItems] = useState([]);
    const [newItem, setNewItem] = useState(""); // Stores the new item typed into the input
    const [checkedItems, setCheckedItems] = useState([]);

    // Load grocery list from localStorage when the component mounts
    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("groceryItems")) || [];
        const savedCheckedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];
        console.log('Loaded from localStorage:', savedItems, savedCheckedItems);
        setGroceryItems(savedItems);
        setCheckedItems(savedCheckedItems);
    }, []);

    // Save grocery items and checked items to localStorage whenever they change
    useEffect(() => {
        if (groceryItems.length > 0 || checkedItems.length > 0) {
            console.log('Saving to localStorage:', groceryItems, checkedItems);
            localStorage.setItem("groceryItems", JSON.stringify(groceryItems));
            localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
        }
    }, [groceryItems, checkedItems]);
    
    // Handle adding a new item to the grocery list
    const handleAddItem = () => {
        if (newItem.trim() !== "") {
            setGroceryItems((prevItems) => [...prevItems, newItem]);
            setNewItem(""); // Clear the input field
        }
    };

    // Clear the entire grocery list and localStorage
    const handleClearAll = () => {
        setGroceryItems([]);
        setCheckedItems([]);
        // Remove from local storage
        localStorage.removeItem("groceryItems");
        localStorage.removeItem("checkedItems");
    };

    // Handle checkbox toggle and apply/remove strikethrough
    const handleCheckboxChange = (selectedValues) => {
        setCheckedItems(selectedValues);
    };

    return (
      <>
        <BackButton />
        <h1 className="text-4xl font-bold">Grocery List</h1>
        <br />

        <div style={{ display: "flex", marginBottom: "20px" }}>
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
              marginLeft: "10px",
              backgroundColor: "#EADAFF",
              color: "#000",
            }}
          >
            Add
          </Button>
        </div>

        <CheckboxGroup
          label="Your Grocery List"
          value={checkedItems}
          onChange={handleCheckboxChange}
          color="secondary"
        >
          {groceryItems.map((item, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <Checkbox value={item}>
                <span
                  style={{
                    textDecoration: checkedItems.includes(item)
                      ? "line-through"
                      : "none",
                    color: "#000",
                  }}
                >
                  {item}
                </span>
              </Checkbox>
            </div>
          ))}
        </CheckboxGroup>

        {/* Conditionally display the "Clear All" button */}
        {groceryItems.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <Button
              onClick={handleClearAll}
              style={{ backgroundColor: "#FF6B6B", color: "#fff" }}
            >
              Clear All
            </Button>
          </div>
        )}
      </>
    );
};

export default GroceryList;