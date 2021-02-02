import React, { useState } from 'react'

import FilteredProducts from './FilteredProducts'
import UnfilteredProducts from './UnfilteredProducts';

function ProductSection() {
    const perPage = 20;

    const [filter, setFilter] = useState(false)

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(500)
    const [minSales, setMinSales] = useState(0)
    const [maxSales, setMaxSales] = useState(500)
    const [minRatings, setMinRatings] = useState(0)
    const [maxRatings, setMaxRatings] = useState(5)

    const updateFilter = (value, minPrice, maxPrice, minSales, maxSales, minRatings, maxRatings) => {
        setMinPrice(minPrice)
        setMaxPrice(maxPrice)
        setMinSales(minSales)
        setMaxSales(maxSales)
        setMinRatings(minRatings)
        setMaxRatings(maxRatings)

        setFilter(value)
    }

    return (
        <div className="w-full lg:w-2/3 mt-4">
            {
                filter ?
                    <FilteredProducts 
                        perPage={perPage} 
                        _minPrice={minPrice}
                        _maxPrice={maxPrice}
                        _minSales={minSales}
                        _maxSales={maxSales}
                        _minRatings={minRatings}
                        _maxRatings={maxRatings}
                        setFilter={updateFilter}
                    />
                    :
                    <UnfilteredProducts perPage={perPage} setFilter={updateFilter}/>
            }
        </div>
    )
}

export default ProductSection
