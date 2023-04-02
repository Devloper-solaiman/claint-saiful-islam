import React from 'react';

const Profile = () => {
    return (
        <div>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">upload photo</span>
                    </label>
                    <label className="input-group input-group-xs">
                        <span>Go folder</span>
                        <input type="upload" className="input input-bordered" />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Profile;