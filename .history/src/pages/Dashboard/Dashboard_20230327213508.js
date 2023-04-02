import React from 'react';
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
                    <li><Link to='/dashboard/dashboardReview'>Sidebar Item 2</Link></li>
                    <li><Link to='/dashboard/dashboardUsers'>Sidebar Item 3</Link></li>
                    <li><Link to='/dashboard/history'>Sidebar Item 4</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;