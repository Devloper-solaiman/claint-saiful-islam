import React from 'react';

const DoctorRow = ({ doctor }) => {
    const
    return (
        <tr>
            <th>1</th>
            <td><div className="avatar">
                <div className="w-24 rounded-full">
                    <img alt={name} src={img} />
                </div>
            </div></td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
        </tr>
    );
};

export default DoctorRow;