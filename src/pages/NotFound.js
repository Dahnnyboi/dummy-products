import React from 'react'
import Shell from '../components/global/Shell'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <Shell>
                <div className="w-full mt-4 text-center">
                    <h1 className="text-4xl">Page not found!</h1>
                    <h1 className="text-md mb-4">The page you want to access is not existing</h1>
                    <Link to="/products" className="bg-green-300 text-green-800 font-medium py-2 px-4 rounded">Back to products</Link>
                </div>
            </Shell>
        </div>
    )
}

export default NotFound
