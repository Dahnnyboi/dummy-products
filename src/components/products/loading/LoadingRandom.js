import React from 'react'

function LoadingRandom() {
    return (
        <div className="h-24 grid grid-cols-3 grid-rows-2 gap-2 w-full animate-pulse p-2">
            <div className="col-span-1 row-span-2">
                <div className="h-full w-full bg-green-500 rounded my-1"></div>
            </div>
            <div className="col-span-2">
                <div className="h-4 bg-green-500 rounded w-full my-1"></div>
                <div className="h-4 bg-green-500 rounded w-1/4 my-1"></div>
                <div className="h-4 bg-green-500 rounded w-1/2 my-1"></div>
                <div className="h-4 bg-green-500 rounded w-1/2 my-1"></div>
            </div>
        </div>
    )
}

export default LoadingRandom
