import React from 'react';

const AllUserRow = ({ user }) => {
    const { email } = user
    return (
        <div>
            <tr>
                <th>2</th>
                <td>{email}</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
            </tr>
        </div>
    );
};

export default AllUserRow;