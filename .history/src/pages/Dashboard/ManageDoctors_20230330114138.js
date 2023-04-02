import React from 'react';
import { useQuery } from 'react-query';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('').then(res => res.json()))
    return (
        <div>
            <div className="text-2xl"> Manage doctor </div>
        </div>
    );
};

export default ManageDoctors;