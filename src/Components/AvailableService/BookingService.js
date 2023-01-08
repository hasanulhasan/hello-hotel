import React from 'react';
import BookingModal from './BookingModal';

const BookingService = ({ service }) => {
  console.log(service)
  const { name, price, slots, img } = service
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg object-cover h-72 w-full" src={img} alt="hotel-room" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-700 text-base mb-3">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <p className="text-gray-700 mb-2 text-lg">{slots.length > 0 ? 'Available' : 'Try another Day'}</p>
          <p className="text-gray-700 mb-2 text-lg"><strong>{slots.length}</strong> {slots.length > 1 ? 'rooms' : 'room'} available</p>
          <div className='flex justify-between'>
            <p className="text-gray-700 text-xl mb-2">Price <strong>${price}</strong></p>
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingService;