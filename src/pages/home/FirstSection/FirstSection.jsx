import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import './firstsection.scss';
import 'animate.css';


const FirstSection = () => {
    const textContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (textContainerRef.current) {
                const textContainerTop = textContainerRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Trigger scroll animation when container is in view
                if (textContainerTop < windowHeight * 0.5) { // Adjust threshold as needed
                    setScrollTriggered(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const dissolveRef = useRef(null);

    const scrollToContent = () => {
        const targetElement = document.getElementById('scroll-content');
        if (targetElement) {
            const yOffset = -100; // Adjust as needed
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('dissolve-effect');
                }
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        if (dissolveRef.current) {
            observer.observe(dissolveRef.current);
        }

        return () => {
            if (dissolveRef.current) {
                observer.unobserve(dissolveRef.current);
            }
        };
    }, []);

    const colStyle = {
        width: '157px',
        height: '157px',
        border: '0.5px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div>
            <div className='page-1 relative grid place-items-center'>
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
                                    src="./assets/pattern/overlay-pattern/7.jpg"
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
                                    src="./assets/pattern/single-pattern/4-Blue.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                            {index === 5 && (
                                <img
                                    src="./assets/pattern/single-pattern/4-Green.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
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
                                    src="./assets/pattern/single-pattern/3-Yellow.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                        </Col>
                    ))}
                </Row>
                <div className='page-1-content absolute top-2/4 bottom-2/4 z-[1] text-center text-[40px]' ref={dissolveRef}>
                    Liệu bạn đã nhìn đủ...
                </div>
                <div className='content-interaction absolute top-2/4 bottom-2/4 z-[2] text-[135px] w-full'>
                    <div className='text-position-1 absolute bottom-[150px] left-[40px]'>
                        <h2 onClick={scrollToContent}>lâu?</h2>
                    </div>
                    <div className='text-position-2 absolute bottom-[150px] right-[30px]'>
                        <h2 onClick={scrollToContent}>kĩ càng?</h2>
                    </div>
                    <div className='text-position-3 absolute top-[50px] right-[400px]'>
                        <h2 onClick={scrollToContent}>rõ?</h2>
                    </div>
                    <div className='text-position-4 absolute top-[250px] right-[100px]'>
                        <h2 onClick={scrollToContent}>sâu?</h2>
                    </div>
                    <div className='text-position-5 absolute top-[250px] left-[40px]'>
                        <h2 onClick={scrollToContent}>tường tận?</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FirstSection;
