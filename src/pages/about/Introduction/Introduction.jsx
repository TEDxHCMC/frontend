import React, { useEffect, useRef, useState } from "react";
import "./introduction.scss";

const Introduction = () => {
  const slidingContentRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("");
  const [prevSlidePosition, setPrevSlidePosition] = useState(0);

  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollDirection(currentScrollTop > lastScrollTop ? "down" : "up");
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

    slidingContentRef.current.addEventListener(
      "animationstart",
      handleAnimationStart
    );
    slidingContentRef.current.addEventListener(
      "animationend",
      handleAnimationEnd
    );

    return () => {
      slidingContentRef.current.removeEventListener(
        "animationstart",
        handleAnimationStart
      );
      slidingContentRef.current.removeEventListener(
        "animationend",
        handleAnimationEnd
      );
      cancelAnimationFrame(animationFrameId); // Clean up animation frame on component unmount
    };
  }, []);

  // Determine sliding direction based on scroll direction and previous slide position
  const slideDirection =
    scrollDirection === "down" ? "slide-left" : "slide-right";

  return (
    <div>
      <div
        ref={slidingContentRef}
        className={`container flex mt-20 mb-10 h-[156px] w-full justify-center items-center font-bold space-x-2 ${slideDirection}`}
        style={{ "--start-position": `${prevSlidePosition}px` }}
      >
        <img
          className="h-[88px] mt-[10px] opacity-70"
          src="./assets/pattern/single-pattern/2-Pink.png"
          alt="Pink image"
        />
        <h1 className="text-[128px]">XIN CHÀO HỒ CHÍ MINH!</h1>
        <img
          className="h-[88px] mt-[10px] opacity-70"
          src="./assets/pattern/single-pattern/4-Yellow.png"
          alt="Yellow image"
        />
        <h1 className="text-[128px]">HÉ LÔ SÀI GÒN!</h1>
        <img
          className="h-[88px] mt-[10px] opacity-70"
          src="./assets/pattern/single-pattern/2-Pink.png"
          alt="Pink image"
        />
        <h1 className="text-[128px]">XIN CHÀO HỒ CHÍ MINH!</h1>
        <img
          className="h-[88px] mt-[10px] opacity-70"
          src="./assets/pattern/single-pattern/4-Yellow.png"
          alt="Yellow image"
        />
        <h1 className="text-[128px]">HÉ LÔ SÀI GÒN!</h1>
      </div>
      <div className="flex justify-center items-center pt-5 pb-20 space-x-20">
        <div className="box-text h-32 flex flex-col justify-center items-center space-y-3">
          <p className="text-[16px] w-[357px] tracking-[0.5px] leading-[18px]">
            Được thành lập vào năm 2024, TEDxHoChiMinhCity là nơi kết nối các
            bạn trẻ tràn đầy nhiệt huyết thông qua các hoạt động trải nghiệm sự
            kiện chứa đựng những câu chuyện mới mẻ, đầy cảm hứng.
          </p>
          <p className="text-[16px] w-[357px] tracking-[0.5px] leading-[18px]">
            TEDxHoChiMinhCity mong muốn cùng các bạn trẻ khám phá thế giới qua
            những câu chuyện truyền cảm hứng và nhân văn, mở ra những góc nhìn
            mới và tạo nên những tác động tích cực cho bản thân và cộng đồng.
          </p>
        </div>
        <div className="flex items-end h-32">
          <button className="button-edit h-[51px] w-[170px] rounded-[40px] text-[14px]">
            LỤM LIỀN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
