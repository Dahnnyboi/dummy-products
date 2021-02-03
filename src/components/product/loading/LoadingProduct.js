import React from 'react'

function LoadingProduct() {
    return (
        <div className="w-full mt-8">
            <div className="animate-pulse">
                <div className="w-full h-72 bg-green-500 rounded"></div>
                <div className="w-1/4 h-4 bg-green-500 my-2 rounded"></div>
                <div className="w-1/12 h-4 bg-green-500 my-2 rounded"></div>
                <div className="w-full h-12 bg-green-500 my-2 rounded"></div>
                <div className="w-1/6 h-4 bg-green-500 my-2 rounded"></div>
                <div className="w-1/6 h-4 bg-green-500 my-2 rounded"></div>
                <div className="w-24 h-8 bg-green-500 my-2 rounded"></div>

                <div className="border-t-2 border-gray-200 mt-2">
                    <div className="w-1/6 h-4 bg-green-500 my-2 rounded"></div>
                    <div className="flex flex-row items-center">
                        <div className="mr-4 w-12 h-12 bg-green-500 rounded-full"></div> 
                        <div className="flex-1 ">
                            <div className="w-1/6 h-4 bg-green-500 my-2 rounded"></div>
                            <div className="w-1/6 h-4 bg-green-500 my-2 rounded"></div>
                        </div>
                    </div>
                    <div className="w-full h-12 bg-green-500 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingProduct
