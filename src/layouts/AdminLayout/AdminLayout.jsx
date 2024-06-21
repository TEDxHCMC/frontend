import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div>
            Admin Layout

            <Outlet />
        </div>
    )
}

export default AdminLayout
