import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/dummy logo.svg';

function Navbar() {
    return (
        <nav className="z-10 w-screen bg-green-300 text-white py-4 shadow-md fixed">
            <div className="w-11/12 mx-auto md:w-10/12 2xl:w-8/12 flex flex-row">
                <Link to="/" className="font-custom text-green-700 font-bold text-md md:text-lg flex-grow">
                    <img src={logo} alt="logo" className="w-8 inline-block mr-4"/>
                    
                    Dummy Products
                </Link>
                <Link className="border-solid border-2 border-white rounded-sm px-4 text-white font-medium hover:bg-green-800 hover:border-solid hover:border-green-800 flex-none" to="/products">
                    Products
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
