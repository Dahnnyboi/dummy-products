import React from 'react'

function LoadingProduct() {
    return (
        <div className="rounded shadow-lg h-300 bg-white">
            <div className="animate-pulse">
                <div className="h-64 bg-green-500 w-full"></div>
                <div className="p-3 md:p-4 md:px-4 md:py4">
                    <div className="h-4 bg-green-500 rounded w-1/4 my-1"></div>
                    <div className="h-4 bg-green-500 rounded w-full my-1"></div>
                    <div className="h-4 bg-green-500 rounded w-1/2 my-1"></div>
                </div>
                <div className="p-3 md:p-4 border-t">
                    <div className="h-4 bg-green-500 rounded w-1/2 my-1"></div>
                    <div className="h-4 bg-green-500 rounded w-1/4 my-1"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingProduct