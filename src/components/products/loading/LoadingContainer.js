import React from 'react'
import LoadingProduct from './LoadingProduct'
function LoadingContainer() {
    const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return (
        <div className="w-full flex flex-col md:flex-row md:flex-wrap">
            {
                elements.map((e, i) => {
                    return <LoadingProduct key={i} />
                })
            }        
        </div>
    )
}

export default LoadingContainer
