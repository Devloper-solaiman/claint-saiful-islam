import React from 'react';

const Profile = () => {
    return (
        <div className='ml-80 mt-14'>
            <form className="flex items-center space-x-6">
                <div className="shrink-0">
                    <img alt='#' className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" />
                </div>
                <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                </label>

                <label className="label">
                    <span className="label-text">What is your name?</span>
                    <span className="label-text-alt">Top Right label</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />


            </form>
        </div>
    );
};

export default Profile;