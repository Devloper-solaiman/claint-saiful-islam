import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import { DayPicker, Footer } from 'react-day-picker';
import chair from '../../assets/images/chair.png'
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <section>
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
            </div>
            <h1 className='font-bold text-3xl text-secondary'> Available Appointment:  {format(date, 'PP')}  </h1>
        </section>
    );
};

export default AppointmentBanner;