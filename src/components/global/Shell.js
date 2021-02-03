import React from 'react'

function Shell({ children }) {
    return (
        <div className="w-11/12 mx-auto md:w-10/12 2xl:w-8/12 flex flex-row pt-16 mb-4">
            {children}
        </div>
    )
}

export default Shell
