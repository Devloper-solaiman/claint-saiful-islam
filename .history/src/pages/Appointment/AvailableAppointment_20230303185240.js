import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <h1 className='text-secondary font-bold text-1xl text-center'>Available Appointment : {format(date, 'PP')} </h1>
            <div>

            </div>
        </div>
    );
};

export default AvailableAppointment;