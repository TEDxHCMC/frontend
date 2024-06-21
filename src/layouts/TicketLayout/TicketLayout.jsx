import React from 'react'
import { Outlet } from 'react-router-dom'

const TicketLayout = () => {
    return (
        <section className="w-10/12 mx-auto py-10">
            <div className="flex justify-between items-center mx-auto mb-5">
                <div className="flex items-center gap-3">
                    <div
                        style={{ lineHeight: "56px" }}
                        className="w-14 h-14 rounded-full bg-red-500 font-bold text-center text-3xl text-white"
                    >
                        1
                    </div>
                    <p className="text-xl font-base text-red-500">Chọn vé</p>
                </div>
                <div className="border border-solid border-slate-200 w-48" />
                <div className="flex items-center gap-3">
                    <div
                        style={{ lineHeight: "56px" }}
                        className="w-14 h-14 rounded-full bg-slate-300 font-base text-center text-3xl text-white"
                    >
                        2
                    </div>
                    <p className="text-xl font-base text-slate-300">
                        Thông tin
                    </p>
                </div>
                <div className="border border-solid border-slate-200 w-48" />
                <div className="flex items-center gap-3">
                    <div
                        style={{ lineHeight: "56px" }}
                        className="w-14 h-14 rounded-full bg-slate-300 font-base text-center text-3xl text-white"
                    >
                        3
                    </div>
                    <p className="text-xl font-base text-slate-300">Xác nhận</p>
                </div>
                <div className="border border-solid border-slate-200 w-48" />
                <div className="flex items-center gap-3">
                    <div
                        style={{ lineHeight: "56px" }}
                        className="w-14 h-14 rounded-full bg-slate-300 font-base text-center text-3xl text-white"
                    >
                        4
                    </div>
                    <p className="text-xl font-base text-slate-300">Hoàn tất</p>
                </div>
            </div>

            <Outlet />
        </section>
    )
}

export default TicketLayout
