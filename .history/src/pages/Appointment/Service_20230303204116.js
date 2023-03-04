import React from 'react';
import SharedButton from "./../Share/SharedButton";

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg mx-10 bg-base-100 shadow-2xl">
            <div className="card-body ml-16">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'> No Slots Available</span>
                }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} available </p>
                <div className="card-actions justify-start">
                    <button disabled={slots.length === 0} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;