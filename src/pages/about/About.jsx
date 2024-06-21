import React, { useEffect, useRef, useState } from 'react';
import './about.scss';

const About = () => {
  const [scrollDirection, setScrollDirection] = useState('');
  const slidingContentRef = useRef(null);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const boxContainerRef = useRef(null);
  const [gridItems, setGridItems] = useState([]);
  const [prevSlidePosition, setPrevSlidePosition] = useState(0);

  // Array of image file names
  const imageFileNames = [
    'Chi Jade.png',
    'DSC00001.png',
    'DSC00003.png',
    'DSC00010.png',
    'DSC00015.png',
    'DSC00021.png',
    'DSC00036.png',
    'DSC00069.png',
    'DSC00080.png',
    'DSC00083.png',
    'DSC00099.png',
    'DSC00111.png',
    'DSC00113.png',
    'DSC00134.png',
    'DSC00142.png',
    'DSC00146.png',
    'DSC00155.png',
    'DSC00159.png',
    'DSC00173.png',
    'DSC00178.png',
    'DSC00190.png',
    'DSC00197.png',
    'DSC00206.png',
    'DSC00210.png',
    'DSC00216.png',
    'DSC00251.png',
    'DSC00278.png',
    'DSC00293.png',
    'DSC00302.png',
    'DSC09978.png'
  ];

  // Preload images
  useEffect(() => {
    const preloadImages = () => {
      const promises = imageFileNames.map(imageName => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = `./src/assets/member-pics/${imageName}`;
          image.onload = resolve;
          image.onerror = reject;
        });
      });

      // Wait for all images to be preloaded
      Promise.all(promises)
        //.then(() => console.log('All images preloaded successfully'))
        .catch(error => console.error('Error preloading images:', error));
    };

    preloadImages();
  }, []);

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
      const slidingContentElement = slidingContentRef.current;
      if (slidingContentElement) {
        const boundingRect = slidingContentElement.getBoundingClientRect();
        const currentPosition = boundingRect.left;
        //console.log('Current horizontal position:', currentPosition);
        //console.log('Previous horizontal position:', prevPosition);
        setPrevSlidePosition(prevPosition);
        prevPosition = currentPosition;
      }
      animationFrameId = requestAnimationFrame(updatePosition); // Request the next animation frame
    };
  
    const handleAnimationStart = () => {
      updatePosition(); // Start updating the position when animation starts
    };
  
    const handleAnimationEnd = () => {
      cancelAnimationFrame(animationFrameId); // Cancel the animation frame loop when animation ends
    };
  
    slidingContentRef.current.addEventListener('animationstart', handleAnimationStart);
    slidingContentRef.current.addEventListener('animationend', handleAnimationEnd);
  
    return () => {
      slidingContentRef.current.removeEventListener('animationstart', handleAnimationStart);
      slidingContentRef.current.removeEventListener('animationend', handleAnimationEnd);
      cancelAnimationFrame(animationFrameId); // Clean up animation frame on component unmount
    };
  },[]);

   // Determine sliding direction based on scroll direction and previous slide position
   const slideDirection =
   scrollDirection === 'down'? 'slide-left' : 'slide-right';

  useEffect(() => {
    const handleSlidingPlaceScroll = () => {
      const firstBoxTop = document.getElementById('grid').getBoundingClientRect().top;
      const lastBoxBottom = document.getElementById('grid').getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const isFirstBoxInView = firstBoxTop <= viewportHeight;
      const isLastBoxInView = lastBoxBottom >= viewportHeight;
      setIsScrollingUp(isFirstBoxInView && isLastBoxInView);
      const containerScrollElement = boxContainerRef.current.querySelector('.container-scroll');
      if (containerScrollElement) {
        containerScrollElement.style.overflowY = isFirstBoxInView && isLastBoxInView ? 'scroll' : 'hidden';
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
          const imageUrl = `./src/assets/member-pics/${imageFileNames[index - 1]}`;
          cellItems.push(
            <div className="h-96" key={index} id={`cell-${index}`}>
              <img className="h-full w-full object-cover" src={imageUrl} alt={`Image ${index}`} />
            </div>
          );
        }
      }
      const marginTopClass = i % 2 === 0 ? '' : 'mt-48'; // Apply top margin every alternate group
      newGridItems.push(
        <div className={`flex flex-col ${marginTopClass} gap-5`} key={i} id={`group-${i}`}>
          {cellItems}
        </div>
      );
    }
    setGridItems(newGridItems);
  }, []);

  

  return (
    <div class="main-wrapped">
      <div className="video">
        Video
      </div>
      <div  ref={slidingContentRef} 
            className={`container mt-20 font-bold space-x-2 ${slideDirection}`} 
            style={{ '--start-position': `${prevSlidePosition}px` }}>
              <img className="h-10 opacity-70" src="../src/assets/pattern/single-pattern/2-Pink.png" alt="Pink image" />
              <h1>XIN CHÀO HỒ CHÍ MINH!</h1>
              <img className="h-10 opacity-70" src="./src/assets/pattern/single-pattern/4-Yellow.png" alt="Yellow image" />
              <h1>HÉ LÔ SÀI GÒN!</h1>
              <img className="h-10 opacity-70" src="../src/assets/pattern/single-pattern/2-Pink.png" alt="Pink image" />
              <h1>XIN CHÀO HỒ CHÍ MINH!</h1>
              <img className="h-10 opacity-70" src="./src/assets/pattern/single-pattern/4-Yellow.png" alt="Yellow image" />
              <h1>HÉ LÔ SÀI GÒN!</h1>
      </div>
      <div className="flex justify-center items-center pt-5 pb-20 space-x-20">
        <div className="h-32 flex flex-col justify-center items-center space-y-3">
          <p>
            We have all heard of hormone replacement therapy and balance, which helps restore our body’s natural functions through regulating hormone levels.
          </p>
          <p>
            Peptides work much the same. Peptides are natural to our bodies, they are very well-tolerated and incredibly safe.
          </p>
        </div>
        <div className='flex items-end h-32'>
          <button className="button-edit">LỤM LIỀN</button>
        </div>
      </div>
      <div className='container-edit max-w-sreen-2xl flex items-center justify-center'>
        <div className='box-edit bg-red'>
          <h2>OUR</h2>
          <h2>MISSION</h2>
        </div>
        <div className='box-edit bg-white'>
          <img className="h-28 sm:w-32 md:w-72 xl:w-96" src="./src/assets/logo/TEDx-logo/TEDx-Black-Medium.png" alt="TEDxHCMC logo" />
        </div>
        <div className='box-edit bg-black text-white'>
          <h2>OUR</h2>
          <h2>VISION</h2>
        </div>
      </div>
      <div>
        <div className='flex justify-center items-center mt-10 mb-5'>
          <h3>OUR MEMBER</h3>
        </div>
        <div ref={boxContainerRef}>
          <div className={`container-scroll ${isScrollingUp ? 'slide-up' : ''}`}>
            <div className="grid grid-cols-4 gap-x-5 mx-5 my-5" id="grid">
              {gridItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
