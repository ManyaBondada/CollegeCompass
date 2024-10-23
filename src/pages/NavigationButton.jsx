import { Link } from 'react-router-dom';
import { Button } from "@nextui-org/react";

const NavigationButton = ({ link, label }) => {
  return (
    <Link to={link}>
      <Button
        color="secondary"
        style={{
          height: '50px',
          width: '200px',
          backgroundColor: 'secondary',
          borderRadius: '10px',
          fontSize: '16px',
          marginTop: '20px'
        }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default NavigationButton;