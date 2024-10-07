import { combineReducers } from "@reduxjs/toolkit";
import ticketReducer from "./slices/ticket.slice";
import posterReducer from "./slices/poster.slice"

export default combineReducers({
    "ticket": ticketReducer,
    "poster": posterReducer,
})