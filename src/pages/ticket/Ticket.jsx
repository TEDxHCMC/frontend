import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Tracker from "./Tracker";
// import "./ticket.module.scss"

const Ticket = () => {
    const [currentStep, setCurrentStep] = useState(1);
    
    return (
        <section className="min-h-screen w-10/12 mx-auto py-10">
            <div className="w-full h-full flex flex-col justify-between">
                <Tracker currentStep={currentStep}/>
                
                <Outlet />
            </div>
        </section>
    );
};

export default Ticket;
