import React, { useEffect, useRef, useState } from 'react';
import './groupimages.scss';

const GroupImages = () => {
    const slidingContentRef = useRef(null);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const boxContainerRef = useRef(null);
    const [gridItems, setGridItems] = useState([]);
    
    const imageFileNames = [
        'Chi Jade.png', 'DSC00001.png', 'DSC00003.png', 'DSC00010.png',
        'DSC00015.png', 'DSC00021.png', 'DSC00036.png', 'DSC00069.png',
        'DSC00080.png', 'DSC00083.png', 'DSC00099.png', 'DSC00111.png',
        'DSC00113.png', 'DSC00134.png', 'DSC00142.png', 'DSC00146.png',
        'DSC00155.png', 'DSC00159.png', 'DSC00173.png', 'DSC00178.png',
        'DSC00190.png', 'DSC00197.png', 'DSC00206.png', 'DSC00210.png',
        'DSC00216.png', 'DSC00251.png', 'DSC00278.png', 'DSC00293.png',
        'DSC00302.png', 'DSC09978.png'
    ];

    useEffect(() => {
        const preloadImages = () => {
            const promises = imageFileNames.map(imageName => {
                return new Promise((resolve, reject) => {
                    const image = new Image();
                    image.src = `./assets/member-pics/${imageName}`;
                    image.onload = resolve;
                    image.onerror = reject;
                });
            });

            Promise.all(promises)
                .catch(error => console.error('Error preloading images:', error));
        };

        preloadImages();
    }, [imageFileNames]);

    useEffect(() => {
        let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setScrollDirection(currentScrollTop > lastScrollTop ? 'down' : 'up');
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let animationFrameId;
        let prevPosition = 0;

        const updatePosition = () => {
            if (slidingContentRef.current) {
                const boundingRect = slidingContentRef.current.getBoundingClientRect();
                const currentPosition = boundingRect.left;
                setPrevSlidePosition(prevPosition);
                prevPosition = currentPosition;
            }
            animationFrameId = requestAnimationFrame(updatePosition);
        };

        const handleAnimationStart = () => {
            updatePosition();
        };

        const handleAnimationEnd = () => {
            cancelAnimationFrame(animationFrameId);
        };

        if (slidingContentRef.current) {
            slidingContentRef.current.addEventListener('animationstart', handleAnimationStart);
            slidingContentRef.current.addEventListener('animationend', handleAnimationEnd);
        }

        return () => {
            if (slidingContentRef.current) {
                slidingContentRef.current.removeEventListener('animationstart', handleAnimationStart);
                slidingContentRef.current.removeEventListener('animationend', handleAnimationEnd);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, []);


    useEffect(() => {
        const handleSlidingPlaceScroll = () => {
            const gridElement = document.getElementById('grid');
            if (gridElement) {
                const firstBoxTop = gridElement.getBoundingClientRect().top;
                const lastBoxBottom = gridElement.getBoundingClientRect().bottom;
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                const isFirstBoxInView = firstBoxTop <= viewportHeight;
                const isLastBoxInView = lastBoxBottom >= viewportHeight;
                setIsScrollingUp(isFirstBoxInView && isLastBoxInView);

                const containerScrollElement = boxContainerRef.current?.querySelector('.container-scroll');
                if (containerScrollElement) {
                    containerScrollElement.style.overflowY = isFirstBoxInView && isLastBoxInView ? 'scroll' : 'hidden';
                }
            }
        };

        window.addEventListener('scroll', handleSlidingPlaceScroll);

        return () => {
            window.removeEventListener('scroll', handleSlidingPlaceScroll);
        };
    }, []);

    useEffect(() => {
        const newGridItems = [];
        for (let i = 0; i < 4; i++) {
            const cellItems = [];
            for (let j = 0; j < 8; j++) {
                const index = i * 8 + j + 1;
                if (index <= imageFileNames.length) {
                    const imageUrl = `./assets/member-pics/${imageFileNames[index - 1]}`;
                    cellItems.push(
                        <div className="h-96" key={index} id={`cell-${index}`}>
                            <img className="h-full w-full object-cover" src={imageUrl} alt={`Image ${index}`} />
                        </div>
                    );
                }
            }
            const marginTopClass = i % 2 === 0 ? '' : 'mt-48';
            newGridItems.push(
                <div className={`flex flex-col ${marginTopClass} gap-5`} key={i} id={`group-${i}`}>
                    {cellItems}
                </div>
            );
        }
        setGridItems(newGridItems);
    }, [imageFileNames]);

    return (
        <div>
            <div className='flex justify-center items-center mt-10 mb-5'>
                <h3 className='text-[54px] font-bold'>OUR MEMBER</h3>
            </div>
            <div ref={boxContainerRef}>
                <div className={`container-scroll h-[500px] ${isScrollingUp ? 'slide-up' : ''}`}>
                    <div className="grid grid-cols-4 gap-x-5 mx-5 my-5" id="grid">
                        {gridItems}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupImages;
