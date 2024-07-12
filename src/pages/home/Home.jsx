import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'antd';
import './home.scss';
import 'animate.css';

const Home = () => {
    const [scrollDirection, setScrollDirection] = useState("");
    const dissolveRef = useRef<HTMLImageElement>(null); // Adjusted type to match usage

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

    const containerRef = useRef<HTMLDivElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);
    const isClicked = useRef(false); // Removed unnecessary typing
    const coords = useRef({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    });

    useEffect(() => {
        if (!boxRef.current || !containerRef.current) return;
    
        const box = boxRef.current;
        const container = containerRef.current;
    
        const onMouseDown = (e) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };
    
        const onMouseUp = () => {
            isClicked.current = false;
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
        };
    
        const onMouseMove = (e) => {
            if (!isClicked.current) return;
    
            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;
    
            box.style.top = `${nextY}px`;
            box.style.left = `${nextX}px`;
        };
    
        box.addEventListener('mousedown', onMouseDown);
        box.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseUp);
    
        const cleanup = () => {
            box.removeEventListener('mousedown', onMouseDown);
            box.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseUp);
        };
    
        return cleanup;
    }, []);
    


    return (
        <section className="home">
            <div className='lg:block hidden'>
                <div className='page-1'>
                    <Row gutter={[8, 8]}>
                        {[...Array(8)].map((_, index) => (
                            <Col key={index} style={colStyle}></Col>
                        ))}
                    </Row>
                    {/* Additional Rows omitted for brevity */}
                </div>
            </div>

            <div className='block lg:hidden'>
                Điện thoại ver
            </div>

            <div id="scroll-content" className="page-2-bg">
                <Row gutter={[8, 8]}>
                    {[...Array(8)].map((_, index) => (
                        <Col key={index} style={colStyle}></Col>
                    ))}
                </Row>
                {/* Additional Rows omitted for brevity */}
                <div className="page-2-content">
                    <img
                        src='./assets/logo/to-tuong-logo/To-tuong-logo-black.png'
                        style={{ width: '831px', height: 'auto' }}
                        ref={dissolveRef}
                    />
                    <h2 className='text-[34px] pl-3'>MỞ LÒNG VỚI THỰC TẠI</h2>
                    <p className='pt-4 tracking-wide leading-[33px] text-[25px]'>
                        "Tỏ tường: Mở lòng với thực tại" là chương trình mùa đầu tiên của TEDxHoChiMinhCity, mang đến những câu chuyện truyền cảm hứng từ các diễn giả tài năng thuộc nhiều lĩnh vực. Các bạn trẻ sẽ được khám phá thế giới từ nhiều góc nhìn, quan điểm khác nhau; đồng thời thấu hiểu và đối mặt với thực tại một cách chân thật nhất.
                    </p>
                </div>
            </div>

            <div className="page-3-bg">
                <Row gutter={[8, 8]}>
                    {[...Array(8)].map((_, index) => (
                        <Col key={index} style={colStyle}></Col>
                    ))}
                </Row>
    
                <div className="page-3-content">
                    <div className='page-3-content absolute top-0 '>
                        <img
                            src='./assets/logo/to-tuong-logo/To-tuong-logo-black.png'
                            style={{ width: '492px', height: 'auto' }}
                        />
                        <h2 className='text-[25px] pl-2'>MỞ LÒNG VỚI THỰC TẠI</h2>
                    </div>
                    <h3 className='text-[32px] text-center pt-[98px]'>Bạn có thể tô màu 2 ô trong 4 ô này! </h3>
                    <div ref={containerRef} className="container">
                        <div ref={boxRef} className="box">
                            <div className="box-1 h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]">Bản thân</div>
                            <div className="box-2 h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]">Gia đình</div>
                            <div className="box-3 h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]">Công việc</div>
                            <div className="box-4 h-[151px] w-[237px] flex justify-center items-center text-center text-[32px]">Bạn bè</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
