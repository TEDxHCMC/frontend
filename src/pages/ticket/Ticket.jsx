import React from "react";
import { Outlet } from "react-router-dom";
import Tracker from "./Tracker";
import { useSelector } from "react-redux";
import TicketUI from "./TicketUI";
import TicketGeneral from "./TicketGeneral";

// import "./ticket.module.scss"
//import './ticket.scss';

const Ticket = () => {
    const { currStep, ticketData } = useSelector((state) => state.ticket)

    return (
        <section className="bg-[#FFFBF6]">
            <div className="w-10/12 mx-auto pt-10 sm:pb-5">
                <Tracker currentStep={currStep} />
            </div>
            <div className="w-[95%] sm:w-[90%] mx-auto ">
                <div className="w-full h-full flex flex-col pb-[50px] justify-between">
                    <TicketUI />
                    
                </div>
            </div>
        </section>
    );
};

export default Ticket;
