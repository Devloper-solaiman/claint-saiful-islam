import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Appointment = () => {
    const [date, setDate] = useState(new date())
    return (
        <div>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
            />;
        </div>
    );
};

export default Appointment;