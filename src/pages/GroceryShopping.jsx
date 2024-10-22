import {CheckboxGroup, Checkbox, Button} from "@nextui-org/react";

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
                    <Button
                        auto
                        color="secondary"
                        as="a"
                        href="/home/grocery-shopping/make-grocery-list"
                        style={{ marginLeft: '8px', backgroundColor: '#EADAFF', color: '#000' }}
                    >
                        Make Grocery List
                    </Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox value="find-stores" />
                    <Button
                        auto
                        color="secondary"
                        as="a"
                        href="/home/grocery-shopping/find-stores"
                        style={{ marginLeft: '8px', backgroundColor: '#EADAFF', color: '#000' }}
                    >
                        Find Stores Near Me
                    </Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox value="schedule-visit" />
                    <Button
                        auto
                        color="secondary"
                        as="a"
                        href="/home/grocery-shopping/schedule-visit"
                        style={{ marginLeft: '8px', backgroundColor: '#EADAFF', color: '#000' }}
                    >
                        Schedule Visit
                    </Button>
                </div>
            </CheckboxGroup>
        </>
     );
}
 
export default GroceryShopping;