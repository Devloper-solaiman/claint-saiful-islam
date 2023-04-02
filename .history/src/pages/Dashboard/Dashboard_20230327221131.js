import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-start flex flex-col items-center justify-center">
                <div>Welcome to my dashboard</div>

                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-2 w-52 bg-base-100 text-base-content">

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