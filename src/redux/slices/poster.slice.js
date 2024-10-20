import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posterPayload: {
        bgColor: "bg-black",
        shapeCount: 4,
        layout1: 4,
        layout2: 3,
        txtPosition: "text-center",
        name: "Duy Nguyen"
    },
    posterUrl: "H",
};

export const posterSlice = createSlice({
    name: "poster",
    initialState,
    reducers: {
        handleSetPosterPayload: (state, action) => {
            state.posterPayload = action.payload;
            // console.log("Current Step: ", state.currStep);
        },
        handleSetPosterUrl: (state, action) => {
            state.posterUrl = action.payload;
            // console.log("Current Step: ", state.currStep);
        },
        
    },
});

export const { handleSetPosterPayload, handleSetPosterUrl } = posterSlice.actions;

export default posterSlice.reducer;