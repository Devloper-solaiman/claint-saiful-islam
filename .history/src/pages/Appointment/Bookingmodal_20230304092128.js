import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Service Treatment: <span className='text-secondary text-2xl'>{name}</span></h3>
                    <form className='grid grid-cols-1 justify-items-center gap-3 my-5'>
                        <input type="text" value={format(date, 'PP')} readOnly className="input input-bordered input-sm w-full max-w-xs" />
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            {
                                slots.map()
                            }
                        </select>                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;