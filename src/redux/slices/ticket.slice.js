import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currStep: 1,
    
    ticketData: {
        fullName: "",
        email: "",
        phone: "",
        fullName2: "",
        email2: "",
        phone2: "",
    },
};

export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        handleSetCurrStep: (state, action) => {
            state.currStep = action.payload;
            console.log("Current Step: ", state.currStep);
        },
        handleSetTicketData: (state, action) => {
            state.ticketData = action.payload;
            console.log("Current Data: ", state.ticketData);
        },
    },
});

export const { handleSetCurrStep, handleSetTicketData } = ticketSlice.actions;

export default ticketSlice.reducer;