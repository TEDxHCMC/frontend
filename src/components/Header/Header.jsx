import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import "animate.css";

const Header = () => {
    // const [showCircle, setShowCircle] = useState(false);
    // const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

    const [showDropdown, setShowDropdown] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleNavbarToggle = () => {
        setIsOpened(!isOpened);
    };

    //? HOVER ANIMATION IN HEADER
    // const handleMouseEnter = () => {
    //     setShowCircle(true);
    // };

    // const handleMouseLeave = () => {
    //     setShowCircle(false);
    // };

    // const handleMouseMove = (event) => {
    //     const circle = document.querySelector('.circle');
    //     if (circle) {
    //         const circleWidth = circle.offsetWidth;
    //         const circleHeight = circle.offsetHeight;
    //         const x = event.clientX - circleWidth / 2;
    //         const y = event.clientY - circleHeight / 2;
    //         setCirclePosition({ x, y });
    //     }
    // };

    return (
        <>
            <nav className="top-nav hidden md:block lg:text-[22px] md:text-[18px]">
                <div className="flex w-full items-center">
                    <div className="logo w-1/3">
                        <Link to="/" className="py-1.5">
                            <img
                                className="block object-contain h-9 w-11/12 md:w-5/6"
                                src="./assets/logo/TEDx-logo/TEDx-Black-Short.png"
                            />
                        </Link>
                    </div>
                    <div className="top-items w-1/2 hidden sm:flex lg:justify-around justify-center items-center lg:gap-x-2 gap-x-6 text-nowrap">
                        <div className="relative">
                            <button
                                className="item text-gray-900"
                                aria-expanded="false"
                                onClick={handleDropdownToggle}
                            >
                                <div className="flex items-center gap-x-1">
                                    <span>Diễn Đàn</span>
                                    <svg
                                        className="h-5 w-5 flex-none text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </button>
                            {/* {showDropdown && (
                            <div className="show-down-box absolute mt-3 p-2 overflow-hidden bg-black text-white ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    <div className="group flex flex-col gap-x-6 p-4">
                                        <Link to="#" className="">
                                            TEDxHOCHIMINHCITY 2024
                                        </Link>
                                        <div className="drop-divider"></div>
                                        <div className="drop-sec-text flex flex-col space-y-2">
                                            <p>Sep 21st, 2024</p>
                                            <p>Ho Chi Minh, Viet Nam</p>
                                        </div>
                                    </div>
                                    <div className="group flex flex-col gap-x-6 p-4">
                                        <Link to="#" className="block">
                                            TEDxHOCHIMINHCITY 2023
                                        </Link>
                                        <div className="drop-divider"></div>
                                        <div className="drop-sec-text flex flex-col space-y-2">
                                            <p>Jan 1st, 2023</p>
                                            <p>Ho Chi Minh, Viet Nam</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )} */}
                        </div>
                        <Link to="/" className="item text-gray-900">
                            Thông tin Event
                        </Link>
                        <Link to="about" className="item text-gray-900">
                            Về chúng tôi
                        </Link>
                    </div>
                    <div className="hidden lg:block w-1/3"></div>
                </div>
            </nav>
            <nav
                className={`bottom-nav px-5 md:mx-auto items-center flex md:justify-center justify-between lg:text-[22px] md:text-[18px] text-[14px] lg:px-8 lg:space-x-16 md:space-x-10 text-gray-500  bg-white`}
            >
                <div className="logo flex justify-center items-center">
                    <Link
                        to="/"
                        className="lg:text-[25px] md:text-[20px] transition-all ease-in duration-200 hover:text-gray-900 hover:font-bold"
                    >
                        <h3 className="hidden md:block font-semibold">
                            TEDxHOCHIMINHCITY
                            <span className="font-light">2024</span>
                        </h3>
                        <img
                            className="md:hidden block h-5 w-auto"
                            src="./assets/logo/TEDx-logo/TEDx-Black-Short.png"
                        />
                    </Link>
                </div>
                {/* <div className="hidden lg:block second-box"></div> */}
                <div className="bottom-items flex items-center justify-center lg:gap-x-16 md:gap-x-10 gap-x-2 text-nowrap">
                    <Link
                        to="speakers"
                        className="hidden md:block transition-all ease-in duration-200 font-semibold hover:font-bold hover:text-gray-900"
                    >
                        DIỄN GIẢ
                    </Link>
                    <div
                        className="flex items-center"
                        // onMouseEnter={handleMouseEnter}
                        // onMouseLeave={handleMouseLeave}
                        // onMouseMove={handleMouseMove}
                    >
                        <div className="hidden sm:flex justify-center">
                            <Link to="/">
                                <img
                                    className="block relative h-7 object-contain md:translate-x-0 -translate-x-1/2"
                                    src="./assets/logo/to-tuong-logo/To-tuong-logo-black.png"
                                    alt="TEDX Logo"
                                />
                            </Link>
                        </div>
                        {/* {showCircle && (
                            <div
                                className="circle"
                                style={{
                                    left: circlePosition.x,
                                    top: circlePosition.y,
                                }}
                            ></div>
                        )} */}
                    </div>
                    <Link
                        to="#"
                        className="hidden md:block transition-all ease-in duration-200 font-semibold hover:font-bold hover:text-gray-900"
                    >
                        ĐỊA ĐIỂM
                    </Link>
                </div>
                <div className="bottom-button flex justify-center items-center">
                    <button
                        className={`ticket-button hidden md:block text-nowrap px-5 py-2 rounded-sm`}
                    >
                        ĐĂNG KÍ VÉ
                    </button>
                    <button className="md:hidden" onClick={handleNavbarToggle}>
                        <i className="fa-sharp fa-regular fa-bars text-[22px] transition-all duration-300 text-[#c30121] hover:text-[#ff002b]"></i>
                    </button>
                </div>
            </nav>
            <div className={`mobile-nav ${isOpened ? "opacity-100 visible" : "opacity-0 invisible"} bg-[#262626] fixed inset-0 transition-all duration-300 h-screen w-full z-[100] px-5 py-5`}>
                <div className={`flex justify-between items-center mb-10`}>
                    <div className="logo min-w-min">
                        <Link to="/" className="inline-block">
                            <img
                                className="block h-5 w-auto"
                                src="./assets/logo/TEDx-logo/TEDx-White-Short.png"
                            />
                        </Link>
                    </div>
                    <button className="" onClick={handleNavbarToggle}>
                        <i className="fa-sharp fa-regular fa-x text-[20px] transition-all duration-300 text-[#c30121] hover:text-[#ff002b]"></i>
                    </button>
                </div>
                <div className={`${isOpened ? "nav-animate" : ""} flex flex-col justify-center font-thin text-[20px] gap-y-5 mb-10`}>
                    <Link to="/" className="item uppercase">
                        Diễn giả
                    </Link>
                    <Link to="about" className="item uppercase">
                        Thông tin Event
                    </Link>
                    <Link to="about" className="item uppercase">
                        Về chúng tôi
                    </Link>
                    
                </div>
                <button
                    className={`${isOpened ? "nav-animate" : ""} ticket-button text-nowrap px-5 py-2 rounded-sm`}
                >
                    ĐĂNG KÍ VÉ
                </button>
            </div>
            {/* <nav
                className={`sticky-nav ${
                    isSticky && "sticky-scroll"
                } sticky top-0 mx-auto flex items-center justify-center lg:px-8 space-x-16`}
            >
                <div className="first-box flex items-center justify-center">
                    <Link to="/" className="space-x-4">
                        <img
                            className="h-7 w-auto"
                            src="./assets/logo/TEDx-logo/TEDx-Black-Short.png"
                        />
                    </Link>
                </div>
                <div className="second-box"></div>
                <div className="third-box flex space-x-16 items-center justify-center">
                    <Link to="about">VỀ CHÚNG TÔI</Link>
                    <div
                        className="flex flex-shrink-0 items-center"
                        // onMouseEnter={handleMouseEnter}
                        // onMouseLeave={handleMouseLeave}
                        // onMouseMove={handleMouseMove}
                    >
                        <div className="image-container">
                            <Link to="/">
                                <img
                                    className="h-7 w-auto"
                                    src="./assets/logo/to-tuong-logo/To-tuong-logo-black.png"
                                    alt="TEDX Logo"
                                />
                            </Link>
                        </div>
                        {showCircle && (
                            <div
                                className="circle"
                                style={{
                                    left: circlePosition.x,
                                    top: circlePosition.y,
                                }}
                            ></div>
                        )}
                    </div>
                    <Link to="#">ĐỊA ĐIỂM</Link>
                    <div className="four-box flex justify-center items-center pl-10">
                        <button className={`ticket-button`}>ĐĂNG KÍ VÉ</button>
                    </div>
                </div>
            </nav> */}
        </>
    );
};

export default Header;
