import React from 'react';

const Profile = () => {
    return (
        <div>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">upload photo</span>
                    </label>
                    <label class="block">
                        <span class="sr-only">Choose profile photo</span>
                        <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Profile;