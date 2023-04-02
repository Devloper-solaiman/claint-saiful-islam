import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, img, specialty, email } = doctor
    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`doctor ${name} is Deleted`)
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-10  rounded-full">
                    <img alt={name} src={img} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td> <button onClick={() => handleDelete(email)} className="btn btn-primary btn-xs" >delete</button> </td>

        </tr>
    );
};

export default DoctorRow;