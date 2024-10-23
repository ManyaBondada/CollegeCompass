
import {Input} from "@nextui-org/react";

const Home = () => {
    return (
        <>
        <h1 className="">Home</h1>
        <h1>Welcome [Name]</h1>
        <p className=""> Let's get started</p>
        <p className=""> Where are you moving from? </p>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="location" isClearable />
        </div>
        <p className=""> What are you interested in? </p>
        
        
        </>
     );
}
 
export default Home;
