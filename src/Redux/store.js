import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/FirstSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})