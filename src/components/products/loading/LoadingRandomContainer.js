import React from 'react'
import LoadingRandom from './LoadingRandom'

function LoadingRandomContainer() {
    const elements = [1, 2, 3, 4, 5]

    return (
        <div>
            {
                elements.map((elem, index) => {
                    return <LoadingRandom key={index}/>
                })
            }
        </div>
    )
}

export default LoadingRandomContainer
