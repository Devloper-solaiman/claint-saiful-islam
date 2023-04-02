import React from 'react';

const AllUserRow = ({ user }) => {

    return (

        <tr>
            <th>1</th>
            <td>{user.email}</td>
            <td><button className="btn btn-xs">Make Admin</button>
            </td>
            <td><button className="btn btn-xs">Remove Admin</button>
            </td>
        </tr>


    );
};

export default AllUserRow;