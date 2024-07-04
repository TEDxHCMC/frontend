import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import SmallHeader from '../../components/SmallHeader';

const MainLayout = () => {
    return (
        <div class="">
            <SmallHeader />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
