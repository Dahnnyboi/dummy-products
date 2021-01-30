import React from 'react';
import { Link } from 'react-router-dom';
import showcase from '../../assets/images/showcase.svg'

function Showcase() {
    return (
        <div className="flex flex-col lg:flex-row items-center w-11/12 pt-12 mx-auto md:w-10/12 2xl:w-8/12">
            <div className="m-8 lg:w-3/6">
                <img src={showcase} alt="showcase"/>
            </div>
            <div className="lg:w-3/6 font-custom text-center lg:text-left">
                <h1 className="text-5xl font-extrabold  text-green-800">Dummy Products</h1>
                <p className="mb-4">This is an dummy e-commerce consuming this <a className="italic underline text-blue-600" href="https://dummyproducts-api.herokuapp.com/">dummyproducts-api</a></p>
                <Link className="border-solid border-2 border-green-800 rounded-sm px-4 py-2 text-green-800 font-semibold hover:bg-green-800 hover:text-white" to="/products">
                    View products
                </Link>
            </div>
        </div>
    )
}

export default Showcase
