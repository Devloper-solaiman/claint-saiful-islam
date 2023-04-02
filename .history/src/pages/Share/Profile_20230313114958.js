import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='ml-80 mt-14'>
            <form className="grid grid-cols-1 gap-5">
                <div>
                    <div className="shrink-0">
                        <img alt='#' className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" />
                    </div>
                    <label className="block">
                        <span className="sr-only">update profile photo</span>
                        <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                    </label>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Old Name</span>
                    </label>
                    <input type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" />

                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Update Name</span>
                    </label>
                    <input type="text" className="input input-bordered w-full max-w-xs" />

                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" className="input input-bordered w-full max-w-xs" />

                </div>
            </form>
        </div>
    );
};

export default Profile;