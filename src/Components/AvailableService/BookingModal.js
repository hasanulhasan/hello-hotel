import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ bookInfo, selectedDate, setBookInfo, refetch }) => {
  const { name, price, rooms, img } = bookInfo;
  const date = format(selectedDate, 'PP');

  const bookingHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const customerName = form.buyerName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const roomNumber = form.roomNumber.value;
    const booking = { name, customerName, phone, email, roomNumber, date }
    // console.log(booking);
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          console.log("success");
          setBookInfo(null);
          // toast.success('Booking successful');

          refetch();
        }
        else {
          // toast.error(data.message);
          console.log(data.message);
        }
      })
  }

  return (
    <div>
      <div className="">
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
          <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 className="text-gray-900 text-2xl font-extrabold leading-normal" id="exampleModalScrollableLabel">
                  {name}
                </h5>
                <button type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body relative p-4">
                <div className="p-2">
                  <p className="mb-3">
                    <img className="rounded-t-lg object-cover h-72 w-full" src={img} alt="hotel-room" />
                  </p>
                  <p className="text-gray-700 mb-2 text-lg">{rooms.length > 0 ? `${name} is Available Now` : 'Try another Day'}</p>
                  <p className="text-gray-700 mb-2 text-lg"><strong>{rooms.length}</strong> {rooms.length > 1 ? 'rooms' : 'room'} available</p>
                  <p className="text-gray-700 text-xl mb-2">Price <strong>${price}</strong></p>
                </div>
                <form onSubmit={bookingHandle} action="">
                  <input name='buyerName'
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="Your Name" required />
                  <input name='phone'
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="Your Phone" required />
                  <input name='email'
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="Your Email" required />
                  <input name='date'
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput1" placeholder="Date" value={date} />
                  <select name='roomNumber' class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded     transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" required>
                    {
                      rooms.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                    }
                  </select>
                  <div
                    className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end mt-2 p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button"
                      className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="submit"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;