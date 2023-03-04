import React from 'react';
import SharedButton from "./../Share/SharedButton";

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg mx-10 bg-base-100 shadow-2xl">
            <div className="card-body ml-16">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length} slots available </p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Book Appointment</button>                </div>
            </div>
        </div>
    );
};

export default Service;