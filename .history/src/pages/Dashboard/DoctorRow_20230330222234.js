import React from 'react';

const DoctorRow = ({ doctor }) => {
    const { name, img, specialty } = doctor
    return (
        <tr>
            <th>1</th>
            <td><div className="avatar">
                <div className="w-24 rounded-full">
                    <img alt={name} src={img} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>Blue</td>

        </tr>
    );
};

export default DoctorRow;