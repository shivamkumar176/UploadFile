import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const FirstSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = FirstSlice.actions

export default FirstSlice.reducer