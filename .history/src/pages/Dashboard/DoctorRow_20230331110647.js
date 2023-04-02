import React from 'react';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, img, specialty, email } = doctor
    const handleDelete = email => {
        fetch(``)
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-10  rounded-full">
                    <img alt={name} src={img} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button className="btn btn-circle btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>

        </tr>
    );
};

export default DoctorRow;