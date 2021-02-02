import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Modal from 'react-modal'

import { AiFillCloseSquare } from 'react-icons/ai'
import { BsFilterRight } from 'react-icons/bs'
import { productsInstance } from '../../utils/apis';
import { apiKeys } from '../../utils/keys';

import LoadingContainer from './loading/LoadingContainer'
import ProductsContainer from './ProductsContainer'

Modal.setAppElement('#root')

function UnfilteredProducts({ perPage, setFilter }) {
    const [open, setOpen] = useState(false)
    const [loading,setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [offset, setOffset] = useState(1)

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(500)
    const [minSales, setMinSales] = useState(0)
    const [maxSales, setMaxSales] = useState(500)
    const [minRatings, setMinRatings] = useState(0)
    const [maxRatings, setMaxRatings] = useState(5)

    useEffect(() => {
        async function getProducts(os){
            setLoading(true)
            const response = await productsInstance.get(`?apikey=${apiKeys}&limit=${perPage}&page=${os}`)
            const data = await response.data

            setProducts(data.data)
            setLoading(false)
            setPageCount(data.lastPage)
        }

        getProducts(offset)
        
        return () => {

        }
    }, [offset, perPage])

    const setOpenModal = (value) => {
        setOpen(value)
    }

    const submitFilter = (minPrice, maxPrice, minSales, maxSales, minRatings, maxRatings) => {
        setOpen(false)
        setFilter(true, minPrice, maxPrice, minSales, maxSales, minRatings, maxRatings)
    }

    const handleChangePage = (data) => {
        let selected = data.selected + 1
        window.scrollTo(0, 0)
        setOffset(selected)
    }

    return (
        <div>
            <div className="z-10 flex sticky top-20 items-center flex-row bg-green-300 text-green-800 font-bold py-2 px-4 mb-2 rounded">
                <h1 className="flex-1">Page number {offset}</h1>
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
                <input className="py-1 px-2" type="number" value={minPrice} onChange={(e) => { setMinPrice(e.target.value) }} name="min" min="0" max="1000" />

                <label className="block text-xs">Maximum price</label>
                <input className="mb-2 py-1 px-2" type="number" onChange={(e) => { setMaxPrice(e.target.value) }}  value={maxPrice} name="max" min="500" max="1500" />

                <label className="block text-xs">Minimum sales</label>
                <input className="py-1 px-2" type="number" value={minSales} onChange={(e) => { setMinSales(e.target.value) }} name="min" min="0" max="1000" />
                
                <label className="block text-xs">Maximum sales</label>
                <input className="mb-2 py-1 px-2" type="number" onChange={(e) => { setMaxSales(e.target.value) }}  value={maxSales} name="max" min="500" max="1500" />

                <label className="block text-xs">Minimum ratings</label>
                <input className="py-1 px-2" type="number" value={minRatings} onChange={(e) => { setMinRatings(e.target.value) }} name="min" min="0" max="4" />
                
                <label className="block text-xs">Maximum ratings</label>
                <input className="mb-2 py-1 px-2" type="number" onChange={(e) => { setMaxRatings(e.target.value) }}  value={maxRatings} name="max" min="0" max="5" />
                
                <button className="block bg-green-300 text-green-800 font-medium mt-2 py-1 px-3 rounded" onClick={() => submitFilter(minPrice, maxPrice, minSales, maxSales, minRatings, maxRatings)}>Submit</button>
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

export default UnfilteredProducts
