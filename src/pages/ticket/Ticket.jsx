import React from "react";
import { Outlet } from "react-router-dom";
import Tracker from "./Tracker";
import { useSelector } from "react-redux";
// import "./ticket.module.scss"

const Ticket = () => {
    const { currStep, ticketData }  = useSelector((state) => state.ticket)
    
    return (
        <section className="min-h-screen w-10/12 mx-auto py-10">
            <div className="w-full h-full flex flex-col justify-between">
                <Tracker currentStep={currStep}/>
                
                <Outlet />
            </div>
        </section>
    );
};

export default Ticket;
