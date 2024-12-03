// ScheduleVisit.js

import { useState } from 'react';
import { Button, Input, DatePicker } from '@nextui-org/react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BackButton from './BackButton';
import { parseDate } from '@internationalized/date';
import { useNavigate } from 'react-router-dom';

const ScheduleVisit = () => {
  // Get today's date
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const [selectedDate, setSelectedDate] = useState(parseDate(formattedDate)); // Init today's date
  const [contactMethod, setContactMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactMethod === 'phone' && !validatePhoneNumber(phoneNumber)) {
      alert(
        'Please enter a valid 10-digit phone number.\nThe following formats are accepted: \n999 999 9999 \n999-999-9999'
      );
      return;
    }

    if (contactMethod === 'email' && !validateEmail(emailAddress)) {
      alert(
        'Please enter a valid email address.\nThe following format is accepted: johndoe@gmail.com'
      );
      return;
    }

    setIsPopupOpen(true); // Open popup on form submission
  };

  const closePopup = () => {
    setIsPopupOpen(false); // Close popup
  
    // Mark the 'schedule-visit' subtask as completed in localStorage
    const storedCheckedSteps =
      JSON.parse(localStorage.getItem('groceryShoppingSteps')) || [];
    if (!storedCheckedSteps.includes('schedule-visit')) {
      storedCheckedSteps.push('schedule-visit');
      localStorage.setItem(
        'groceryShoppingSteps',
        JSON.stringify(storedCheckedSteps)
      );
    }
  };  

  const handleContactToggle = (method) => {
    setContactMethod((prev) => (prev === method ? '' : method));
  };

  const validatePhoneNumber = (number) => {
    const trimmedNumber = number.replace(/\s+/g, '');
    const phoneRegex = new RegExp('^\\d{3}-\\d{3}-\\d{4}$|^\\d{10}$');
    return phoneRegex.test(trimmedNumber);
  };

  const validateEmail = (email) => {
    const emailRegex = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    return emailRegex.test(email);
  };

  return (
    <>
      <BackButton />
      <h1 className="text-4xl font-bold">Schedule Visit</h1>
      <br />
      <h2 className="mb-4 font-bold">Pick a date to go grocery shopping!</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <DatePicker
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholder="Pick a Date"
            fullWidth
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2 className="mb-2 font-bold">Choose Contact Method</h2>
          <p className="mb-4">
            We'll use this information to remind you on the day of your trip!
            This is completely optional.
          </p>

          <Button
            onClick={() => handleContactToggle('phone')}
            style={{
              backgroundColor:
                contactMethod === 'phone' ? '#EADAFF' : '#f9f9f9',
              color: contactMethod === 'phone' ? '#000' : '#666',
              border: '1px solid #ccc',
              margin: '0 4px',
            }}
          >
            📞 Phone
          </Button>

          <Button
            onClick={() => handleContactToggle('email')}
            style={{
              backgroundColor:
                contactMethod === 'email' ? '#EADAFF' : '#f9f9f9',
              color: contactMethod === 'email' ? '#000' : '#666',
              border: '1px solid #ccc',
              margin: '0 4px',
            }}
          >
            ✉️ Email
          </Button>

          <div style={{ marginTop: '20px' }}>
            {contactMethod === 'phone' && (
              <Input
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                clearable
              />
            )}

            {contactMethod === 'email' && (
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

        <Button
          type="submit"
          style={{ backgroundColor: '#EADAFF', color: '#000' }}
        >
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
            color: '#000',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <h4 style={{ fontSize: '20px', marginBottom: '20px' }}>
            Confirmation
          </h4>
          <p style={{ marginBottom: '20px' }}>
            Your visit has been scheduled for{' '}
            {selectedDate ? selectedDate.toString() : 'No date selected'}
          </p>
          {contactMethod === 'phone' && <p>Phone Number: {phoneNumber}</p>}
          {contactMethod === 'email' && (
            <p>Email Address: {emailAddress}</p>
          )}
          <p style={{ marginTop: '20px' }}>
            Closing this message will redirect you back to the previous page.
          </p>
          <Button
            auto
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
