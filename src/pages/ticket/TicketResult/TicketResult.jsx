import { Button, Result } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleSetCurrStep } from "../../../redux/slices/ticket.slice";

const TicketResult = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(handleSetCurrStep(3));
    }, []);

    return (
        <>
            <Result
                status="success"
                title="Yay, bạn đã đăng ký vé thành công!"
                subTitle="Chờ xíu nhé, thông tin xác nhận tham dự sẽ được gửi đến email mà bạn đã đăng ký."
                extra={[
                    <Button key="console" className={`w-fit h-fit py-3 px-5 bg-[#C30121] text-lg text-white rounded transition-all duration-300 hover:bg-black`} onClick="">
                        Trang Chủ
                    </Button>,
                    <Button key="buy">Trang Đăng Ký</Button>,
                ]}
            />
        </>
    );
};

export default TicketResult;
