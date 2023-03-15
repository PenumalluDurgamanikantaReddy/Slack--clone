import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const data={channnelView:true}

const datareducer=createSlice({
    name:"option",
    initialState:data,
    reducers:{
        Selectoption(state,action){
            state.channnelView=action.payload
        },
        SelectChannel(state,action){
            state.channnelView=action.payload
        }

    }
})



const Store =configureStore({
   reducer:{
    viewmanage:datareducer.reducer
   }
})

export default Store;
export const reduxActions=datareducer.actions