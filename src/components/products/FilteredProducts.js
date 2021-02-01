import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Modal from 'react-modal'

import { AiFillCloseSquare } from 'react-icons/ai'
import { BsFilterRight } from 'react-icons/bs'
import { productsInstance } from '../../utils/apis';
import { apiKeys } from '../../utils/keys';

import LoadingContainer from './loading/LoadingContainer'
import ProductsContainer from './ProductsContainer'

function FilteredProducts({ perPage, minFilter, maxFilter, setFilter}) {
    const [open, setOpen] = useState(false)
    const [loading,setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [offset, setOffset] = useState(1)

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(500)

    useEffect(() => {
        async function getProducts(os){
            setLoading(true)
            const response = await productsInstance.get(`?apikey=${apiKeys}&limit=${perPage}&page=${os}&price=gt_${minFilter}^lt_${maxFilter}`)
            const data = await response.data

            setProducts(data.data)
            setLoading(false)
            setPageCount(data.lastPage)
        }

        getProducts(offset)
        
        return () => {

        }
    }, [offset, perPage, minFilter, maxFilter])

    const setOpenModal = (value) => {
        setOpen(value)
    }

    const submitFilter = (min, max) => {
        setOpen(false)
        setFilter(true, min, max)
    }

    const removeFilter = () => {
        setOpen(false)
        setFilter(false, 0, 500)
    }

    const handleChangePage = (data) => {
        let selected = data.selected + 1
        window.scrollTo(0, 0)
        setOffset(selected)
    }

    return (
        <div>
            <div className="z-10 flex sticky top-20 items-center flex-row bg-green-300 text-green-800 font-bold py-2 px-4 mb-2 rounded">
                <h1 className="flex-1">Filtered page number {offset}</h1>
                <BsFilterRight size="2em" className="cursor-pointer" onClick={() => {setOpenModal(true)}}/>
            </div>

            <Modal
                isOpen={open}
                className="modal"
                overlayClassName="overlay"
                contentLabel="Filter modal"
            >
                <div className="flex flex-row">
                    <h1 className="flex-1 text-lg text-green-800 font-medium">Filter products</h1>
                    <AiFillCloseSquare color="#EF4444" size="2em" className="cursor-pointer" onClick={() => {setOpenModal(false)}}/>
                </div>
                
                <label className="block text-xs">Minimum price</label>
                <input className="py-1 px-2" type="number" value={min} onChange={(e) => { setMin(e.target.value) }} name="min" min="0" max="1000" />

                <label className="block text-xs">Maximum price</label>
                <input className="mb-2 py-1 px-2" type="number" onChange={(e) => { setMax(e.target.value) }}  value={max} name="max" min="500" max="1500" />
                
                <div className="mt-2">
                    <button className="bg-green-300 text-green-800 font-medium mr-2 py-1 px-3 rounded" onClick={() => submitFilter(min, max)}>Submit filter</button>
                    <button className="bg-red-300 text-red-800 font-medium py-1 px-3 rounded" onClick={() => removeFilter(min, max)}>Remove filter</button>
                </div>

            </Modal>

            {
                loading ?
                    <LoadingContainer />
                    :
                    <ProductsContainer datas={products}/>
            }

            <ReactPaginate 
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handleChangePage}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    )
}

export default FilteredProducts
