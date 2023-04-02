import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <h1 className='text-2xl text-purple-600 font-bold'>welcome to your Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dashboard/review">Review</Link></li>
                    <li><Link to="/dashboard/users">All Users</Link></li>
                    <li><Link to="/dashboard/history">All History</Link></li>
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;