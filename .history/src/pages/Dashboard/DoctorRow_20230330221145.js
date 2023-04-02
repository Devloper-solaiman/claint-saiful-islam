import React from 'react';

const DoctorRow = ({ doctor }) => {
    return (
        <tr>
            <th>1</th>
            <td>{doctor.length}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
        </tr>
    );
};

export default DoctorRow;