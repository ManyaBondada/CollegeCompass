// StoreDetails.js

import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import BackButton from './BackButton';

const StoreDetails = () => {
  // Get the store ID from the URL
  const { storeId } = useParams();
  const navigate = useNavigate();

  // Dummy data (you can fetch from an API or use your state)
  const storeData = {
    1: {
      name: 'Target',
      address: '16731 Coit Rd, Dallas, TX 75248',
      distance: '2.0 miles',
      hours: '7am-10pm',
      services: 'In-store shopping | Pickup | Delivery',
      phone: '(214) 775-0206',
    },
    2: {
      name: 'Walmart Supercenter',
      address: '425 Coit Rd, Plano, TX 75075',
      distance: '2.4 miles',
      hours: '8am-8pm',
      services: 'In-store shopping | Pickup | Delivery',
      phone: '(972) 599-1650',
    },
    3: {
      name: 'Kroger',
      address: '160 N Coit Rd, Richardson, TX 75080',
      distance: '3.7 miles',
      hours: '6am-1am',
      services: 'In-store shopping | Pickup | Delivery',
      phone: '(972) 664-0990',
    },
  };

  // Get the store information based on the ID from the URL
  const store = storeData[storeId];

  if (!store) {
    return <h2>Store not found</h2>;
  }

  // Handler for selecting a store
  const handleSelectStore = () => {
    // Mark the 'find-stores' subtask as completed in localStorage
    const storedCheckedSteps =
      JSON.parse(localStorage.getItem('groceryShoppingSteps')) || [];
    if (!storedCheckedSteps.includes('find-stores')) {
      storedCheckedSteps.push('find-stores');
      localStorage.setItem(
        'groceryShoppingSteps',
        JSON.stringify(storedCheckedSteps)
      );
    }

    // Navigate back to the Grocery Shopping page
    navigate('/home/grocery-shopping');
  };

  return (
    <>
      <BackButton />
      <h1 className="text-4xl font-bold">{store.name}</h1>
      <br />

      <h2>{store.address}</h2>
      <div style={{ marginTop: '20px' }}>
        <p>{store.distance}</p>
        <p>{store.hours}</p>
        <p>{store.services}</p>
        <p>{store.phone}</p>
      </div>
      <br />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          auto
          as="a"
          href="/bus-schedule"
          style={{ backgroundColor: '#EADAFF', color: '#000' }}
        >
          Check Bus Schedule
        </Button>
      </div>
      <br />
      <div>
        {/* Updated Select Store button */}
        <Button
          auto
          onClick={handleSelectStore}
          style={{ backgroundColor: '#EADAFF', color: '#000' }}
        >
          Select Store
        </Button>
      </div>
    </>
  );
};

export default StoreDetails;
