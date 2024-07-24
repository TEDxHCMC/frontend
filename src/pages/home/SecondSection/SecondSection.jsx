
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import './secondsection.scss';
import 'animate.css';

const SecondSection = () => {
    const dissolveRef = useRef(null);
    const constraintsRef = useRef(null);

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

    const pattern1 = '/assets/pattern/single-pattern/3-Yellow.png';
    const pattern2 = '/assets/pattern/single-pattern/4-Blue.png';
    const pattern3 = '/assets/pattern/single-pattern/1-Green.png';
    const pattern4 = '/assets/pattern/single-pattern/2-Pink.png';


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

    function useParallax(value, distance, scaleFactor) {
        const y = useTransform(value, [0, 1], [distance, -distance]);
        const scale = useTransform(value, [0, 1], [1, scaleFactor]);
        return { y, scale };
    }


    const TextSection = ({ className, imgSrc, text, imgWidth, textSize }) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({ target: ref });
        const { y, scale } = useParallax(scrollYProgress, 350, 1.5);

        return (
            <motion.div ref={ref} className={className} style={{ y, scale }}>
                <img src={imgSrc} style={{ width: imgWidth, height: 'auto' }} alt="Logo" />
                <h2 className={textSize}>{text}</h2>
            </motion.div>
        );
    };
    return (
        <div>
            <div id="scroll-content" className="page-2-bg bg-transparent relative grid place-items-center">
                {[...Array(gridConfig.rows)].map((_, rowIndex) => (
                    <Row key={rowIndex} gutter={[gridConfig.gutter, gridConfig.gutter]}>
                        {items.slice(rowIndex * gridConfig.cols, (rowIndex + 1) * gridConfig.cols).map((_, colIndex) => (
                            <Col key={colIndex} style={colStyle}>
                                {(rowIndex === 0 && colIndex === 5) && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/3.png"
                                        style={{ width: '100%', height: 'auto' }}

                                    />
                                )}
                                {(rowIndex === 0 && colIndex === 12) && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/4.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {(rowIndex === 1 && colIndex === 2) && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/1.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {(rowIndex === 1 && colIndex === 4) && (
                                    <img
                                        src="./assets/pattern/single-pattern/4-Yellow.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                    />

                                )}

                                {(rowIndex === 1 && colIndex === 13) && (
                                    <img
                                        src="./assets/pattern/single-pattern/4-Green.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                    />

                                )}

                                {(rowIndex === 1 && colIndex === 15) && (

                                    <img
                                        src="./assets/pattern/overlay-pattern/5.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {(rowIndex === 5 && colIndex === 2) && (
                                    <img
                                        src="./assets/pattern/single-pattern/1-Green.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                    />
                                )}
                                {(rowIndex === 6 && colIndex === 3) && (

                                    <img
                                        src="./assets/pattern/overlay-pattern/2.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}

                                {(rowIndex === 6 && colIndex === 13) && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/6.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}

                                {(rowIndex === 5 && colIndex === 14) && (
                                    <img
                                        src="./assets/pattern/single-pattern/3-Yellow.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                    />
                                )}

                                {(rowIndex === 7 && colIndex === 16) && (

                                    <img
                                        src="./assets/pattern/single-pattern/4-Blue.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                    />
                                )}
                            </Col>
                        ))}
                    </Row>
                ))}



                <div className="page-2-content block absolute top-[65%] left-2/4 z-[1]">
                    <div ref={dissolveRef} className="pb-4">
                        <TextSection
                            className="second-text flex justify-center flex-col absolute top-[65%] left-[15%]"
                            imgSrc='./assets/logo/to-tuong-logo/To-tuong-logo-black.png'
                            text="MỞ LÒNG VỚI THỰC TẠI"
                            imgWidth='492px'
                            textSize='text-[34px] pl-2'
                        />
                    </div>

                    <p className='pt-4 tracking-wide leading-[33px] text-[25px]'>"Tỏ tường: Mở lòng với thực tại" là chương trình mùa đầu tiên của TEDxHoChiMinhCity, mang đến những câu chuyện truyền cảm hứng từ các diễn giả tài năng thuộc nhiều lĩnh vực. Các bạn trẻ sẽ được khám phá thế giới từ nhiều góc nhìn, quan điểm khác nhau; đồng thời thấu hiểu và đối mặt với thực tại một cách chân thật nhất.</p>
                </div>
            </div>

            <div className="page-3-bg relative grid place-items-center">
                {[...Array(gridConfig.rows)].map((_, rowIndex) => (
                    <Row key={rowIndex} gutter={[gridConfig.gutter, gridConfig.gutter]}>
                        {items.slice(rowIndex * gridConfig.cols, (rowIndex + 1) * gridConfig.cols).map((_, colIndex) => (
                            <Col key={colIndex} style={colStyle}>
                                {(rowIndex === 0 && colIndex === 5) && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/3.png"
                                        style={{ width: '100%', height: 'auto' }}

                                    />
                                )}
                                {(rowIndex === 0 && colIndex === 12) && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/4.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {(rowIndex === 1 && colIndex === 2) && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/1.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {(rowIndex === 1 && colIndex === 4) && (
                                    <img
                                        src="./assets/pattern/single-pattern/4-Yellow.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                    />

                                )}

                                {(rowIndex === 1 && colIndex === 13) && (
                                    <img
                                        src="./assets/pattern/single-pattern/4-Green.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                    />

                                )}

                                {(rowIndex === 1 && colIndex === 15) && (

                                    <img
                                        src="./assets/pattern/overlay-pattern/5.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                {(rowIndex === 5 && colIndex === 2) && (
                                    <img
                                        src="./assets/pattern/single-pattern/1-Green.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                    />
                                )}
                                {(rowIndex === 6 && colIndex === 3) && (

                                    <img
                                        src="./assets/pattern/overlay-pattern/2.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}

                                {(rowIndex === 6 && colIndex === 13) && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/6.png"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}

                                {(rowIndex === 5 && colIndex === 14) && (
                                    <img
                                        src="./assets/pattern/single-pattern/3-Yellow.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                    />
                                )}

                                {(rowIndex === 7 && colIndex === 16) && (

                                    <img
                                        src="./assets/pattern/single-pattern/4-Blue.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                    />
                                )}






                            </Col>
                        ))}
                    </Row>
                ))}
                <motion.div className="container flex absolute  bg-transparent z-[2] h-full w-full" ref={constraintsRef}>
                    <motion.div
                        className="box-1 absolute top-2/4 left-[35%] h-[118.5px] w-[118.5px]  flex justify-center items-center text-center"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                        style={{ background: `url(${pattern1}) no-repeat center center`, backgroundSize: 'cover' }}
                    >
                    </motion.div>
                    <motion.div
                        className="box-2 absolute top-[40%] left-[45%] h-[118.5px] w-[118.5px] flex justify-center items-center"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                        style={{ background: `url(${pattern2}) no-repeat center center`, backgroundSize: 'cover' }}
                    >
                    </motion.div>
                    <motion.div
                        className="box-3 absolute top-[60%] left-[45%] h-[118.5px] w-[118.5px] flex justify-center items-center"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                        style={{ background: `url(${pattern3}) no-repeat center center`, backgroundSize: 'cover' }}
                    >
                    </motion.div>
                    <motion.div
                        className="box-4 absolute top-2/4 left-[55%] h-[118.5px] w-[118.5px] flex justify-center items-center"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                        style={{ background: `url(${pattern4}) no-repeat center center`, backgroundSize: 'cover' }}

                    >
                    </motion.div>

                </motion.div>



            </div>
        </div>
    );
};

export default SecondSection;
