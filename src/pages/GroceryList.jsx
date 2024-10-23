import { useState } from 'react';
import { Checkbox, CheckboxGroup, Button, Input } from '@nextui-org/react';

const GroceryList = () => {
    const [groceryItems, setGroceryItems] = useState([]);
    const [newItem, setNewItem] = useState(""); // Stores the new item typed into the input
    const [checkedItems, setCheckedItems] = useState([]);

    // handle adding a new item to the grocery list
    const handleAddItem = () => {
        if (newItem.trim() !== "") {
            setGroceryItems([...groceryItems, newItem]);
            setNewItem("");
        }
    };

    // Handle checkbox toggle and apply/remove strikethrough
    const handleCheckboxChange = (selectedValues) => {
        setCheckedItems(selectedValues);
    };

    return (
        <>
            <h1 style={{ fontSize: 'clamp(25px, 11vw, 48px)' }}>Grocery List</h1>
            <br />

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
                    style={{ marginLeft: '10px', backgroundColor: '#EADAFF', color: '#000' }}
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
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox value={item}>
                            <span
                                style={{
                                    textDecoration: checkedItems.includes(item)
                                        ? 'line-through'
                                        : 'none',
                                    color: '#000'
                                }}
                            >
                                {item}
                            </span>
                        </Checkbox>
                    </div>
                ))}
            </CheckboxGroup>
        </>
    );
};

export default GroceryList;
