
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import {   motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import './secondsection.scss';
import 'animate.css';

const SecondSection = () => {
    const dissolveRef = useRef(null);
    const constraintsRef = useRef(null);

    const colStyle = {
        width: '157px',
        height: '157px',
        border: '0.5px solid #ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

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

    function useParallax(value, distance,  scaleFactor) {
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
        <div id="scroll-content" className="page-2-bg relative grid place-items-center">
                <Row gutter={[8, 8]}>
                    {[...Array(8)].map((_, index) => (
                        <Col key={index} style={colStyle}>
                            {index === 2 && (
                                <img
                                    src="./assets/pattern/overlay-pattern/3.png"
                                    style={{ width: '100%', height: 'auto' }}

                                />
                            )}
                            {index === 5 && (
                                <img
                                    src="./assets/pattern/overlay-pattern/4.png"
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
                                    src="./assets/pattern/overlay-pattern/1.png"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            )}
                            {index === 1 && (
                                <img
                                    src="./assets/pattern/single-pattern/4-Yellow.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                            {index === 6 && (
                                <img
                                    src="./assets/pattern/single-pattern/4-Green.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                            {index === 7 && (
                                <img
                                    src="./assets/pattern/overlay-pattern/5.png"
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

                            {index === 6 && (
                                <img
                                    src="./assets/pattern/overlay-pattern/6.png"
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
                                    src="./assets/pattern/overlay-pattern/2.png"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            )}
                            {index === 7 && (
                                <img
                                    src="./assets/pattern/single-pattern/4-Blue.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                        </Col>
                    ))}
                </Row>

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
                <Row gutter={[8, 8]}>
                    {[...Array(8)].map((_, index) => (
                        <Col key={index} style={colStyle}>
                            {index === 2 && (
                                <img
                                    src="./assets/pattern/overlay-pattern/3.png"
                                    style={{ width: '100%', height: 'auto' }}

                                />
                            )}
                            {index === 5 && (
                                <img
                                    src="./assets/pattern/overlay-pattern/4.png"
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
                                    src="./assets/pattern/overlay-pattern/1.png"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            )}
                            {index === 1 && (
                                <img
                                    src="./assets/pattern/single-pattern/4-Yellow.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                            {index === 6 && (
                                <img
                                    src="./assets/pattern/single-pattern/4-Green.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                            {index === 7 && (
                                <img
                                    src="./assets/pattern/overlay-pattern/5.png"
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
                                    src="./assets/pattern/overlay-pattern/2.png"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            )}
                            {index === 6 && (
                                <img
                                    src="./assets/pattern/overlay-pattern/6.png"
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
                                    src="./assets/pattern/single-pattern/4-Blue.png"
                                    style={{ transform: 'scale(1.28)', width: '100%', height: 'auto' }}
                                />
                            )}
                        </Col>
                    ))}
                </Row>
             
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
