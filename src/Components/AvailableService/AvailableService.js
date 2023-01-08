import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import BookingModal from './BookingModal';
import BookingService from './BookingService';


const AvailableService = ({ selectedDate }) => {

  const { data: services = [], refetch, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await fetch(`services.json`)
      const data = await res.json();
      return data
    }
  });


  return (
    <div className='mx-auto w-5/6'>
      <p className='text-secondary text-center text-xl font-bold'>You have selected {format(selectedDate, 'PP')}</p>
      <div className='grid gap-8 my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          services.map((service, i) => <BookingService key={service.i} service={service}></BookingService>)
        }
      </div>
      {
        <BookingModal></BookingModal>
      }
    </div>
  );
};

export default AvailableService;