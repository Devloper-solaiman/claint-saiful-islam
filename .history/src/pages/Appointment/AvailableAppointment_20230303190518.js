import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='text-secondary font-bold text-1xl text-center'>Available Appointment : {format(date, 'PP')} </h1>
            <div>
                {services.length}
            </div>
        </div>
    );
};

export default AvailableAppointment;