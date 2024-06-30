import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.splice(action.payload, 1)
        }
    }
})
export const {addCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;