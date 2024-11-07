import { useParams } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useState } from 'react';

const EventDetails = () => {
  // Get the event ID from the URL
  const { eventId } = useParams();

  // State to track if buttons are clicked
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isShared, setIsShared] = useState(false);

  // Event data
  const eventData = {
    1: { 
        name: "Flamenco Fiesta Night", 
        date: "December 10th, 2024", 
        time: "7-10 PM", 
        location: "Spanish Cultural Center, Dallas, TX", 
        description: "Celebrate the passion of flamenco with live performances, traditional food, and music.",
    },
    2: { 
        name: "Diwali Lights Festival", 
        date: "November 13th, 2024", 
        time: "5-9 PM", 
        location: "Indian Heritage Park, Plano, TX", 
        description: "Experience the festival of lights with cultural performances, food stalls, and a grand firework display.",
    },
    3: { 
        name: "Kimchi Making Workshop", 
        date: "November 24th, 2025", 
        time: "2-4 PM", 
        location: "Korean Community Center, Richardson, TX", 
        description: "Learn the art of making traditional kimchi in this hands-on workshop led by experts.",
    },
    4: { 
        name: "Wine & Cheese Soirée", 
        date: "November 30th, 2025", 
        time: "6-9 PM", 
        location: "French Alliance, Dallas, TX", 
        description: "Indulge in a fine selection of French wines and cheeses in a cozy atmosphere.",
    },
    5: { 
        name: "Tango Night", 
        date: "December 3rd, 2024", 
        time: "7-10 PM", 
        location: "Argentinian Arts Center, Dallas, TX", 
        description: "Dance the night away with live tango performances and lessons for beginners.",
    },
    6: { 
        name: "Lunar New Year", 
        date: "January 22nd, 2024", 
        time: "6-10 PM", 
        location: "Chinese Cultural Garden, Plano, TX", 
        description: "Ring in the Lunar New Year with lion dances, fireworks, and traditional Chinese delicacies.",
    },
    7: { 
        name: "Autumn Lantern Festival", 
        date: "November 15th, 2024", 
        time: "7-11 PM", 
        location: "Chinese Heritage Center, Dallas, TX", 
        description: "Join us for an evening of beautiful lantern displays, music, and cultural activities.",
    },
    8: { 
        name: "Calligraphy Workshop", 
        date: "December 24th, 2024", 
        time: "5-8 PM", 
        location: "Chinese Art Studio, Richardson, TX", 
        description: "Learn traditional Chinese calligraphy from a master calligrapher.",
    },
    9: { 
        name: "Paella Cook-Off", 
        date: "January 13th, 2024", 
        time: "1-5 PM", 
        location: "Spanish Culinary School, Dallas, TX", 
        description: "Watch chefs compete to make the best paella and enjoy tastings of Spain’s famous dish.",
    },
    10: { 
        name: "Asado BBQ Festival", 
        date: "February 25th, 2024", 
        time: "All day", 
        location: "Argentinian Park, Plano, TX", 
        description: "Enjoy an authentic Argentinian BBQ festival with grilled meats, music, and family-friendly activities.",
    },
    11: { 
        name: "Mate Tasting Workshop", 
        date: "December 10th, 2024", 
        time: "2-4 PM", 
        location: "Argentinian Cultural Center, Dallas, TX", 
        description: "Discover the flavors of traditional Argentinian mate in this tasting workshop.",
    },
    12: { 
        name: "Naadam Festival", 
        date: "July 11th, 2025", 
        time: "10 AM - 6 PM", 
        location: "Mongolian Heritage Grounds, Dallas, TX", 
        description: "Experience the Naadam Festival with wrestling, archery, and horse racing displays.",
    },
    13: { 
        name: "Throat Singing Concert", 
        date: "November 20th, 2024", 
        time: "8-9 PM", 
        location: "Mongolian Cultural Center, Plano, TX", 
        description: "Enjoy the unique sounds of Mongolian throat singing in this special performance.",
    },
    14: { 
        name: "Bastille Day Picnic", 
        date: "July 14th, 2024", 
        time: "5-10 PM", 
        location: "French Garden, Dallas, TX", 
        description: "Celebrate Bastille Day with a French-inspired picnic, music, and fireworks.",
    },
    15: { 
        name: "French Film Festival", 
        date: "December 6th, 2024", 
        time: "5-8 PM", 
        location: "French Cultural Center, Dallas, TX", 
        description: "Join us for a selection of classic and contemporary French films with English subtitles.",
    },
    16: { 
        name: "Holi Color Festival", 
        date: "March 8th, 2024", 
        time: "All day", 
        location: "Indian Heritage Park, Plano, TX", 
        description: "Celebrate Holi with vibrant colors, music, dance, and traditional Indian food.",
    },
    17: { 
        name: "Bollywood Dance Workshop", 
        date: "November 19th, 2024", 
        time: "4-6 PM", 
        location: "Indian Dance Academy, Dallas, TX", 
        description: "Learn popular Bollywood dance moves in this fun and energetic workshop.",
    }
    // Add other events as needed...
  };

  // Get the event information based on the ID from the URL
  const event = eventData[eventId];

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <>
      <h1>{event.name}</h1>
      <br />
      <h2>Date: {event.date}</h2>
      <h2>Time: {event.time}</h2>
      <h2>Location: {event.location}</h2>
      <div style={{ marginTop: '20px' }}>
        <p>{event.description}</p>
      </div>
      <br />
      
      {/* Button Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Button
            auto
            onClick={() => setIsSignedUp(!isSignedUp)}
            style={{
                backgroundColor: isSignedUp ? '#C7A3FF' : '#EADAFF', // Highlighted if clicked
                color: '#000',
            }}
        >
            {isSignedUp ? "Signed Up" : "Sign Up"}
        </Button>
        
        <Button
            auto
            onClick={() => setIsShared(!isShared)}
            style={{
                backgroundColor: isShared ? '#C7A3FF' : '#EADAFF', // Highlighted if clicked
                color: '#000',
            }}
        >
            {isShared ? "Shared" : "Share Event"}
        </Button>
        
        <Button
            auto
            as="a"
            href="/events"
            style={{ backgroundColor: '#EADAFF', color: '#000' }}
        >
            Back to Events
        </Button>
      </div>
    </>
  );
};

export default EventDetails;
