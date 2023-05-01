import { GET_PRODUCT, GET_PRODUCTS } from '../constant/actionType'
import {Api} from '../../api/index'

export const getProducts = (data) => {
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}
export const getProductsAsync = () => {

    return async dispatch => {
        const res = await Api.get("/examPrduct")
        dispatch(getProducts(res.data))
    }
}

export const getproduct =(data)=>{
    return{
        type: GET_PRODUCT,
        payload:data
    }
}
export const getProductAsync = (id) => {

    return async dispatch => {
        const res = await Api.get(`/examPrduct/${id}`)
        dispatch(getproduct(res.data))
    }
}