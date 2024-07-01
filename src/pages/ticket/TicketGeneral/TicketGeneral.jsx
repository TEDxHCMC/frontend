import { Row, Col, Divider, Checkbox, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleSetCurrStep } from "../../../redux/slices/ticket.slice";

const dates = [
    {
        day: "T5",
        fullDate: "19/09/2024",
    },
    {
        day: "T6",
        fullDate: "20/09/2024",
    },
    {
        day: "T7",
        fullDate: "21/09/2024",
    },
    {
        day: "CN",
        fullDate: "22/09/2024",
    },
    {
        day: "T2",
        fullDate: "23/09/2024",
    },
];

const sessions = [
    {
        name: "Sáng",
        time: "09:00 AM - 12:00 PM",
        value: "1",
    },
    {
        name: "Chiều",
        time: "13:00 PM - 16:00 PM",
        value: "2",
    },
];

const TicketGeneral = () => {
    const [amount, setAmount] = useState(1);
    const [selectedDate, setSelectedDate] = useState("");
    const [sessionsChecked, setSessionsChecked] = useState([]);
    const navigate = useNavigate()

    const handleDecrease = (e) => {
        e.preventDefault();

        setAmount(amount - 1);
    };

    const handleIncrease = (e) => {
        e.preventDefault();

        setAmount(amount + 1);
    };

    const handleChangeSession = (checkedValues) => {
        setSessionsChecked(checkedValues);
    };

    const handleChangeDate = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleCheckedChange = (e) => {
        e.preventDefault()

        console.log(e.target)
    }

    const handleSubmit = (e) => {
        navigate("/ticket/form")
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleSetCurrStep(1))
    })

    return (
        <Row>
            <Col className="items-start" span="18">
                <form className="min-h-full">
                    <div className="mb-8">
                        <h2 className="font-semibold text-blue-800 text-2xl mb-3">
                            Ngày tham quan
                        </h2>

                        {/* <div className="date hidden sm:flex flex-wrap gap-3">
                            {dates.map((date, index) => (
                                <div
                                    key={index}
                                    className="px-5 py-2 border border-solid border-slate-800 rounded-lg"
                                >
                                    <p className="text-xl text-slate-700 font-light">
                                        {`${date.day}, ${date.fullDate}`}
                                    </p>
                                </div>
                            ))}
                        </div> */}
                        <Radio.Group onChange={handleChangeDate}>
                            <div className="date flex flex-wrap gap-3">
                                {dates.map((date, index) => (
                                    <Radio
                                        key={index}
                                        value={date.fullDate}
                                        className={`px-5 py-2 border-2 border-solid border-slate-400 rounded-lg transition-all hover:border-blue-600 ${
                                            selectedDate === date.fullDate
                                                && "bg-blue-400 border-transparent hover:border-transparent"
                                        }`}
                                    >
                                        <p className="text-xl text-slate-700 font-light">{`${date.day}, ${date.fullDate}`}</p>
                                    </Radio>
                                ))}
                            </div>
                        </Radio.Group>

                        <div className="date sm:hidden flex flex-wrap gap-5">
                            {dates.map((date, index) => (
                                <div
                                    key={index}
                                    className="px-3 py-2 border border-solid border-slate-800 rounded-lg"
                                >
                                    <div className="w-full h-full flex flex-col justify-between items-center gap-1">
                                        <span className="text-sm text-slate-500">
                                            {date.day}
                                        </span>
                                        <p className="text-xl text-slate-700 font-light">
                                            {date.fullDate.substring(0, 5)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="font-semibold text-blue-800 text-2xl my-3">
                            Chọn Session
                        </h2>

                        <Checkbox.Group className="" onChange={handleChangeSession}>
                            <div className="session flex gap-3">
                                {sessions.map((session, index) => (
                                    <Checkbox
                                        key={index}
                                        value={session.value}
                                        className={`px-5 py-2 border-2 border-solid border-slate-400 rounded-lg transition-all hover:border-blue-600 ${
                                            sessionsChecked.includes(session.value)
                                                && "bg-blue-400 hover:border-transparent"
                                        }`}
                                    >
                                        <p className="text-xl text-slate-700 font-light">{`${session.name} (${session.time})`}</p>
                                    </Checkbox>
                                ))}
                            </div>
                        </Checkbox.Group>
                    </div>

                    <h2 className="font-semibold text-blue-800 text-2xl my-3">
                        Thông tin vé
                    </h2>

                    <div className="w-11/12 border border-solid rounded border-slate-600 p-4">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h3 className="font-medium text-lg text-blue-900 mb-3">
                                    Vé tham quan
                                </h3>
                                <span className="font-light text-xs">
                                    TedxHcmc
                                </span>
                            </div>
                            <p className="text-red-600 text-lg">Miễn phí</p>
                        </div>
                        <Divider />
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium text-lg text-blue-900 mb-3">
                                Số Lượng
                            </h3>
                            <div className="flex items-center p-2 gap-5 border border-solid border-slate-300 rounded-full">
                                <button
                                    disabled={amount == 1 ? true : false}
                                    className={`w-10 h-10 leading-10 rounded-full bg-blue-950 text-white ${
                                        amount == 1 && "opacity-40"
                                    }`}
                                    onClick={handleDecrease}
                                >
                                    -
                                </button>
                                <span className="font-bold text-xl">
                                    {amount}
                                </span>
                                <button
                                    disabled={amount == 2 ? true : false}
                                    className={`w-10 h-10 leading-10 rounded-full bg-blue-950 text-white ${
                                        amount == 2 && "opacity-40"
                                    }`}
                                    onClick={handleIncrease}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Col>
            <Col span="6">
                <div className="p-5 min-h-full rounded border border-solid border-slate-600">
                    <h2 className="text-xl font-semibold mb-5">Đơn hàng</h2>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">
                            {`${amount} x Vé Tham Quan`}
                        </p>
                        <p className="text-slate-600">Miễn phí</p>
                    </div>
                    <Divider />
                    <div className="flex justify-between items-center">
                        <p className="font-normal text-slate-600">
                            Tổng giá vé
                        </p>
                        <p className="text-slate-600">Miễn phí</p>
                    </div>
                    <Divider />
                    <div className="flex justify-between align-top items-center mb-3">
                        <div className="flex flex-col justify-start">
                            <p className="font-base text-lg text-slate-600 mb-1">
                                Tổng cộng
                            </p>
                            <p lassName="text-slate-600 text-xs">Đã bao gồm thuế VAT</p>
                        </div>
                        <p className="text-slate-800 text-xl font-bold">Miễn phí</p>
                    </div>
                    <div className="flex justify-start items-start mb-3">
                        <Checkbox></Checkbox>
                        <p className="text-sm font-normal ps-2">
                            Tôi đồng ý với {" "} 
                            <Link
                                to={""}
                                className="text-blue-600 hover:underline hover:text-blue-800"
                            >
                                những Điều khoản và Điều kiện
                            </Link>{" "}
                            và đăng ký vé để tham dự sự kiện
                        </p>
                    </div>
                    <button className="w-full bg-red-500 text-white h-10" onClick={handleSubmit} >Đăng Ký</button>
                </div>
            </Col>
        </Row>
    );
};

export default TicketGeneral;
