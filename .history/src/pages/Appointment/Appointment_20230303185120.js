import React, { useState } from 'react';
import Footer from '../Share/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;