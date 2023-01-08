import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const Booking = ({ selectedDate, setSelectedDate }) => {


  return (
    <div className='my-12 container mx-auto'>
      <div className='my-8'>
        <h2 className="text-center font-medium leading-tight text-5xl">Book Your Room Today</h2>
      </div>

      <div className="grid grid-cols-2">
        <div className='w-1/2 flex justify-end'>
          <div className='bg-cyan-200 p-6 rounded-lg justify-end'>
            <DayPicker mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate} />
            <p className='text-secondary text-center text-xl font-bold'>You have selected {format(selectedDate, 'PP')}</p>
          </div>
        </div>

        <div>
          <img src='https://cdn.hotelplanner.com/Common/Images/_HotelPlanner/Home-Page/fade/sld6.jpg' alt='hotel-bg' className=" rounded-lg shadow-2xl" />
        </div>
      </div>

    </div>
  );
};

export default Booking;