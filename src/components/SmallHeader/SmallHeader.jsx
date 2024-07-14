import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "./smallheader.scss";

const SmallHeader = () => {
    const [showCircle, setShowCircle] = useState(false);
    const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
    const [isSticky, setIsSticky] = useState(false);
    const [isButtonDisplay, setButtonDisplay] = useState(false);
    const [offset, setOffset] = useState(0)

    const handleMouseEnter = () => {
        setShowCircle(true);
    };

    const handleMouseLeave = () => {
        setShowCircle(false);
    };

    const handleMouseMove = (event) => {
        const circle = document.querySelector('.circle');
        if (circle) {
            const circleWidth = circle.offsetWidth;
            const circleHeight = circle.offsetHeight;
            const x = event.clientX - circleWidth / 2;
            const y = event.clientY - circleHeight / 2;
            setCirclePosition({ x, y });
        }
    };

    const handleScroll = () => {
        let newOffset = window.scrollY
        setOffset(newOffset)
        setButtonDisplay(offset > 96);

        if (offset > 0) {
            setIsSticky(true)
        } else {
            setIsSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.paddingTop = '0';
        }
    
    }, []);

    return (
        <nav
            className={`sticky-nav ${isSticky && 'sticky-scroll'} sticky top-0 mx-auto flex items-center justify-center lg:px-8 space-x-16`}
        >
            <div className="first-box flex items-center justify-center">
                <Link to ="/" className="space-x-4">
                        <img
                            className="h-[30px] w-auto"
                            src="./assets/logo/TEDx-logo/TEDx-Black-Short.png"
                        />
                    </Link>
            </div>
            <div className="second-box"></div>
            <div className="third-box flex space-x-16 items-center justify-center">
                <Link to="#">CHỦ ĐỀ</Link>
                <div
                    className="flex flex-shrink-0 items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                >
                    <div className="image-container">
                        <Link to="#">
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
        </nav>
    );
};

export default SmallHeader;
