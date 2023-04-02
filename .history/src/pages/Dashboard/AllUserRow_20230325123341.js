import React from 'react';

const AllUserRow = ({ user, index }) => {
    const { email } = user
    return (

        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>


    );
};

export default AllUserRow;