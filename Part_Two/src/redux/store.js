import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/menuSlice"

// const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = configureStore({
    reducer: {
        menu: menuReducer,
    },
    devTools: true,
})

export default store