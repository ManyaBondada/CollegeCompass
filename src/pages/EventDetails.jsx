import { useParams } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import { useState, useEffect} from 'react';
import BackButton from './BackButton';

// Event data
const eventData = {
    1: { 
        name: "Flamenco Fiesta Night", 
        date: "December 10th, 2024", 
        time: "7-10 PM", 
        location: "Spanish Cultural Center, Dallas, TX", 
        description: "Celebrate the passion of flamenco with live performances, traditional food, and music.",
        image: "https://leeds.cervantes.es/imagenes/image/flamenco-lessons-cervantes-leeds.jpg"
    },
    2: { 
        name: "Diwali Lights Festival", 
        date: "November 13th, 2024", 
        time: "5-9 PM", 
        location: "Indian Heritage Park, Plano, TX", 
        description: "Experience the festival of lights with cultural performances, food stalls, and a grand firework display.",
        image: "https://images.saymedia-content.com/.image/t_share/MTc2Mjk3NzY0MDM1NTY4ODMw/ten-countries-celebrate-hindus-diwali-festival-of-lights.jpg"
      },
    3: { 
        name: "Kimchi Making Workshop", 
        date: "November 24th, 2025", 
        time: "2-4 PM", 
        location: "Korean Community Center, Richardson, TX", 
        description: "Learn the art of making traditional kimchi in this hands-on workshop led by experts.",
        image: "https://thumbs.dreamstime.com/b/kimchi-making-festival-seoul-korea-%C3%A2%E2%82%AC%E2%80%9C-november-recently-held-sharing-involves-important-korean-tradition-gimjang-to-49142965.jpg"
    },
    4: { 
        name: "Wine & Cheese Soirée", 
        date: "November 30th, 2025", 
        time: "6-9 PM", 
        location: "French Alliance, Dallas, TX", 
        description: "Indulge in a fine selection of French wines and cheeses in a cozy atmosphere.",
        image: "https://www.lipperinternational.com/Customer-Content/www/CMS/files/4.%20how%20to%20host%20a%20wine%20and%20cheese%20party/CheeseParty_1_300_SZ.jpg"
    },
    5: { 
        name: "Tango Night", 
        date: "December 3rd, 2024", 
        time: "7-10 PM", 
        location: "Argentinian Arts Center, Dallas, TX", 
        description: "Dance the night away with live tango performances and lessons for beginners.",
        image: "https://i.ytimg.com/vi/NdLEZCL_Myk/maxresdefault.jpg"
    },
    6: { 
        name: "Lunar New Year", 
        date: "January 22nd, 2024", 
        time: "6-10 PM", 
        location: "Chinese Cultural Garden, Plano, TX", 
        description: "Ring in the Lunar New Year with lion dances, fireworks, and traditional Chinese delicacies.",
        image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1i1PNw.img?w=1500&h=1000&m=4&q=78"
    },
    7: { 
        name: "Autumn Lantern Festival", 
        date: "November 15th, 2024", 
        time: "7-11 PM", 
        location: "Chinese Heritage Center, Dallas, TX", 
        description: "Join us for an evening of beautiful lantern displays, music, and cultural activities.",
        image: "https://th.bing.com/th/id/OIP.txiti16H5Ol789Nt_wdNGAHaFU?rs=1&pid=ImgDetMain"
    },
    8: { 
        name: "Calligraphy Workshop", 
        date: "December 24th, 2024", 
        time: "5-8 PM", 
        location: "Chinese Art Studio, Richardson, TX", 
        description: "Learn traditional Chinese calligraphy from a master calligrapher.",
        image: "https://news.mit.edu/sites/default/files/images/202001/chinese-calligraphy-at-mit-00.JPG"
    },
    9: { 
        name: "Paella Cook-Off", 
        date: "January 13th, 2024", 
        time: "1-5 PM", 
        location: "Spanish Culinary School, Dallas, TX", 
        description: "Watch chefs compete to make the best paella and enjoy tastings of Spain’s famous dish.",
        image: "https://i.ytimg.com/vi/bWiz7Yqom74/maxresdefault.jpg"
    },
    10: { 
        name: "Asado BBQ Festival", 
        date: "February 25th, 2024", 
        time: "All day", 
        location: "Argentinian Park, Plano, TX", 
        description: "Enjoy an authentic Argentinian BBQ festival with grilled meats, music, and family-friendly activities.",
        image: "https://cordoba.gob.ar/wp-content/uploads/2022/11/festival-del-asado-criollo-1-scaled-800x400@2x.jpg"
    },
    11: { 
        name: "Mate Tasting Workshop", 
        date: "December 10th, 2024", 
        time: "2-4 PM", 
        location: "Argentinian Cultural Center, Dallas, TX", 
        description: "Discover the flavors of traditional Argentinian mate in this tasting workshop.",
        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0d/ca/b5/21.jpg"
    },
    12: { 
        name: "Naadam Festival", 
        date: "July 11th, 2025", 
        time: "10 AM - 6 PM", 
        location: "Mongolian Heritage Grounds, Dallas, TX", 
        description: "Experience the Naadam Festival with wrestling, archery, and horse racing displays.",
        image: "https://1.bp.blogspot.com/-u25j5mVUEg0/V4Xr0JZyzKI/AAAAAAAAvmE/-diPmz6za8w4oVocCg6t0WEKhMI8IIo6QCLcB/s1600/db6fd76a2fa32332ead43e329b2d445d.jpg"
    },
    13: { 
        name: "Throat Singing Concert", 
        date: "November 20th, 2024", 
        time: "8-9 PM", 
        location: "Mongolian Cultural Center, Plano, TX", 
        description: "Enjoy the unique sounds of Mongolian throat singing in this special performance.",
        image: "https://i.pinimg.com/originals/37/43/69/374369a9a6146bfcab9ae7b2c8d3fcfd.jpg"
    },
    14: { 
        name: "Bastille Day Picnic", 
        date: "July 14th, 2024", 
        time: "5-10 PM", 
        location: "French Garden, Dallas, TX", 
        description: "Celebrate Bastille Day with a French-inspired picnic, music, and fireworks.",
        image: "https://th.bing.com/th/id/OIP.oGrJ7pgvZ0c4JfBjY6uikwHaFg?rs=1&pid=ImgDetMain"
    },
    15: { 
        name: "French Film Festival", 
        date: "December 6th, 2024", 
        time: "5-8 PM", 
        location: "French Cultural Center, Dallas, TX", 
        description: "Join us for a selection of classic and contemporary French films with English subtitles.",
        image: "https://th.bing.com/th/id/R.550149442099b0e00be2cdd67b5d547b?rik=Jd4zhDBbcxyNmg&riu=http%3a%2f%2fs3.amazonaws.com%2fdarkroom-cdn%2f2017%2f05%2fAFP-Getty_TOPSHOT-FRANCE-CANNES-FILM-FESTIVAL2-4.jpg&ehk=eWAXeXj8nVygVkhCg%2fmm2%2fqRfln48l2UrHOjcF%2f1JIY%3d&risl=&pid=ImgRaw&r=0"
    },
    16: { 
        name: "Holi Color Festival", 
        date: "March 8th, 2024", 
        time: "All day", 
        location: "Indian Heritage Park, Plano, TX", 
        description: "Celebrate Holi with vibrant colors, music, dance, and traditional Indian food.",
        image: "https://th.bing.com/th/id/OIP.a_mo5bwJiHumUrT0NqlRQwHaFH?rs=1&pid=ImgDetMain"
    },
    17: { 
        name: "Bollywood Dance Workshop", 
        date: "November 19th, 2024", 
        time: "4-6 PM", 
        location: "Indian Dance Academy, Dallas, TX", 
        description: "Learn popular Bollywood dance moves in this fun and energetic workshop.",
        image: "https://dreamsperfected.com/wp-content/uploads/2017/05/dance.jpg"
    }
  };

