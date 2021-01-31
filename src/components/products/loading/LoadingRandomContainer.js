import React from 'react'
import LoadingRandom from './LoadingRandom'

function LoadingRandomContainer() {
    const elements = [1, 2, 3, 4, 5]

    return (
        <div>
            {
                elements.map((e, i) => {
                    return <LoadingRandom key={i}/>
                })
            }
        </div>
    )
}

export default LoadingRandomContainer
