import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

import { productsInstance } from '../../utils/apis';
import { apiKeys } from '../../utils/keys';

import ProductsContainer from './ProductsContainer'
import LoadingContainer from './loading/LoadingContainer'

function ProductSection() {
    const perPage = 20;
    const [loading,setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [offset, setOffset] = useState(1)

    useEffect(() => {
        async function getProducts(os){
            setLoading(true)
            const response = await productsInstance.get(`?apikey=${apiKeys}&limit=${perPage}&page=${os}`)
            const data = response.data

            setProducts(data.data)
            setLoading(false)
            setPageCount(data.lastPage)
        }

        getProducts(offset)
        
        return () => {

        }
    }, [offset])

    const handleChangePage = (data) => {
        let selected = data.selected + 1
        setOffset(selected)
    }

    return (
        <div className="w-full lg:w-2/3 m-4">
            <ReactPaginate 
                previousLabel={'prev'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handleChangePage}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
            
            {
                loading ?
                    <LoadingContainer />
                    :
                    <ProductsContainer datas={products}/>
            }
            <ReactPaginate 
                previousLabel={'prev'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handleChangePage}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    )
}

export default ProductSection
