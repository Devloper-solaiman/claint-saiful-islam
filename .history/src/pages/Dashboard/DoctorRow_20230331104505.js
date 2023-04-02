import React from 'react';

const DoctorRow = ({ doctor }) => {
    const { name, img, specialty } = doctor
    return (
        <tr>
            <th>1</th>
            <td><div className="avatar">
                <div className="w-8 rounded-full">
                    <img alt={name} src={img} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button className="btn btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 16 16" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>

        </tr>
    );
};

export default DoctorRow;