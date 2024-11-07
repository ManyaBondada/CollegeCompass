import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const Settings = () => {

    const [userName, setUserName] = useState('');
    
    useEffect(() => {
        // Retrieve the user's name from local storage
        const name = localStorage.getItem('userName');
        if (name) {
            setUserName(name);
        }
    }, []);
    return (
        <>
            <h1> Settings </h1>
            <br></br>
            <h2>Welcome {userName || "Guest"}!</h2>
            <br></br>
            <h2>To be developed...</h2>
            <h2>In the meantime, try out another feature!</h2>
        </>
     );
}
 
export default Settings;