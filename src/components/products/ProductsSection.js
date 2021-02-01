import React, { useState } from 'react'

import FilteredProducts from './FilteredProducts'
import UnfilteredProducts from './UnfilteredProducts';

function ProductSection() {
    const perPage = 20;
    const [filter, setFilter] = useState(false)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(500)

    const updateFilter = (value, min, max) => {
        setMin(min)
        setMax(max)
        setFilter(value)
    }

    return (
        <div className="w-full lg:w-2/3 mt-4">
            {
                filter ?
                    <FilteredProducts perPage={perPage} minFilter={min} maxFilter={max} setFilter={updateFilter}/>
                    :
                    <UnfilteredProducts perPage={perPage} setFilter={updateFilter}/>
            }
        </div>
    )
}

export default ProductSection
