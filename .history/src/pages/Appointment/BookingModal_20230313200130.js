import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';
import auth from "./../../firebase.init";

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth)
    const formattedDate = format(date, 'PP');


    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patientName: user.displayName,
            Patient: user.email,
            phone: event.target.phone.value,

        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'contest-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                } else {
                    toast.error(`Already have and appointment or ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null)
            })

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
                        <select name='slot' className="select select-bordered select-sm w-full max-w-xs">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' readOnly value={user?.displayName || ''} className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" name='email' readOnly value={user?.email || ''} className="input input-bordered input-sm w-full max-w-xs" />
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