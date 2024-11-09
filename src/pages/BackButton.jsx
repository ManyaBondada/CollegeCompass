import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    
    const navigate = useNavigate();

    return ( 
        <button 
            onClick={() => navigate(-1)} 
            style={{ 
                display: 'flex', 
                alignItems: 'center', 
                border: 'none', 
                background: 'none', 
                cursor: 'pointer', 
                padding: '8px',
                marginBottom: '10px' }}
        >
            <FaArrowLeft style={{ marginRight: '-4px' }} />
        </button>
     );
}
 
export default BackButton;