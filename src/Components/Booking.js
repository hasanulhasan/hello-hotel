import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const Booking = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div className='my-12 container mx-auto'>
      <div >
        <h2 class="text-center font-medium leading-tight text-5xl">Book Your Room Today</h2>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <div className='bg-cyan-200 p-6 rounded-lg'>
            <DayPicker mode="single"
              selected={selected}
              onSelect={setSelected} />
          </div>
          <p className='text-secondary text-center text-xl font-bold'>You have selected {format(selected, 'PP')}</p>
        </div>

        <div>
          <img src='https://cdn.hotelplanner.com/Common/Images/_HotelPlanner/Home-Page/fade/sld6.jpg' alt='hotel-bg' className=" rounded-lg shadow-2xl" />
        </div>
      </div>

    </div>
  );
};

export default Booking;