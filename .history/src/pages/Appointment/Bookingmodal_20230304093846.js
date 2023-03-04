import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;


        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Service Treatment: <span className='text-secondary text-2xl'>{name}</span></h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center gap-3 my-5'>
                        <input type="text" value={format(date, 'PP')} readOnly className="input input-bordered input-sm w-full max-w-xs" />
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Your Email" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;