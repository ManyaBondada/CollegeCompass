import { Button } from '@nextui-org/react';

const Home = () => {
    const tasks = [
        {
            title: "Task 1: Get groceries",
            description: "Your fridge is looking a bit empty... 🤔",
            route: "/home/grocery-shopping"
        },
        {
            title: "Task 2: Sign up for an event",
            description: "Get ready to meet some new people 🎉",
            route: "home/events"
        },
    ];

    return (
        <>
            <h1>Welcome [Name]</h1>
            <br />
            <h2>Here are your tasks</h2>
            <br />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {tasks.map((task, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            padding: '15px', 
                            border: '1px solid #ccc', 
                            borderRadius: '8px', 
                            backgroundColor: '#f9f9f9', 
                            display: 'flex', 
                            flexDirection: 'column'
                        }}
                    >
                        <p style={{ fontWeight: 'bold' }}>{task.title}</p>
                        <p>{task.description}</p>
                        <br></br>
                        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                            <Button 
                                as="a"
                                href={task.route}
                                style={{ backgroundColor: '#EADAFF', color: '#000' }}
                            >
                                Start
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
