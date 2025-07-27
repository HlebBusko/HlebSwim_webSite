import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { format } from 'date-fns';

function Booking2() {
  const [startValues, setStartValue] = useState({
    date: null,
    time: null,
  });

  return (
    <div className="px-5 flex flex-col">
      <DayPicker
        mode="single"
        selected={startValues.date}
        onSelect={(date) => setStartValue({ ...startValues, date: date })}
        disabled={[{ dayOfWeek: [3] }, { before: new Date() }]}
      ></DayPicker>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Pick Time"
          value={startValues.time}
          onChange={(time) => setStartValue({ ...startValues, time: time })}
          minTime={dayjs('2023-01-01T10:00')}
          maxTime={dayjs('2023-01-01T18:00')}
          ampm={false}
          minutesStep={30}
        />
      </LocalizationProvider>
      <div className="flex gap-4">
        <div>
          {startValues.date
            ? format(startValues.date, 'dd/MM/yyyy')
            : 'No date selected'}
        </div>
        <div>
          {startValues.time
            ? startValues.time.format('HH:mm')
            : 'No time selected'}
        </div>
      </div>
    </div>
  );
}

export default Booking2;
