import React from 'react'

function LoadingRandom() {
    return (
        <div className="animate-pulse grid grid-cols-3 grid-rows-2 gap-2 w-full h-24 p-2">
            <div className="col-span-1 row-span-2">
                <div className="w-full h-full  bg-green-500 my-1 rounded"></div>
            </div>
            <div className="col-span-2">
                <div className="w-full h-4 bg-green-500 my-1 rounded "></div>
                <div className="w-1/4 h-4 bg-green-500 my-1 rounded "></div>
                <div className="w-1/2 h-4 bg-green-500 my-1 rounded "></div>
                <div className="w-1/2 h-4 bg-green-500 my-1 rounded "></div>
            </div>
        </div>
    )
}

export default LoadingRandom
