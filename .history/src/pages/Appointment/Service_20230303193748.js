import React from 'react';
import SharedButton from "./../Share/SharedButton";

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <SharedButton>Booking Now</SharedButton>
                </div>
            </div>
        </div>
    );
};

export default Service;