import { Button, Result } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleSetCurrStep } from "../../../redux/slices/ticket.slice";
import { useNavigate } from "react-router-dom";

const TicketResult = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNavigateHome = () => {
        navigate("/")
    }

    useEffect(() => {
        dispatch(handleSetCurrStep(3));
    }, []);

    return (
        <main className="min-h-[50vh] flex flex-col justify-center items-center">
            <Result
                className=""
                status="success"
                title="Yay, bạn đã đăng ký vé thành công!"
                subTitle="Chờ xíu nhé, thông tin xác nhận tham dự sẽ được gửi đến email mà bạn đã đăng ký."
                extra={[
                    <button key="home" className={`w-fit h-fit py-2 px-5 bg-[#C30121] text-lg text-white rounded transition-all duration-300 hover:scale-105`} onClick={() => navigate("/")}>
                        Trang Chủ
                    </button>,
                    <button key="ticket" className={`w-fit h-fit py-2 px-5 bg-[#030EF5] text-lg text-white rounded transition-all duration-300 hover:scale-105`} onClick={() => navigate("/ticket")}>Trang Đăng Ký</button>
                ]}
            />
        </main>
    );
};

export default TicketResult;
