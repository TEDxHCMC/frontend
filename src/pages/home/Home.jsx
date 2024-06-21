import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import './home.scss';

const Home = () => {
    const [scrollDirection, setScrollDirection] = useState("");

    useEffect(() => {
        let lastScrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        const handleScroll = () => {
            const currentScrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            setScrollDirection(
                currentScrollTop > lastScrollTop ? "down" : "up"
            );
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToContent = () => {
        const targetElement = document.getElementById('scroll-content');
        if (targetElement) {
            const yOffset = -100; // Adjust as needed
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };


    const colStyle = {
        width: '157px',
        height: '157px',
        border: '0.5px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    return (
        <div class="main-wrapped">
            <section class="hero-home">
                <div className='lg:block hidden'>
                    <div className='container-bg'>
                        <Row gutter={[8, 8]}>
                            {[...Array(8)].map((_, index) => (
                                <Col key={index} style={colStyle}>
                                </Col>
                            ))}
                        </Row>
                        <Row gutter={[8, 8]}>
                            {[...Array(8)].map((_, index) => (
                                <Col key={index} style={colStyle}>
                                </Col>
                            ))}
                        </Row>
                        <Row gutter={[8, 8]}>
                            {[...Array(8)].map((_, index) => (
                                <Col key={index} style={colStyle}>
                                    {index === 2 && (
                                        <img
                                            src="./src/assets/pattern/overlay-pattern/7.jpg"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    )}
                                </Col>
                            ))}
                        </Row>
                        <Row gutter={[8, 8]}>
                            {[...Array(8)].map((_, index) => (
                                <Col key={index} style={colStyle}>
                                    {index === 0 && (
                                        <img
                                            src="./src/assets/pattern/single-pattern/4-Blue.png"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    )}
                                    {index === 5 && (
                                        <img
                                            src="./src/assets/pattern/single-pattern/4-Green.png"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    )}
                                </Col>
                            ))}
                        </Row>
                        <Row gutter={[8, 8]}>
                            {[...Array(8)].map((_, index) => (
                                <Col key={index} style={colStyle}>
                                    {index === 7 && (
                                        <img
                                            src="./src/assets/pattern/single-pattern/3-Yellow.png"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    )}
                                </Col>
                            ))}
                        </Row>
                        <div className='container-content'>
                            Liệu bạn đã nhìn đủ...
                        </div>
                        <div className='content-interaction'>
                            <div className='text-position-1'>
                                <h2 onClick={scrollToContent}>lâu?</h2>
                            </div>
                            <div className='text-position-2'>
                                <h2 onClick={scrollToContent}>kĩ càng?</h2>
                            </div>
                            <div className='text-position-3'>
                                <h2 onClick={scrollToContent}>rõ?</h2>
                            </div>
                            <div className='text-position-4'>
                                <h2 onClick={scrollToContent}>sâu?</h2>
                            </div>
                            <div className='text-position-5'>
                                <h2 onClick={scrollToContent}>tường tận?</h2>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='block lg:hidden'>
                    Điện thoại ver
                </div>

                <div className="span-between" style={{ height: '100px' }} />

                <div id="scroll-content" className="totuong-bg">
                    <Row gutter={[8, 8]}>
                        {[...Array(8)].map((_, index) => (
                            <Col key={index} style={colStyle}>
                                {index === 2 && (
                                    <img
                                        src="./src/assets/pattern/overlay-pattern/3.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {index === 5 && (
                                    <img
                                        src="./src/assets/pattern/overlay-pattern/4.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={[8, 8]}>
                        {[...Array(8)].map((_, index) => (
                            <Col key={index} style={colStyle}>
                                {index === 0 && (
                                    <img
                                        src="./src/assets/pattern/overlay-pattern/1.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {index === 1 && (
                                    <img
                                        src="./src/assets/pattern/single-pattern/4-Yellow.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {index === 6 && (
                                    <img
                                        src="./src/assets/pattern/single-pattern/4-Green.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {index === 7 && (
                                    <img
                                        src="./src/assets/pattern/overlay-pattern/5.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={[8, 8]}>
                        {[...Array(8)].map((_, index) => (
                            <Col key={index} style={colStyle}>
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={[8, 8]}>
                        {[...Array(8)].map((_, index) => (
                            <Col key={index} style={colStyle}>
                                {index === 1 && (
                                    <img
                                        src="./src/assets/pattern/overlay-pattern/2.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {index === 6 && (
                                    <img
                                        src="./src/assets/pattern/overlay-pattern/6.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                            </Col>
                        ))}
                    </Row>
                    <Row gutter={[8, 8]}>
                        {[...Array(8)].map((_, index) => (
                            <Col key={index} style={colStyle}>
                                {index === 7 && (
                                    <img
                                        src="./src/assets/pattern/single-pattern/4-Blue.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                            </Col>
                        ))}
                    </Row>

                    <div className="totuong-content">
                        <img src='./src/assets/logo/to-tuong-logo/To-tuong-logo-black.png'
                            style={{ width: '831px', height: 'auto' }} />
                        <h2>MỞ LÒNG VỚI THỰC TẠI</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporadipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Home;
