import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex items-center justify-center mt-40">
            <PropagateLoader color="primary" />
        </div >
    );
};

export default Loading;