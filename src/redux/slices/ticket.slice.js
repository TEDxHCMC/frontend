import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currStep: 1,
    ticketAmount: 1,
    session: 1,
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
        handleSetTicketAmount: (state, action) => {
            state.ticketAmount = action.payload;
            console.log("Current Ticket Amount: ", state.ticketAmount);
        },
        handleSetTicketSession: (state, action) => {
            state.session = action.payload;
            console.log("Current Session: ", state.session);
        },
        handleSetTicketData: (state, action) => {
            state.ticketData = action.payload;
            console.log("Current Data: ", state.ticketData);
        },
    },
});

export const { handleSetCurrStep, handleSetTicketData, handleSetTicketAmount, handleSetTicketSession } = ticketSlice.actions;

export default ticketSlice.reducer;