import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
arrProduct:[],
productDetail:[]


}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction:(state,action)=>{
        const arrProduct = action.payload
        state.arrProduct = arrProduct
    },
    getProductDetailAction:(state,action)=>{
        //Bước 4:Sau khi nhận được dữ liệu từ dispatch
        const productDetail=action.payload
        state.productDetail=productDetail
      }
  }
});

export const {getProductAction,getProductDetailAction} = productReducer.actions

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
            console.log(action);
            dispatch(action)
        }catch(err){
            console.log(err);
        }
    }
}


export const getProductDetailApi =(id)=>{
    return async (dispatch)=>{
        try{
            let result = await axios({
                url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
                method:'GET'
            })
            const action = getProductDetailAction(result.data.content)
        
            dispatch(action)
        }catch(err){
            console.log(err);
        }
    }
}
