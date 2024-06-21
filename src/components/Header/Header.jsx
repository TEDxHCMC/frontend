import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './header.scss';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showCircle, setShowCircle] = useState(false);
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
    const [isSticky, setIsSticky] = useState(false);
    const [isOneSticky, setIsOneSticky] = useState(false);
    const location = useLocation();


    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const handleMouseEnter = () => {
        setShowCircle(true);
    };

    const handleMouseLeave = () => {
        setShowCircle(false);
    };

    const handleMouseMove = (event) => {
        const circle = document.querySelector('.circle');
        const circleWidth = circle.offsetWidth;
        const circleHeight = circle.offsetHeight;

        const x = event.clientX - circleWidth / 2;
        const y = event.clientY - circleHeight / 2;

        setCirclePosition({ x, y });
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            console.log("Scroll offset:", offset);
            setIsSticky(offset > 106);
            setIsOneSticky(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    const isAboutPage = location.pathname === '/about';
    const isSpeakerPage = location.pathname === '/speaker';
    

    return (
        <header class="bg-white">
            {isAboutPage || isSpeakerPage ? (
                <nav className={`secondary-nav mx-auto flex items-center justify-center lg:px-8 space-x-16 ${isOneSticky ? 'sticky top-0 z-50' : ''}`}>
                    <div className="first-box flex items-center justify-center">
                        <a href="#" className='space-x-4'>TEDxHOCHIMINHCITY2024</a>  
                    </div>
                    <div className="second-box"></div>
                    <div className="third-box flex space-x-16 items-center justify-center">
                        <a href="#">CHỦ ĐỀ</a>
                        <div className="flex flex-shrink-0 items-center"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}>
                            <div className="image-container">
                                <a href="#">
                                    <img className="h-7 w-auto" src="./src/assets/logo/to-tuong-logo/To-tuong-logo-black.png" alt="TEDX Logo"/>
                                </a>
                            </div>
                            {showCircle && (
                                <div className="circle" style={{ left: circlePosition.x, top: circlePosition.y }}></div>
                            )}
                        </div>
                        <a href="#">ĐỊA ĐIỂM</a>

                        <div className="four-box flex justify-center items-center pl-10">
                                <button className="hidden-ticket-button">
                                    ĐĂNG KÍ VÉ
                                </button>
                        </div>     
                    </div>
                </nav>
            ) : (

            <div>
                <nav className={`primary-nav mx-auto flex items-center justify-between p-6 lg:px-8`}>
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img className="h-9 w-auto" src="./src/assets/logo/TEDx-logo/TEDx-Black-Short.png" alt=""/>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className="relative">
                        <button type="button" className="flex items-center gap-x-1  text-gray-900" aria-expanded="false"
                                onClick={handleDropdownToggle}>
                            Diễn đàn
                            <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {showDropdown && (
                            <div className="show-down-box absolute mt-3 p-2 overflow-hidden bg-black text-white ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    <div className="group flex flex-col gap-x-6 p-4">
                                        <a href="#" className="">
                                            TEDxHOCHIMINHCITY 2024   
                                        </a>
                                        <div className="drop-divider"></div>
                                        <div className="drop-sec-text flex flex-col space-y-2">
                                            <p>Sep 21st, 2024</p>
                                            <p>Ho Chi Minh, Viet Nam</p>  
                                        </div>
                                    </div>
                                    <div className="group flex flex-col gap-x-6 p-4">
                                        <a href="#" className="block">
                                            TEDxHOCHIMINHCITY 2023
                                        </a>
                                        <div className="drop-divider"></div>
                                        <div className="drop-sec-text flex flex-col space-y-2">
                                            <p>Jan 1st, 2023</p>
                                            <p>Ho Chi Minh, Viet Nam</p>  
                                        </div>
                                    </div>
                                </div>             
                            </div>
                        )}
                    </div>
                    <div></div>
                    <a href="/" className="text-gray-900">Thông tin Event</a>
                    <a href="/about" className="text-gray-900">Về chúng tôi</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-gray-900">
                        <button className="ticket-button">
                            ĐĂNG KÍ VÉ
                        </button>
                    </a>
                </div>  
            </nav>

            <div className={`secondary-nav mx-auto flex items-center justify-center lg:px-8 space-x-16 ${isSticky ? 'sticky top-0 z-50' : ''}`}>
                <div className="first-box flex items-center justify-center">
                    <a href="#" className='space-x-4'>TEDxHOCHIMINHCITY2024</a>  
                </div>
                <div className="second-box"></div>
                <div className="third-box flex space-x-16 items-center justify-center">
                    <a href="#">CHỦ ĐỀ</a>
                <div className="flex flex-shrink-0 items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}>
                    <div className="image-container">
                        <a href="#">
                            <img className="h-7 w-auto" src="./src/assets/logo/to-tuong-logo/To-tuong-logo-black.png" alt="TEDX Logo"/>
                        </a>
                    </div>
                    {showCircle && (
                        <div className="circle" style={{ left: circlePosition.x, top: circlePosition.y }}></div>
                    )}
                </div>
                <a href="#">ĐỊA ĐIỂM</a>

                <div className="four-box flex justify-center items-center pl-10">
                    {isSticky && (
                        <button className="hidden-ticket-button">
                            ĐĂNG KÍ VÉ
                        </button>
                    )}
                </div>     
            </div>
            </div>
            </div>

            

        )}
    </header>
);
}


export default Header;