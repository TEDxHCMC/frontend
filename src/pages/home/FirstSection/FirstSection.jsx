import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import './firstsection.scss';
import 'animate.css';

const FirstSection = () => {
    const textContainerRef = useRef(null);
    const [gridConfig, setGridConfig] = useState({ cols: 16, rows: 9, gutter: 24 });

    const updateGridConfig = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        const colSize = 78; // Width and height of each column
        const gutterSizes = {
            large: 24,
            mediumLarge: 16,
            medium: 12,
            small: 8,
            verySmall: 4,
        };
    
        let gutter;
        let numCols;
        let numRows;
        // Determine the gutter size and number of columns based on screen width
        if (width >= 1280) {
            gutter = gutterSizes.large;
            numCols = Math.floor(width / colSize); // Directly calculate number of columns without gutter
        } else if (width >= 1024) {
            gutter = gutterSizes.mediumLarge;
            numCols = Math.floor(width / colSize); // Directly calculate number of columns without gutter
        } else if (width >= 768) {
            gutter = gutterSizes.medium;
            numCols = Math.floor(width / colSize); // Directly calculate number of columns without gutter
        } else if (width >= 640) {
            gutter = gutterSizes.small;
            numCols = Math.floor(width / colSize); // Directly calculate number of columns without gutter
        } else {
            gutter = gutterSizes.verySmall;
            numCols = Math.floor(width / colSize); // Directly calculate number of columns without gutter
        }
    
        // Calculate the number of rows that fit on the screen
        numRows = Math.floor(height / colSize); // Directly calculate number of rows without gutter
    
        // Update grid configuration
        setGridConfig({ cols: numCols, rows: numRows, gutter });
    
        console.log(`Window width: ${width}, height: ${height}, calculated cols: ${numCols}, rows: ${numRows}, gutter: ${gutter}`);
    };
    

    // Add event listener for resize
    useEffect(() => {
        updateGridConfig(); // Initial check
        window.addEventListener('resize', updateGridConfig);

        return () => {
            window.removeEventListener('resize', updateGridConfig);
        };
    }, []);

    useEffect(() => {
        console.log('Updated grid config:', gridConfig); // Log the updated grid config
    }, [gridConfig]);

    const colStyle = {
        width: '78px',
        height: '78px',
        border: '0.5px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '0px',
        paddingRight: '0px',
    };

    const items = Array.from({ length: gridConfig.cols * gridConfig.rows });

    useEffect(() => {
        const handleScroll = () => {
            if (textContainerRef.current) {
                const textContainerTop = textContainerRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Trigger scroll animation when container is in view
                if (textContainerTop < windowHeight * 0.5) {
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

    return (
        <div className='page-1 relative grid place-items-center'>
            {[...Array(gridConfig.rows)].map((_, rowIndex) => (
                <Row key={rowIndex} gutter={[gridConfig.gutter, gridConfig.gutter]}>
                    {items.slice(rowIndex * gridConfig.cols, (rowIndex + 1) * gridConfig.cols).map((_, colIndex) => (
                        <Col key={colIndex} style={colStyle}>
                            {(rowIndex === 4 && colIndex === 6) && (
                                <img
                                    src="./assets/pattern/overlay-pattern/7.jpg"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            )}
                            {(rowIndex === 5 && colIndex === 4) && (
                                <img
                                    src="./assets/pattern/single-pattern/4-Blue.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                            {(rowIndex === 5 && colIndex === 11) && (
                                <img
                                    src="./assets/pattern/single-pattern/4-Green.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                            {(rowIndex === 7 && colIndex === 14) && (
                                <img
                                    src="./assets/pattern/single-pattern/3-Yellow.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                        </Col>
                    ))}
                </Row>
            ))}
            <div className="page-1-content absolute top-2/4 bottom-2/4 z-[1] text-center text-[40px]" ref={dissolveRef}>
                    Liệu bạn đã nhìn đủ...
                </div>
                <div className="content-interaction absolute z-[2] text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[125px]  w-full">
                    <div className="text-position-1 absolute bottom-[50px] left-[60%]">
                        <h2 onClick={scrollToContent}>lâu?</h2>
                    </div>
                    <div className="text-position-2 absolute w-full bottom-[20px] left-[10%]">
                        <h2 onClick={scrollToContent}>kĩ càng?</h2>
                    </div>
                    <div className="text-position-3 absolute right-[20%]">
                        <h2 onClick={scrollToContent}>rõ?</h2>
                    </div>
                    <div className="text-position-4 absolute top-[30px] left-[15%]">
                        <h2 onClick={scrollToContent}>sâu?</h2>
                    </div>
                    <div className="text-position-5 absolute top-[120px] left-[30%] w-full">
                        <h2 onClick={scrollToContent}>tường tận?</h2>
                    </div>
                </div>
        </div>
    );
};

export default FirstSection;
