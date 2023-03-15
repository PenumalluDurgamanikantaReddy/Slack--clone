import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const data={channnelView:true,optionSelected:"defualt"}

const datareducer=createSlice({
    name:"option",
    initialState:data,
    reducers:{
        Selectoption(state,action){
            state.channnelView=action.payload
            // console.log(state.channnelView)
        },
        SelectChannel(state,action){
            state.channnelView=action.payload
        },
        SelectedOption(state,action){
            state.optionSelected=action.payload
            console.log(action.payload)
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
