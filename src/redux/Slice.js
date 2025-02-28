
import { createSlice } from "@reduxjs/toolkit";

const cartSystem = createSlice({

    name: "cart",
    initialState: [],
    reducers:{
        addtocart(state,action){

            state.push(action.payload)

        },

        removetocart(state,action){

            state.shift(action.payload)

        },
    }

})

export default cartSystem.reducer

export const{addtocart,removetocart} = cartSystem.actions