import { Row, Col, Divider, Checkbox, Radio, Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleSetCurrStep, handleSetTicketAmount } from "../../../redux/slices/ticket.slice";

import './ticketUI.scss';

const TicketUI = () => {
    const sessions = [
        {
            name: "Sáng",
            time: "9:00 - 12:00",
            value: "1",
        },
        {
            name: "Chiều",
            time: "13:00 - 16:00",
            value: "2",
        },
    ];

    const [amount, setAmount] = useState(1);
    //const [selectedDate, setSelectedDate] = useState("");
    const [sessionsChecked, setSessionsChecked] = useState([]);
    //const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDecrease = (e) => {
        e.preventDefault();
        console.log("Decreasing amount");
        setAmount(amount - 1);
        console.log("New amount:", amount - 1);
    };
    
    const handleIncrease = (e) => {
        e.preventDefault();
        console.log("Increasing amount");
        setAmount(amount + 1);
        console.log("New amount:", amount + 1);
    };
    
    const handleChangeSession = (checkedValues) => {
        console.log("Checked session values:", checkedValues);
        setSessionsChecked(checkedValues);
    };
    
    const handleChangeDate = (e) => {
        console.log("Selected date:", e.target.value);
        setSelectedDate(e.target.value);
    };
    
    const handleSubmit = (e) => {
        console.log("Submitting form with amount:", amount);
        dispatch(handleSetTicketAmount(amount));
        console.log("Navigating to ticket/form");
        navigate("/ticket/form");
    };
    
    useEffect(() => {
        console.log("Setting current step to 1");
        dispatch(handleSetCurrStep(1));
    }, []); // Ensure this effect only runs once on component mount

    return (
        <div>
            <div className='ticket-container flex flex-col sm:flex-row'>
                <div className='firstside-ticket element flex flex-col gap-y-5 justify-between rounded-tl-[30px] rounded-bl-[30px]'>
                    <div className="first-section">
                        <h1 className="font-bold mb-5">[Vé tham dự] Sự kiện TEDxHoChiMinhCity 2024 - Tỏ tường: Mở lòng với thực tại</h1>
                        <div className="mb-4">
                            <div className='flex flex-row gap-x-2 mb-2'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0175781 16.3035C0.0175781 16.6789 0.320815 16.9821 0.69615 16.9821H16.3033C16.6786 16.9821 16.9819 16.6789 16.9819 16.3035V7.39727H0.0175781V16.3035ZM16.3033 1.54459H12.7408V0.18745C12.7408 0.0941463 12.6645 0.017807 12.5711 0.017807H11.3836C11.2903 0.017807 11.214 0.0941463 11.214 0.18745V1.54459H5.78544V0.18745C5.78544 0.0941463 5.7091 0.017807 5.61579 0.017807H4.42829C4.33499 0.017807 4.25865 0.0941463 4.25865 0.18745V1.54459H0.69615C0.320815 1.54459 0.0175781 1.84783 0.0175781 2.22316V5.95531H16.9819V2.22316C16.9819 1.84783 16.6786 1.54459 16.3033 1.54459Z" fill="black" />
                                </svg>

                                <h2 className="font-bold text-[20px] text-[#C30121]">
                                    2 khung giờ: ngày 21 tháng 9, 2024
                                </h2>
                            </div>

                            <Checkbox.Group
                                className=""
                                onChange={handleChangeSession}
                            >
                                <div className="session flex flex-wrap gap-3">
                                    {sessions.map((session, index) => (
                                        <Checkbox
                                            key={index}
                                            value={session.value}
                                            className={`px-5 py-2 border-2 border-solid transition-all whitespace-nowrap 
                                                ${sessionsChecked.includes(session.value) ? "bg-black text-white" : "hover:bg-black hover:text-white"}`}
                                        >
                                            <p className="text-xl font-light">{`${session.name} : ${session.time}`}</p>
                                        </Checkbox>

                                    ))}
                                </div>


                            </Checkbox.Group>


                        </div>

                        <div className='event-location'>
                            <div className='flex flex-row gap-x-2 mb-2'>
                                <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 0C3.79667 0 0 3.79667 0 8.5C0 14.1667 8.5 22.6667 8.5 22.6667C8.5 22.6667 17 14.1667 17 8.5C17 3.79667 13.2033 0 8.5 0ZM8.5 2.83333C11.645 2.83333 14.1667 5.38333 14.1667 8.5C14.1667 11.645 11.645 14.1667 8.5 14.1667C5.38333 14.1667 2.83333 11.645 2.83333 8.5C2.83333 5.38333 5.38333 2.83333 8.5 2.83333Z" fill="black" />
                                </svg>
                                <h2 className="font-bold text-[20px]">Khách sạn New World</h2>
                            </div>

                            <p>76 Lê Lai, phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh</p>
                        </div>

                    </div>

                    <div className='ticket-price flex flex-col'>
                        <div className='line mb-2'></div>
                        <div className='flex flex-row items-center justify-between'>
                            <div className="flex flex-row">
                                <h3 className="font-bold text-[22px]">
                                    Giá Vé:
                                </h3>
                                <h3 className='text-[#C30121] ml-2 font-bold text-[22px]'>Miễn phí</h3>
                            </div>
                            <div className="flex items-center gap-3 h-10">
                                <button
                                    disabled={amount == 1 ? true : false}
                                    className={`firstbutton ${amount === 1 ? 'bg-[#C30121] text-white' : 'text-[#C30121]'}`}
                                    onClick={handleDecrease}
                                >
                                    -
                                </button>
                                <span className="font-bold text-xl">
                                    {amount}
                                </span>
                                <button
                                    disabled={amount == 2 ? true : false}
                                    className={`firstbutton ${amount === 2 ? 'bg-[#C30121] text-white' : 'text-[#C30121]'}`}
                                    onClick={handleIncrease}
                                >
                                    +
                                </button>
                            </div>
                        </div>


                        <div className="button-confirm items-center mt-2">
                            <button
                                className="w-full text-white font-bold text-[20px] h-10 whitespace-nowrap"
                                onClick={handleSubmit}
                            >
                                Xác Nhận
                            </button>
                        </div>

                    </div>
                </div>


                <div className='secondside-ticket relative z-[1] w-full flex justify-center rounded-tr-[30px] rounded-br-[30px]'>
                    <img className="absolute md:block hidden bottom-[5%] right-[5%] h-auto
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/single-pattern/4-Blue.png"
                        style={{ transform: 'scale(1.28)' }} />
                    <img className="absolute h-auto top-[10%] right-[25%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/single-pattern/4-Green.png"
                        style={{ transform: 'scale(1.28)' }} />
                    <img className="absolute h-auto top-[6%] left-[18%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/single-pattern/4-Yellow.png"
                        style={{ transform: 'scale(1.28)' }} />
                    <img className="absolute h-auto bottom-[30%] right-[20%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/single-pattern/3-Yellow.png"
                        style={{ transform: 'scale(1.28)' }} />
                    <img className="absolute h-auto top-[20%] left-[25%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/single-pattern/3-Blue.png"
                        style={{ transform: 'scale(1.28)' }} />
                    <img className="absolute h-auto bottom-[20%] left-[5%]
                                w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/single-pattern/1-Green.png"
                        style={{ transform: 'scale(1.28)' }} />

                    <img className="absolute h-auto top-[15%] left-[5%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/overlay-pattern/1.png" />
                    <img className="absolute h-auto bottom-[20%] left-[15%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/overlay-pattern/2.png" />
                    <img className="absolute h-auto top-[10%] right-[35%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/overlay-pattern/4.png" />
                    <img className="absolute h-auto top-[10%] right-[5%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/overlay-pattern/5.png" />
                    <img className="absolute h-auto bottom-[10%] left-[25%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/overlay-pattern/8.png" />
                    <img className="absolute h-auto bottom-[8%] right-[30%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/overlay-pattern/9.png" />
                    <img className="absolute h-auto bottom-[15%] right-[15%]
                                    w-[55px] sm:w-[60px] md:w-[65px] lg:w-[70px] xl:w-[74px]"
                        src="./assets/pattern/overlay-pattern/10.png" />


                    <div className="flex items-center justify-center h-full absolute z-[2]">
                        <div className='ticket-image-logo flex flex-col items-start'>
                            <div className="flex flex-col items-center">
                                <img className="w-[304px] h-[37px]" src='./assets/logo/TEDx-logo/TEDx-Black-Short.png' />
                                <img className="w-[444px] h-[115px]" src='./assets/logo/to-tuong-logo/To-tuong-logo-black.png' />
                            </div>
                            <h4>Mở lòng với thực tại</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>





    );
};
export default TicketUI;