import axios from 'axios';

export const productsInstance = axios.create({
    baseURL: 'https://dummyproducts-api.herokuapp.com/api/v1/products'
})

