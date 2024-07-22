import { combineReducers } from "@reduxjs/toolkit";
import ticketReducer from "./slices/ticket.slice";

export default combineReducers({
    "ticket": ticketReducer
})