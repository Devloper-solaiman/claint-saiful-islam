import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-start justify-start">
                <h1 className='text-3xl font-bold text-purple-600 my-5 ml-5'>Welcome to my dashboard</h1>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/dashboard/dashboardReview'>Review</Link></li>
                    <li><Link to='/dashboard/dashboardUsers'>Users</Link></li>
                    <li><Link to='/dashboard/history'>History</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;