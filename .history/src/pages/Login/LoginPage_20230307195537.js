import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full max-w-md">
                <h1 className="text-2xl text-center mb-6">Login</h1>
                <div className="ml-24 mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">
                        Email
                    </label>
                    <input
                        className="appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        autocomplete="off"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="mb-6 ml-24">
                    <label className="block text-gray-700 mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="appearance-none border rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        autocomplete="off"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-6 ml-24">
                    <label className="block text-gray-700 mb-2" htmlFor="password">
                        Sign in
                    </label>
                    <input
                        className="appearance-none border rounded w-80 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        autocomplete="off"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-accent text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        LOGIN
                    </button>
                </div>
                <div className=' font-bold text-green-300 mt-10'>
                    <Link to='/RegisterPage'>Plz Register!!</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;