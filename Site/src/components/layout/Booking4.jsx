import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Booking4() {
  const today = dayjs();
  const currentMonth = dayjs().startOf('month').month();
  const [pickedMonth, setPickedMonth] = useState(currentMonth);
  const selectedMonthObj = dayjs().month(Number(pickedMonth)).startOf('month');
  let startDay = mondayFirst(selectedMonthObj.day());
  let endDay = mondayFirst(selectedMonthObj.endOf('month').day());
  const daysInMonth = selectedMonthObj.daysInMonth();
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

  const nextMonth = dayjs().add(1, 'month').startOf('month').month();

  const [pickedDay, setPickedDay] = useState(null);
  const [displaySlots, setDisplaySlots] = useState(false);
  const [pickedTimeDay, setPickedTimeDay] = useState(null);
  const [bookedLessons, setBookedLessons] = useState(null);
  const [name, setName] = useState(null);
  const selectedMonth = Number(pickedMonth);

  function handlePickedTimeDay(day, slot) {
    setPickedTimeDay({
      day: day,
      time: slot,
      month: Number(pickedMonth),
    });
    setDisplaySlots(false);
  }

  function handlePickDay(date) {
    const selectedDate = dayjs().set('date', date).set('month', selectedMonth);
    if (pickedDay === date && displaySlots) {
      setDisplaySlots(false);
      setPickedDay(null);
      return;
    }
    if (
      selectedDate.isAfter(today, 'day') ||
      selectedDate.isSame(today, 'day')
    ) {
      setPickedDay(date);
      setDisplaySlots(true);
    }
  }

  function isSelectable(date) {
    const selectedDate = dayjs().set('date', date).set('month', selectedMonth);
    return (
      selectedDate.isSame(today, 'day') || selectedDate.isAfter(today, 'day')
    );
  }

  function handlePickedMonth(e) {
    const { value } = e.target;
    setPickedMonth(value);
    setPickedTimeDay(null);
    setPickedDay(null);
  }

  function handleName(e) {
    const { value } = e.target;
    setName(value);
  }

  function mondayFirst(day) {
    return day === 0 ? 7 : day;
  }

  async function sendDataToBackend() {
    if (!pickedTimeDay || !name) return;
    const newDay = {
      ...pickedTimeDay,
      name: name,
    };

    try {
      await axios.post('http://localhost:3000/bookings', newDay);
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
        bookedLessons.data.map((lesson) => ({
          day: lesson.day,
          time: lesson.time,
          month: lesson.month,
          name: name,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  });
  useEffect(() => {
    console.log(name);
  }, [name]);
  return (
    <div className="px-8 flex flex-col justify-center items-center bg-bgSection py-4">
      <div className="font-bold text-2xl">Book your lesson</div>
      <div className="flex mb-4">
        <div className="mr-4 w-full">
          <h1 className="text-xl text-center w-full font-semibold mb-1">
            Choose the month
          </h1>
          <select
            className="w-full border h-12 py-2 px-4 rounded-xl"
            value={pickedMonth}
            onChange={(e) => handlePickedMonth(e)}
            name=""
            id=""
          >
            <option value={currentMonth}>
              {today.startOf('month').format('MMMM')}
            </option>
            <option value={nextMonth}>
              {today.startOf('month').add(1, 'month').format('MMMM')}
            </option>
          </select>
        </div>
        <div className="flex justify-center items-end gap-4">
          <input
            type="text"
            className="border h-13 rounded-xl pl-4"
            placeholder="Your name"
            onChange={(e) => handleName(e)}
          />
          <div
            className={`${pickedTimeDay ? 'px-4' : 'w-30'} px-6 h-12 rounded-xl items-center justify-center border flex gap-4`}
          >
            {pickedTimeDay && pickedTimeDay.day}
            {pickedTimeDay && `.${selectedMonthObj.format('MM')}`}
            <div>{pickedTimeDay && pickedTimeDay.time}</div>
          </div>
          <button
            onClick={() => {
              if (pickedTimeDay && name) {
                sendDataToBackend();
              }
            }}
            className={`h-13 py-2 px-6 rounded-xl  ${pickedTimeDay && name ? 'bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer hover:shadow-lg' : 'bg-gray-200 shadow'}`}
          >
            Book
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 w-full sm:w-[350px]">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div
            key={day}
            className={`${day === 'Sat' || day === 'Sun' ? 'text-red-500 border-black' : ''} text-center font-semibold`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 w-full sm:w-[350px] sm:h-[250px]">
        {startEmptyBoxes.map((box, i) => (
          <div className="py-2 text-center " key={`start-${i}`}>
            {box}
          </div>
        ))}
        {mergedArray.map((item) => {
          const todayBookedLessons = bookedLessons
            ? bookedLessons
                .filter(
                  (lesson) =>
                    lesson.day === item.date &&
                    Number(lesson.month) === Number(pickedMonth)
                )
                .map((lesson) => lesson.time)
            : [];
          return (
            <div key={item.date}>
              <div
                onClick={() => {
                  isSelectable(item.date) && handlePickDay(item.date);
                }}
                className={`relative flex justify-center items-center rounded-[50%] w-[100%] h-11 ${item.date === today.date() && pickedMonth === currentMonth ? 'font-bold' : ''}  ${pickedDay === item.date ? 'bg-blue-700 text-white font-semibold' : ''}  text-center ${isSelectable(item.date) ? 'cursor-pointer' : 'text-gray-500 cursor-not-allowed'} transition-all duration-200 ease-in-out`}
              >
                {item.date}
              </div>
              <div
                className={`absolute lg:left-100 sm:right-50 right-0 bg-blue-100 z-30 py-2 px-4  ${displaySlots && item.date === pickedDay ? 'block' : 'hidden'}`}
              >
                <div className="text-center font-semibold">
                  Pick available time
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6">
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
                          className={`py-2 px-2 flex justify-center items-center rounded-lg ${isBooked ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'hover:bg-blue-400 hover:text-white cursor-pointer'}`}
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
  );
}

export default Booking4;
