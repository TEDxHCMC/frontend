import React from 'react'
import SmallHeader from '../../components/SmallHeader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
    return (
        <div className=''>
            <Header />
            <SmallHeader />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout
