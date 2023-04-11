import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    componentData: "home"
}

const componentsSlice = createSlice({

    name: 'component',
    initialState,
    reducers: {
        changeComponents: (state, action) => {
            state.componentData = action.payload
        }
    }

})

export const {changeComponents} = componentsSlice.actions
export default componentsSlice.reducer