import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggelMenu: (store) => {
            store.isMenuOpen = !store.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
});

export const { toggelMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;