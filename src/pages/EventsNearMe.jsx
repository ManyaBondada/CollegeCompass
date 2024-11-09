import { Button } from "@nextui-org/react";
import { Link, useLocation } from 'react-router-dom';
import NavigationButton from './NavigationButton';
import BackButton from "./BackButton";

const EventsNearMe = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const selectedCultures = params.get('cultures')?.split(",") || [];

    // Array of event data with culture info
    const events = [
        { id: 1, name: "Flamenco Fiesta Night", details: "December 10th, 2024 (7-10 PM)", culture: "spanish" },
        { id: 2, name: "Diwali Lights Festival", details: "November 13th, 2024 (5-9 PM)", culture: "indian" },
        { id: 3, name: "Kimchi Making Workshop", details: "November 24th, 2025 (2-4 PM)", culture: "korean" },
        { id: 4, name: "Wine & Cheese Soirée", details: "November 30th, 2025 (6-9 PM)", culture: "french" },
        { id: 5, name: "Tango Night", details: "December 3rd, 2024 (7-10 PM)", culture: "argentinian"},
        { id: 6, name: "Lunar New Year", details: "January 22nd 2024 (6-10 PM)", culture: "chinese"},
        { id: 7, name: "Autumn Lantern Festival", details: "November 15th, 2024 (7-11PM)", culture: "chinese"},
        { id: 8, name: "Calligraphy Workshop", details: "December 24th, 2024 (5-8 PM)", culture: "chinese"},
        { id: 9, name: "Paella Cook-Off", details: "January 13th, 2024 (1-5 PM)", culture: "spanish"},
        { id: 10, name: "Asada BBQ Festival", details: "Febrary 25th, 2024", culture: "argentinian"},
        { id: 11, name: "Mate Tasting Workshop", details: "December 10th, 2024 (2-4 PM)", culture: "argentinian"},
        { id: 12, name: "Naadam Festival", details: "July 11th, 2025 (10 AM - 6PM)", culture: "mongolian"},
        { id: 13, name: "Throat Singing Concert", details: "November 20th, 2024 (8-9 PM)", culture: "mongolian"},
        { id: 14, name: "Bastille Day Picnic", details: "July 14th, 2024 (5-10 PM)", culture: "french"},
        { id: 15, name: "French Film Festival", details: "December 6th, 2024 (5-8 PM)", culture: "french"},
        { id: 16, name: "Holi Color Festival", details: "March 8th, 2024", culture: "indian"},
        { id: 17, name: "Bollywood Dance Workshop", details: "November 19th, 2024 (4-6 PM)", culture: "indian"}
    ];

    // Filter events based on selected cultures
    const filteredEvents = events.filter(event => selectedCultures.includes(event.culture));

    return ( 
      <>
      <BackButton/>
      <div className="flex flex-col h-screen">
            <h1 className="text-left p-2">Events Near Me</h1>
            
            <div className="flex-grow relative">
                <div className="absolute top-0 left-0 right-0 bottom-24 overflow-y-auto px-4">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <Link key={event.id} to={`/events/${event.id}`} className="block w-full mb-4">
                                <Button
                                    color="secondary"
                                    style={{
                                        width: '100%',
                                        height: '90px',
                                        backgroundColor: '#EADAFF',
                                        color: '#000',
                                        borderRadius: '10px',
                                        fontSize: '24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        padding: '15px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <span>{event.name}</span>
                                    <span style={{ fontSize: '15px', marginTop: '5px' }}>{event.details}</span>
                                </Button>
                            </Link>
                        ))
                    ) : (
                        <p>No events found for the selected cultures.</p>
                    )}
                </div>
            </div>
        </div> 
        </>
    );
}
 
export default EventsNearMe;