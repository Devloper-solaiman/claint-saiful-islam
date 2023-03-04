import React from 'react';

const SharedButton = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-lime-600 to-teal-400">
            {children}
        </button>
    );
};

export default SharedButton;