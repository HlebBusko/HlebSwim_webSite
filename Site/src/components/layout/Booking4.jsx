import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Booking4() {
  const today = dayjs();
  let startDay = mondayFirst(today.startOf('month').day());
  let endDay = mondayFirst(today.endOf('month').day());
  const daysInMonth = today.daysInMonth();
  const elements = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const startEmptyBoxes = Array.from({ length: startDay - 1 });
  const endEmptyBoxes = Array.from({ length: 7 - endDay });
  const timeSlots = [];
  let time = today.hour(8).minute(0).second(0);
  while (time.isBefore(today.hour(20))) {
    timeSlots.push(time.format('HH:mm'));
    time = time.add(30, 'minute');
  }
  const mergedArray = elements.map((day) => ({
    date: day,
    slots: [...timeSlots],
  }));

  const [pickedDay, setPickedDay] = useState(null);
  const [displaySlots, setDisplaySlots] = useState(false);
  const [pickedTimeDay, setPickedTimeDay] = useState(null);
  const [bookedLessons, setBookedLessons] = useState(null);

  function handlePickedTimeDay(day, slot) {
    setPickedTimeDay({ day: day, time: slot });
    setDisplaySlots(false);
  }

  function handlePickDay(date) {
    if (pickedDay === date && displaySlots) {
      setDisplaySlots(false);
      return;
    }
    if (date >= today.date()) {
      setPickedDay(date);
      setDisplaySlots(true);
    }
  }

  function mondayFirst(day) {
    return day === 0 ? 7 : day;
  }

  async function sendDataToBackend() {
    if (!pickedTimeDay) return;
    try {
      await axios.post('http://localhost:3000/bookings', pickedTimeDay);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      const bookedLessons = await axios.get('http://localhost:3000/bookings');
      console.log(bookedLessons.data);
      setBookedLessons(
        bookedLessons.data.map((day) => ({ day: day.day, time: day.time }))
      );
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log('baba', bookedLessons);
  }, [bookedLessons]);
  return (
    <div className="flex">
      <div>
        <div className="grid grid-cols-7 w-[350px]">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div
              key={day}
              className={`${day === 'Sat' || day === 'Sun' ? 'text-red-500 border-black' : ''} text-center font-semibold`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 w-[350px] h-[250px]">
          {startEmptyBoxes.map((box, i) => (
            <div className="py-2 text-center " key={`start-${i}`}>
              {box}
            </div>
          ))}
          {mergedArray.map((item) => {
            const todayBookedLessons = bookedLessons
              ? bookedLessons
                  .filter((lesson) => lesson.day === item.date)
                  .map((lesson) => lesson.time)
              : [];
            return (
              <div key={item.date}>
                <div
                  onClick={() => {
                    item.date >= today.date() && handlePickDay(item.date);
                  }}
                  className={`relative flex justify-center items-center rounded-[50%] w-[100%] h-11 ${item.date === today.date() ? 'font-bold' : ''}  ${pickedDay === item.date ? 'bg-blue-700 text-white font-semibold' : ''}  text-center ${item.date < today.date() ? 'text-gray-500' : 'cursor-pointer'} transition-all duration-200 ease-in-out`}
                >
                  {item.date}
                </div>
                <div
                  className={`absolute left-0 bg-blue-100 z-30 py-2 px-4 bot-0 ${displaySlots && item.date === pickedDay ? 'block' : 'hidden'}`}
                >
                  <div className="text-center font-semibold">
                    Pick available time
                  </div>
                  <div className="grid grid-cols-6">
                    {item.slots.map((slot, i) => {
                      const isBooked = todayBookedLessons.includes(slot);
                      return (
                        <div
                          key={`slot-${i}`}
                          onClick={() =>
                            !isBooked && handlePickedTimeDay(item.date, slot)
                          }
                        >
                          <div
                            className={`py-2 px-2  rounded-lg ${isBooked ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'hover:bg-blue-400 hover:text-white cursor-pointer'}`}
                          >
                            {slot}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          {endEmptyBoxes.map((box, i) => (
            <div className="py-2 text-center" key={`end-${i}`}>
              {box}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="w-30 h-10 border">
          {pickedTimeDay && pickedTimeDay.day}{' '}
          {pickedTimeDay && pickedTimeDay.time}
        </p>
        <button
          onClick={pickedTimeDay && sendDataToBackend}
          className={`border py-2 px-4 rounded-xl  ${pickedTimeDay ? 'bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer' : 'bg-gray-200'}`}
        >
          Book the lesson
        </button>
      </div>
    </div>
  );
}

export default Booking4;
