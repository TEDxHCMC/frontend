import React from 'react'
import { Outlet } from 'react-router-dom'
import Tracker from '../../components/Tracker'
import Header from '../../components/Header'

import "./ticket.scss"
import { useSelector } from 'react-redux'

const TicketLayout = () => {
    const { currStep, ticketData } = useSelector((state) => state.ticket)
    
    return (
        <>
            <Header />
            <main className="ticket min-h-screen bg-[#FFFBF6]">
                <div className="w-10/12 mx-auto pt-10 sm:pb-5">
                    <Tracker currentStep={currStep} />
                </div>
                <div className='w-[95%] sm:w-[90%] mx-auto '>
                    <Outlet />
                </div>
                
            </main>
        </>
        
        
    )
}

export default TicketLayout
