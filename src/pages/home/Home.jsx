import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import './home.scss';

const Home = () => {
    const [scrollDirection, setScrollDirection] = useState("");

    // useEffect(() => {
    //     let lastScrollTop =
    //         window.pageYOffset || document.documentElement.scrollTop;

    //     const handleScroll = () => {
    //         const currentScrollTop =
    //             window.pageYOffset || document.documentElement.scrollTop;
    //         setScrollDirection(
    //             currentScrollTop > lastScrollTop ? "down" : "up"
    //         );
    //         lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

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
        <div className="">
            <section className="hero-home">
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
                        <div className='page-1-content' style={{animation: 'fadeInLeft 1s forwards'}}>
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

                <div className="page-2">
                <Row gutter={[8, 8]}>
                        {[...Array(8)].map((_, index) => (
                            <Col key={index} style={colStyle}>
                                {index === 2 && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/3.png"
                                        style={{ width: '100%', height: 'auto', animation: 'flash 2s infinite' }}
                                    />
                                )}
                                {index === 5 && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/4.png"
                                        style={{ width: '100%', height: 'auto', animation: 'flash 2s infinite'  }}
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
                                        style={{ width: '100%', height: 'auto', animation: 'flash 2s infinite'  }}
                                    />
                                )}
                                {index === 1 && (
                                    <img
                                        src="./assets/pattern/single-pattern/4-Yellow.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto', animation: 'flash 2s infinite'  }}
                                    />
                                )}
                                {index === 6 && (
                                    <img
                                        src="./assets/pattern/single-pattern/4-Green.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto', animation: 'flash 2s infinite'  }}
                                    />
                                )}
                                {index === 7 && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/5.png"
                                        style={{ width: '100%', height: 'auto', animation: 'flash 2s infinite' }}
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
                                        style={{ width: '100%', height: 'auto', animation: 'flash 2s infinite'  }}
                                    />
                                )}
                                {index === 6 && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/6.png"
                                        style={{ width: '100%', height: 'auto', animation: 'flash 2s infinite'  }}
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
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto', animation: 'flash 2s infinite'  }}
                                    />
                                )}
                            </Col>
                        ))}
                    </Row>
                </div>

                <div id="scroll-content" className="page-3-bg">
                    <Row gutter={[8, 8]}>
                        {[...Array(8)].map((_, index) => (
                            <Col key={index} style={colStyle}>
                                {index === 2 && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/3.png"
                                        style={{ width: '100%', height: 'auto'}}
                            
                                    />
                                )}
                                {index === 5 && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/4.png"
                                        style={{ width: '100%', height: 'auto'}}
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
                                        style={{ width: '100%', height: 'auto'}}
                                    />
                                )}
                                {index === 1 && (
                                    <img
                                        src="./assets/pattern/single-pattern/4-Yellow.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto'}}
                                    />
                                )}
                                {index === 6 && (
                                    <img
                                        src="./assets/pattern/single-pattern/4-Green.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto'}}
                                    />
                                )}
                                {index === 7 && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/5.png"
                                        style={{ width: '100%', height: 'auto'}}
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

                    <div className="page-3-content">
                        <img src='./assets/logo/to-tuong-logo/To-tuong-logo-black.png'
                             style={{ width: '831px', height: 'auto', animation: 'dissolveIn 5s forwards' }}
                        />
                        <h2>MỞ LÒNG VỚI THỰC TẠI</h2>
                        <p>"Tỏ tường: Mở lòng với thực tại" là chương trình mùa đầu tiên của TEDxHoChiMinhCity, mang đến những câu chuyện truyền cảm hứng từ các diễn giả tài năng thuộc nhiều lĩnh vực. Các bạn trẻ sẽ được khám phá thế giới từ nhiều góc nhìn, quan điểm khác nhau; đồng thời thấu hiểu và đối mặt với thực tại một cách chân thật nhất.</p>
                    </div>
                </div>

                <div className="page-4-bg">
                <Row gutter={[8, 8]}>
                        {[...Array(8)].map((_, index) => (
                            <Col key={index} style={colStyle}>
                                {index === 2 && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/3.png"
                                        style={{ width: '100%', height: 'auto'}}
                            
                                    />
                                )}
                                {index === 5 && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/4.png"
                                        style={{ width: '100%', height: 'auto'}}
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
                                        style={{ width: '100%', height: 'auto'}}
                                    />
                                )}
                                {index === 1 && (
                                    <img
                                        src="./assets/pattern/single-pattern/4-Yellow.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto'}}
                                    />
                                )}
                                {index === 6 && (
                                    <img
                                        src="./assets/pattern/single-pattern/4-Green.png"
                                        style={{ transform: 'scale(1.28)', width: '100%', height: 'auto'}}
                                    />
                                )}
                                {index === 7 && (
                                    <img
                                        src="./assets/pattern/overlay-pattern/5.png"
                                        style={{ width: '100%', height: 'auto'}}
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

                    <div className="page-4-content">
                        <img src='./assets/logo/to-tuong-logo/To-tuong-logo-black.png'
                                style={{ width: '831px', height: 'auto', animation: 'dissolveIn 5s forwards' }}
                            />
                        <h2>MỞ LÒNG VỚI THỰC TẠI</h2>
                        <h3>Bạn có thể tô màu 2 ô trong 4 ô này! </h3>
                        <div className="box-1">Bản thân</div>
                        <div className="box-2">Gia đình</div>
                        <div className="box-3">Công việc</div>
                        <div className="box-4">Bạn bè</div>
                    </div>


                </div>

            </section>
        </div>

    );
};

export default Home;
