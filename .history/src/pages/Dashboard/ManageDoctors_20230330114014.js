import React from 'react';
import { useQuery } from 'react-query';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery()
    return (
        <div>
            <div className="text-2xl"> Manage doctor </div>
        </div>
    );
};

export default ManageDoctors;