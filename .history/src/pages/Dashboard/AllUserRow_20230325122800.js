import React from 'react';

const AllUserRow = ({ user }) => {
    const { email } = user
    return (
        <tbody>
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
            </tr>

        </tbody>
    );
};

export default AllUserRow;