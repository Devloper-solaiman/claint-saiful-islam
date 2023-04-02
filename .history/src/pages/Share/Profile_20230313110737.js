import React from 'react';

const Profile = () => {
    return (
        <div>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered" />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Profile;