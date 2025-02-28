import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "./Slice"



const store = configureStore({

    reducer :{

        cart:cartSystem
    }

})

export default store;


