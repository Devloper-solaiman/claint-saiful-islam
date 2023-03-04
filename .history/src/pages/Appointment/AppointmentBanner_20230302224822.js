import React from 'react';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'

const AppointmentBanner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='chair' src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <DayPicker></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;