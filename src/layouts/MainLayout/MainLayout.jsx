import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import './mainlayout.scss';

const MainLayout = () => {
    return (
        <>
            <div class="page-wrapped">
                <Header />
                <Outlet />
                <Footer /> 
            </div>
        </>
    )
}

export default MainLayout
