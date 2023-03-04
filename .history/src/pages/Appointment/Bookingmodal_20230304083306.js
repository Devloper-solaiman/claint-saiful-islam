import React from 'react';

const BookingModal = ({ treatment }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='grid grid-cols-1 justify-items-center gap-3'>
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="btn" value="btn" className="btn btn-secondary  w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;