
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
                
                <div className="text-container absolute w-full h-[100vh] flex justify-center items-center flex-col">
                    <div className='drag-text absolute top-[44%] left-[70%]'> 
                        <p>Drag those boxes!</p>
                    </div>
                    
                </div>


                <motion.div className="container flex absolute overflow-hidden bg-transparent z-[2] h-full w-full" ref={constraintsRef}>
                    <motion.div
                        className="box-1 absolute top-2/4 left-[30%] h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                    //dragMomentum={false} 
                    >
                        Bản thân
                    </motion.div>
                    <motion.div
                        className="box-2 absolute top-[40%] left-[40%] h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                    >
                        Gia đình
                    </motion.div>
                    <motion.div
                        className="box-3 absolute top-[60%] left-[40%] h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                    >
                        Công việc
                    </motion.div>
                    <motion.div
                        className="box-4 top-2/4 left-2/4 absolute h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                    >
                        Bạn bè
                    </motion.div>
                </motion.div>

            </div>
    </div>
  );
};

export default SecondSection;
