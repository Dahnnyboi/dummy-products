import React from 'react'

function LoadingProduct() {
    return (
        <div className="bg-white rounded shadow-lg">
            <div className="animate-pulse">
                <div className="w-full h-64 bg-green-500"></div>
                <div className="p-3 md:p-4">
                    <div className="w-1/4 h-4 bg-green-500 rounded my-1"></div>
                    <div className="w-full h-4 bg-green-500 my-1 rounded"></div>
                    <div className="w-1/2 h-4 bg-green-500 my-1 rounded"></div>
                </div>
                <div className="p-3 md:p-4 border-t">
                    <div className="w-1/2 h-4 bg-green-500 my-1 rounded"></div>
                    <div className="w-1/4 h-4 bg-green-500 my-1 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingProduct