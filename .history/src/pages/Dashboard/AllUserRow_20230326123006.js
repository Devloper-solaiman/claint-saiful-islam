import React from 'react';
import { toast } from "react-toastify";

const AllUserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success(`successfully made an admin ${email}`)
            })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>
            </td>
            <td><button className="btn btn-xs">Remove Admin</button>
            </td>
        </tr>


    );
};

export default AllUserRow;