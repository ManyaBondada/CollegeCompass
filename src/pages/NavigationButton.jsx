import { Link } from 'react-router-dom';
import { Button } from "@nextui-org/react";

const NavigationButton = ({ link, label }) => {
  return (
    <Link to={link}>
      <Button
        radius="full"
        style={{
          height: '50px',
          width: '100px',
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