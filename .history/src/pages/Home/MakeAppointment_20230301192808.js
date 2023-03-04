import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center '>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h4 className='text-secondary font-bold'>Appointment</h4>
                <h1 className='text-3xl text-accent'>Make an appointment Today</h1>
            </div>
        </section>
    );
};

export default MakeAppointment;