import { Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import BackButton from "./BackButton";

const StoresNearMe = () => {
  // Array of store data
  const stores = [
    { id: 1, name: "Target", address: "16731 Coit Rd, Dallas, TX 75248" },
    { id: 2, name: "Walmart Supercenter", address: "425 Coit Rd, Plano, TX 75075" },
    { id: 3, name: "Kroger", address: "160 N Coit Rd, Richardson, TX 75080" }
  ];

  return (
    <div>
      <BackButton/>
      <h1>Stores Near Me</h1>
      <br></br>
      <h2>Stores in your area</h2>

      {stores.map((store, index) => (
        <Link key={index} to={`/find-stores/${store.id}`}>
          <Button
            color="secondary"
            style={{
              height: '85px',
              width: '350px',
              backgroundColor: '#EADAFF', 
              color: '#000',
              borderRadius: '10px',
              fontSize: '30px',
              paddingRight: '150px',
              paddingBottom: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginBottom: '15px',
              marginTop: '20px'
            }}
          >
            <span>{store.name}</span>
            <span style={{ fontSize: '15px', marginTop: '5px' }}>{store.address}</span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default StoresNearMe;