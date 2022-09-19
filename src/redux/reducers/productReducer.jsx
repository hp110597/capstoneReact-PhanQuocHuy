import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
arrProduct:[

]
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction:(state,action)=>{
        const arrProduct = action.payload
        state.arrProduct = arrProduct
    }
  }
});

export const {getProductAction} = productReducer.actions

export default productReducer.reducer


//-------------------------action api----------------

export const getProductApi = ()=>{
    return async (dispatch)=>{
        try{
            const result = await axios({
                url:'https://shop.cyberlearn.vn/api/Product',
                method:'GET'
            })
            const action = getProductAction(result.data.content)
            dispatch(action)
        }catch(err){
            console.log(err);
        }
    }
}