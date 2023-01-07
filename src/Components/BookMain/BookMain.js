import React, { useState } from 'react';
import AvailableService from '../AvailableService/AvailableService';
import Booking from '../Booking';

const BookMain = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <Booking selectedDate={selectedDate} setSelectedDate={setSelectedDate}></Booking>
      <AvailableService selectedDate={selectedDate}></AvailableService>
    </div>
  );
};

export default BookMain;