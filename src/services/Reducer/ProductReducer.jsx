import { GET_PRODUCT, GET_PRODUCTS } from "../constant/actionType";

const initialState ={
    Products:[],
    Product:[]
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCTS:
            return {
                Products: action.payload
            }
            break;
        case GET_PRODUCT:
            return {
                ...state,
                Product: action.payload
            }
            break;
        default:
            return state
            break;
    }
}
export default productReducer
