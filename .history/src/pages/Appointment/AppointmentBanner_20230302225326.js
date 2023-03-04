import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import { DayPicker, Footer } from 'react-day-picker';
import chair from '../../assets/images/chair.png'

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='chair' src={chair} className="max-w-sm rounded-lg ml-40 shadow-2xl" />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        footer={Footer}
                    ></DayPicker>
                </div>
            </div>
            Availeable
        </div>
    );
};

export default AppointmentBanner;