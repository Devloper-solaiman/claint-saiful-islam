import React from 'react';

const AllUserRow = ({ user }) => {
    return (
        <div>
            <tr>
                <th>{user.displayName}</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
            </tr>
        </div>
    );
};

export default AllUserRow;