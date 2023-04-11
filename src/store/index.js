import { configureStore } from "@reduxjs/toolkit";

import ComponentData from "store/ComponentData";


const store = configureStore({
    reducer:{
        ComponentData
    }
})

export default store