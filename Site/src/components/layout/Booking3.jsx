import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Booking3() {
  const [dateTimeValue, setDateTimeValue] = useState(null);
  const [bookedTimes, setBookedTimes] = useState([]);

  async function fetchBooking() {
    try {
      const bookedLessons = await axios.get('http://localhost:3000/bookings');

      console.log(bookedLessons.data);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  }

  async function handlePost() {
    if (!dateTimeValue) return;
    const isoString = dateTimeValue;
    const postData = { dateTime: isoString };
    try {
      const response = await axios.post(
        'http://localhost:3000/bookings',
        postData
      );
      fetchBooking();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBooking();
  }, []);
  useEffect(() => {
    console.log('Booked times', bookedTimes);
  }, [bookedTimes]);
  return (
    <div className="flex gap-2">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          label="Pick class date and time"
          value={dateTimeValue}
          onChange={(dateTime) => setDateTimeValue(dateTime)}
          dateAdapter={AdapterDayjs}
          ampm={false}
          minutesStep={30}
          minTime={dayjs().set('hour', 8)}
          maxTime={dayjs().set('hour', 17)}
          minDate={dayjs()}
          slotProps={{ textField: { variant: 'outlined' } }}
          skipDisabled={true}
        ></DateTimePicker>
      </LocalizationProvider>
      <button
        onClick={handlePost}
        className="border bg-blue-500 text-white py-2 px-4 rounded-2xl cursor-pointer hover:bg-blue-600"
      >
        Book the lesson
      </button>
    </div>
  );
}

export default Booking3;
