import { useState } from 'react';
import { Button, Input,  } from '@nextui-org/react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ScheduleVisit = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [contactMethod, setContactMethod] = useState(""); 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupOpen(true); // Open popup on form submission
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close popup
  };

  const handleContactToggle = (method) => {
    setContactMethod((prev) => (prev === method ? "" : method));
  };

  return (
    <>
      <h1 style={{ fontSize: 'clamp(25px, 11vw, 48px)' }}>Schedule Visit</h1>
      <br></br>
      <h2>Pick a date to go grocery shopping!</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            labelPlaceholder="Pick a Date"
            fullWidth
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2 className = "mb-2">Choose Contact Method</h2>

          <Button
            onClick={() => handleContactToggle("phone")}
            style={{
              backgroundColor: contactMethod === "phone" ? '#EADAFF' : '#f9f9f9',
              color: contactMethod === "phone" ? '#000' : '#666',
              border: '1px solid #ccc',
              margin: '0 4px',
            }}
          >
            📞 Phone
          </Button>

          <Button
            onClick={() => handleContactToggle("email")}
            style={{
              backgroundColor: contactMethod === "email" ? '#EADAFF' : '#f9f9f9',
              color: contactMethod === "email" ? '#000' : '#666',
              border: '1px solid #ccc',
              margin: '0 4px',
            }}
          >
            ✉️ Email
          </Button>

          <div style={{ marginTop: '20px' }}>
            {contactMethod === "phone" && (
              <Input
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                clearable
              />
            )}

            {contactMethod === "email" && (
              <Input
                placeholder="Enter email address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                fullWidth
                clearable
              />
            )}
          </div>
        </div>

        <Button type="submit" style={{ backgroundColor: '#EADAFF', color: '#000' }}>
          Submit
        </Button>
      </form>

      <Popup open={isPopupOpen} onClose={closePopup} modal>
        <div
          style={{
            padding: '30px',
            textAlign: 'center',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <h4 style={{ fontSize: '20px', marginBottom: '20px' }}>Confirmation</h4>
          <p style={{ marginBottom: '20px' }}>Your visit has been scheduled for {selectedDate}</p>
          {contactMethod === "phone" && <p>Phone Number: {phoneNumber}</p>}
          {contactMethod === "email" && <p>Email Address: {emailAddress}</p>}
          <p style={{ marginTop: '20px' }}>Closing this message will redirect you back to the homepage</p>
          <Button
            auto
            as="a"
            href="/home"
            color="primary"
            onClick={closePopup}
            style={{
              backgroundColor: '#EADAFF',
              color: '#000',
              marginTop: '20px',
            }}
          >
            OK
          </Button>
        </div>
      </Popup>
    </>
  );
};

export default ScheduleVisit;