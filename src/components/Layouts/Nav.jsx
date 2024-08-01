import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-green-600">
            <div className="flex justify-between items-center px-4 py-2">
                <div className="text-gray-200 font-bold text-xl">
                    Logo
                </div>
                <div className="flex space-x-4 text-gray-200 hidden md:flex">
                    <Link className="font-semibold" to="/users/home">Home</Link>
                    <Link className="font-semibold" to="#">About</Link>
                    <Link className="font-semibold" to="#">Services</Link>
                    <Link className="font-semibold" to="#">Contact</Link>
                </div>
                <div className="flex space-x-4 hidden md:flex">
                    <Link className="font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded" to="/users/login">Login</Link>
                    <Link className="font-semibold bg-blue-700 text-gray-100 px-3 py-1 rounded" to="/users/register">Register</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col space-y-2 text-center bg-green-700 text-gray-200 py-2 fixed w-full">
                    <Link className="font-semibold" to="/users/home" onClick={toggleMenu}>Home</Link>
                    <Link className="font-semibold" to="#" onClick={toggleMenu}>About</Link>
                    <Link className="font-semibold" to="#" onClick={toggleMenu}>Services</Link>
                    <Link className="font-semibold" to="#" onClick={toggleMenu}>Contact</Link>
                    <Link className="font-semibold bg-gray-200 text-gray-800 px-3 py-1 rounded mx-2" to="/users/login" onClick={toggleMenu}>Login</Link>
                    <Link className="font-semibold bg-blue-700 text-gray-100 px-3 py-1 rounded mx-2" to="/users/register" onClick={toggleMenu}>Register</Link>
                </div>
            )}
        </nav>
    );
}
