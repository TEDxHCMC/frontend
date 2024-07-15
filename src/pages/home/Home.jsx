import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import {   motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import './home.scss';
import 'animate.css';

const Home = () => {
    const [scrollTriggered, setScrollTriggered] = useState(false);
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
    const constraintsRef = useRef(null);

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
        <section className="home">
            <div className='lg:block hidden'>
                <div className='page-1'>
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
                    <div className='page-1-content dissolve-effect' >
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

            <div id="scroll-content" className="page-2-bg">
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

                <div className="page-2-content">
                        <div ref={dissolveRef} className="pb-4">
                        <TextSection
                            className="second-text"
                            imgSrc='./assets/logo/to-tuong-logo/To-tuong-logo-black.png'
                            text="MỞ LÒNG VỚI THỰC TẠI"
                            imgWidth='492px'
                            textSize='text-[34px] pl-2'
                            
                        />
                        </div>
                    
                    <p className='pt-4 tracking-wide leading-[33px] text-[25px]'>"Tỏ tường: Mở lòng với thực tại" là chương trình mùa đầu tiên của TEDxHoChiMinhCity, mang đến những câu chuyện truyền cảm hứng từ các diễn giả tài năng thuộc nhiều lĩnh vực. Các bạn trẻ sẽ được khám phá thế giới từ nhiều góc nhìn, quan điểm khác nhau; đồng thời thấu hiểu và đối mặt với thực tại một cách chân thật nhất.</p>
                </div>
            </div>

            <div className="page-3-bg">
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
                
                <div className="text-container">
                        
                    <div className='drag-text'> 
                        <p>Drag those boxes!</p>
                    </div>
                    
                </div>


                <motion.div className="container h-full w-full" ref={constraintsRef}>
                    <motion.div
                        className="box-1 h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                    //dragMomentum={false} 
                    >
                        Bản thân
                    </motion.div>
                    <motion.div
                        className="box-2 h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                    >
                        Gia đình
                    </motion.div>
                    <motion.div
                        className="box-3 h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                    >
                        Công việc
                    </motion.div>
                    <motion.div
                        className="box-4 h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]"
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.5}
                    >
                        Bạn bè
                    </motion.div>
                </motion.div>

            </div>


        </section>

    );
};

export default Home;
