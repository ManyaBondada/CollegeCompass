import { useState } from 'react';
import { Checkbox, Button, Input } from '@nextui-org/react';



const ScheduleVisit = () => {
  const [selectedDate, setSelectedDate] = useState(""); // Stores the selected date
  const [phoneReminder, setPhoneReminder] = useState(false); // Checkbox state for phone reminder
  const [emailReminder, setEmailReminder] = useState(false); // Checkbox state for email reminder
  const [phoneNumber, setPhoneNumber] = useState(""); // Stores phone number if phone reminder is checked
  const [emailAddress, setEmailAddress] = useState(""); // Stores email address if email reminder is checked

  // Handle form submission
  const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
          date: selectedDate,
          phoneReminder,
          emailReminder,
          phoneNumber: phoneReminder ? phoneNumber : "",
          emailAddress: emailReminder ? emailAddress : ""
      };
      console.log("Form Data:", formData);
      // You can process the form data here (e.g., send to an API)
  };

  return (
      <>
          <h1 style={{ fontSize: 'clamp(25px, 11vw, 48px)' }}>Schedule Visit</h1>
          <br></br>
          <h2>Pick a date to go grocery shopping!</h2>
          <br />
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
                    <h3>Set Reminder</h3>
                    <br></br>

                    {/* Phone Reminder Checkbox */}
                    <Checkbox
                        isSelected={phoneReminder}
                        onChange={() => setPhoneReminder(!phoneReminder)} // Toggle state
                    >
                        Phone
                    </Checkbox>
                    {phoneReminder && (
                        <Input
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            fullWidth
                            clearable
                            style={{ marginTop: '10px' }}
                        />
                    )}

                    <br></br>

                    {/* Email Reminder Checkbox */}
                    <Checkbox
                        isSelected={emailReminder}
                        onChange={() => setEmailReminder(!emailReminder)} // Toggle state
                        style={{ marginTop: '20px' }}
                    >
                        Email
                    </Checkbox>
                    {emailReminder && (
                        <Input
                            placeholder="Enter email address"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            fullWidth
                            clearable
                            style={{ marginTop: '10px' }}
                        />
                    )}
                </div>

                <Button type="submit" style={{ backgroundColor: '#EADAFF', color: '#000' }}>
                    Submit
                </Button>
            </form>
        </>
    );
};

export default ScheduleVisit;