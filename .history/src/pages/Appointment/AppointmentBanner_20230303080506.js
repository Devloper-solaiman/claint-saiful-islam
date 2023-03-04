import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='chair' src={chair} className="max-w-sm ml-40 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='string'
                        />
                    </div>
                </div>
            </div>
            <p>Available Appointment : { } </p>
        </section>
    );
};

export default AppointmentBanner;