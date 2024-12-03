// BackButton.js

import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '8px',
        marginBottom: '10px',
      }}
    >
      <FaArrowLeft style={{ marginRight: '-4px' }} />
    </button>
  );
};

export default BackButton;
