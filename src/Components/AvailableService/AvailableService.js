import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loader from '../Loader';
import BookingModal from './BookingModal';
import BookingService from './BookingService';


const AvailableService = ({ selectedDate }) => {
  const [bookInfo, setBookInfo] = useState(null);
  // console.log(bookInfo);
  const date = format(selectedDate, 'PP');

  const { data: services = [], refetch, isLoading } = useQuery({
    queryKey: ['services', date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/services?date=${date}`)
      const data = await res.json();
      return data
    }
  });

  if (isLoading) {
    return (<Loader></Loader>)
  }

  return (
    <div className='mx-auto w-5/6'>
      <p className='text-secondary text-center text-xl font-bold'>You have selected {format(selectedDate, 'PP')}</p>
      <div className='grid gap-8 my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          services.map(service => <BookingService
            key={service._id}
            service={service}
            setBookInfo={setBookInfo}
          ></BookingService>)
        }
      </div>
      {bookInfo &&
        <BookingModal
          selectedDate={selectedDate}
          bookInfo={bookInfo}
          setBookInfo={setBookInfo}
          refetch={refetch}
        ></BookingModal>
      }
    </div>
  );
};

export default AvailableService;