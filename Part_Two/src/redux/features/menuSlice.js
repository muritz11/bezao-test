import { createSlice } from "@reduxjs/toolkit";
import menuDish from "../../assets/images/menu dish.svg";
import drawSoup from "../../assets/images/draw soup.svg";
import eggSauce from "../../assets/images/fried egg sauce.svg";

export const menuSlice = createSlice({
    name: 'menu',
    initialState: [
            {
                id: 1,
                title: 'jellof rice',
                price: '1,500',
                description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
                image: menuDish
            },
            {
                id: 2,
                title: 'Swallow With Draw Soup',
                price: '1,500',
                description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
                image: drawSoup
            },
            {
                id: 3,
                title: 'jellof rice',
                price: '1,500',
                description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
                image: menuDish
            },
            {
                id: 4,
                title: 'Fries With Egg Sauce',
                price: '700',
                description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
                image: eggSauce
            },
            {
                id: 1,
                title: 'jellof rice',
                price: '1,100',
                description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
                image: menuDish
            },
            {
                id: 1,
                title: 'jellof rice',
                price: '3,500',
                description: 'Fried potato/yam chips with egg sauce or any topping of your choice',
                image: menuDish
            },
        ],
    reducers: {
        newItem: (state, action) => {
            state.push(action.payload.cuisine)
        },
    }
})


export const { newItem } = menuSlice.actions
export default menuSlice.reducer