const EventDetails = () => {
  // Get the event ID from the URL
  const { eventId } = useParams();
  const event = eventData[Number(eventId)];

  // State to track if buttons are clicked
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isShared, setIsShared] = useState(false);

  // Get the event information based on the ID from the URL
  //const event = eventData[eventId];

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <>
      <BackButton />
      <h1 className="text-4xl font-bold">{event.name}</h1>
      <br />
      <h2>Date: {event.date}</h2>
      <h2>Time: {event.time}</h2>
      <h2>Location: {event.location}</h2>
      <div style={{ marginTop: "20px" }}>
        <p>{event.description}</p>
      </div>
      <br />

      {/* Button Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button
          auto
          onClick={() => setIsSignedUp(!isSignedUp)}
          style={{
            backgroundColor: isSignedUp ? "#C7A3FF" : "#EADAFF", // Highlighted if clicked
            color: "#000",
          }}
        >
          {isSignedUp ? "Signed Up" : "Sign Up"}
        </Button>

        <Button
          auto
          onClick={() => setIsShared(!isShared)}
          style={{
            backgroundColor: isShared ? "#C7A3FF" : "#EADAFF", // Highlighted if clicked
            color: "#000",
          }}
        >
          {isShared ? "Shared" : "Share Event"}
        </Button>

        <Button
          auto
          as="a"
          href="/events"
          style={{ backgroundColor: "#EADAFF", color: "#000" }}
        >
          Back to Events
        </Button>
      </div>
    </>
  );
};

export default EventDetails;
