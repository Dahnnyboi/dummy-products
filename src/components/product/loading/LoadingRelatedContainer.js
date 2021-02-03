import React from 'react'
import LoadingRelated from './LoadingRelated'

function LoadingRelatedContainer() {
    const elements = [1, 2, 3, 4 ,5]

    return (
        <div className="flex flex-col md:flex-row md:flex-wrap">
            {
                elements.map((e, i) => {
                    return <LoadingRelated key={i}/>
                })
            }
        </div>
    )
}

export default LoadingRelatedContainer
