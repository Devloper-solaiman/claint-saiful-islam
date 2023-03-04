import React, { Children } from 'react';

const SharedButton = ({ children }) => {
    return (
        <div>
            <button class="btn btn-primary">{Children}</button>
        </div>
    );
};

export default SharedButton;