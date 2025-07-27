import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { format } from 'date-fns';

function Booking() {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(dayjs());

  return (
    <div className="px-5 flex flex-col">
      <DayPicker
        mode="single"
        selected={startDate}
        onSelect={(date) => setStartDate(date)}
        disabled={[{ dayOfWeek: [3] }, { before: new Date() }]}
      ></DayPicker>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Pick Time"
          value={startTime}
          onChange={(newValue) => setStartTime(newValue)}
        />
      </LocalizationProvider>
      <p>
        {format(startDate, 'dd/MM/yyyy')} {startTime.format('HH:mm')}
      </p>
    </div>
  );
}

export default Booking;
