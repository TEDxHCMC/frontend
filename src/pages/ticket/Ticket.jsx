import React from "react";
import { Outlet } from "react-router-dom";
import Tracker from "./Tracker";
import { useSelector } from "react-redux";
import TicketUI from "./TicketUI";

// import "./ticket.module.scss"
//import './ticket.scss';

const Ticket = () => {
    const { currStep, ticketData }  = useSelector((state) => state.ticket)
    
    return (
        <section className="bg-[#FFFBF6]">
            <div className="min-h-screen w-10/12 mx-auto py-10">
            <div className="w-full h-full flex flex-col justify-between">
                <Tracker currentStep={currStep}/>
                <TicketUI/>
                {/*<Outlet /> */} 
            </div>
            </div>
        </section>
    );
};

export default Ticket;
