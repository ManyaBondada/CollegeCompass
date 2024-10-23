import { useParams } from 'react-router-dom';
import NavigationButton from '../pages/NavigationButton'; // Import the button component

const StoreDetails = () => {
  // Get the store ID from the URL
  const { storeId } = useParams();

  // Dummy data (you can fetch from an API or use your state)
  const storeData = {
    1: { 
        name: "Target", 
        address: "16731 Coit Rd, Dallas, TX 75248", 
        distance: "2.0 miles",
        hours: "7am-10pm",
        services: "In-store shopping | Pickup | Delivery",
        phone: "(214) 775-0206",
    },
    2: { 
        name: "Walmart Supercenter", 
        address: "425 Coit Rd, Plano, TX 75075", 
        distance: "2.4 miles",
        hours: "8am-8pm",
        services: "In-store shopping | Pickup | Delivery",
        phone: "(972) 599-1650", },
    3: { 
        name: "Kroger", 
        address: "160 N Coit Rd, Richardson, TX 75080", 
        distance: "3.7 miles", 
        hours: "6am-1am",
        services: "In-store shopping | Pickup | Delivery",
        phone: "(972) 664-0990",
    }
  };

  // Get the store information based on the ID from the URL
  const store = storeData[storeId];

  if (!store) {
    return <h2>Store not found</h2>;
  }

  return (
    <div>
      <h1>{store.name}</h1>
      <h2>{store.address}</h2>
      <div style={{ marginTop: '20px' }}>
      <p>{store.distance}</p>
      <p>{store.hours}</p>
      <p>{store.services}</p>
      <p>{store.phone}</p>
    </div>
      <NavigationButton link="/bus-schedule" label="Check Bus Schedule" />
      <NavigationButton link="/home/grocery-shopping" label="Return to Grocery Tasks" />
    </div>
  );
};

export default StoreDetails;
