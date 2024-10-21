import {CheckboxGroup, Checkbox} from "@nextui-org/react";

const GroceryShopping = () => {
    return (
        <>
            <h1 style={{ fontSize: 'clamp(25px, 11vw, 48px)' }}>Grocery Shopping</h1>
            <br></br>
            <h2></h2>
            <CheckboxGroup
                label="Steps to Complete"
                color="secondary"
                >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox value="make-grocery-list" />
                    <a href="/home/grocery-shopping/make-grocery-list" style={{ marginLeft: '8px', textDecoration: 'none', color: 'inherit' }}>
                        Make Grocery List
                    </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox value="find-stores" />
                    <a href="/home/grocery-shopping/find-stores" style={{ marginLeft: '8px', textDecoration: 'none', color: 'inherit' }}>
                        Find Stores Near Me
                    </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox value="schedule-visit" />
                    <a href="/home/grocery-shopping/schedule-visit" style={{ marginLeft: '8px', textDecoration: 'none', color: 'inherit' }}>
                        Schedule Visit
                    </a>
                </div>
            </CheckboxGroup>
        </>
     );
}
 
export default GroceryShopping;