import busMap from '../assets/bus-map.png';
import BackButton from './BackButton';


const BusMap = () => {

    return (
        <>
            <BackButton/>
            <h1>Bus Schedule</h1>
            <br></br>
            <h2>Comet Cruiser</h2>
            <br></br>
            <a href="https://services.utdallas.edu/transit/cruiser/">View Full Bus Schedule</a>
            <img 
                src={busMap}
                alt="Bus Map" 
                style={{ width: '100%', height: 'auto', marginTop: '20px'}}
            />
            <br></br>
            <p>Pickup: University Transit Center</p>
            <p>Dropoff: Meandering Way & Wester Way</p>
            <br></br>
            <p>Take Route 833 West</p>
            <br></br>
            <p>Available 7 a.m - 11 p.m M-Sat</p>
            <p>Available 10 a.m - 6 p.m Sun</p>
        </>
     );
}
 
export default BusMap;