import React from 'react';
import { ClockLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
                role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading....</span>
                <ClockLoader
                    loading=lo
                >

                </ClockLoader>
            </div>
        </div >
    );
};

export default Loading;