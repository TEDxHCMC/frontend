import React, { useEffect, useRef, useState } from "react";
import "./introduction.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Introduction = () => {

  useEffect(() => {
    const animation = gsap.to(".text_container", {
      x: "100vw", // Adjust as necessary for the amount of movement
      duration: 10, // Adjust the duration for speed
      ease: "power1.inOut", // Smooth easing
      paused: true, // Start paused to control via ScrollTrigger
    });

    ScrollTrigger.create({
      trigger: ".text_container",
      start: "top center",
      end: "bottom center",
      //markers: true,
      onUpdate: (self) => {
        if (self.direction === 1) {
          animation.play();
        } else {
          animation.reverse();
        }
      },
    });
  }, []);


  return (
    <div>
      {/* <div className="text_container container flex justify-center items-center font-bold space-x-2 w-full mb-5 mt-[20px] 
                sm:h-[50px] sm:mt-[30px] sm:mb-[25px] 
                md:h-[72px] md:mt-[40px] md:mb-[30px] 
                lg:h-[100px] lg:mt-[50px] lg:mb-[40px] 
                xl:h-[156px] xl:mt-[20px] xl:mb-10">
        <img
          className="h-[22px] mt-[5px] opacity-70 sm:h-[33px] sm:mt-[7.5px] md:h-[44px] md:mt-[10px] lg:h-[66px] lg:mt-[15px] xl:h-[88px] xl:mt-[20px]"
          src="./assets/pattern/single-pattern/2-Pink.png"
          alt="Pink image"
        />

        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] xl:text-[128px]">XIN CHÀO HỒ CHÍ MINH!</h1>
        <img
          className="h-[22px] mt-[5px] opacity-70 sm:h-[33px] sm:mt-[7.5px] md:h-[44px] md:mt-[10px] lg:h-[66px] lg:mt-[15px] xl:h-[88px] xl:mt-[20px]"
          src="./assets/pattern/single-pattern/4-Yellow.png"
          alt="Yellow image"
        />
        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] xl:text-[128px]">HÉ LÔ SÀI GÒN!</h1>

        <img
          className="h-[22px] mt-[5px] opacity-70 sm:h-[33px] sm:mt-[7.5px] md:h-[44px] md:mt-[10px] lg:h-[66px] lg:mt-[15px] xl:h-[88px] xl:mt-[20px]"
          src="./assets/pattern/single-pattern/2-Pink.png"
          alt="Pink image"
        />

        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] xl:text-[128px]">XIN CHÀO HỒ CHÍ MINH!</h1>
        <img
          className="h-[22px] mt-[5px] opacity-70 sm:h-[33px] sm:mt-[7.5px] md:h-[44px] md:mt-[10px] lg:h-[66px] lg:mt-[15px] xl:h-[88px] xl:mt-[20px]"
          src="./assets/pattern/single-pattern/4-Yellow.png"
          alt="Yellow image"
        />
        <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] xl:text-[128px]">HÉ LÔ SÀI GÒN!</h1>
      </div> */}

      <div className="flex justify-center items-center pt-3 pb-10 ">
        <div className="box-text flex flex-col justify-center items-center md:space-y-10 space-y-5">
          <p className="text-[14px] sm:text-[24px] md:w-[657px] w-[257px] tracking-[0.5px] sm:leading-[32px] leading-[18px]">
            Được thành lập vào năm 2024, TEDxHoChiMinhCity là nơi kết nối các
            bạn trẻ tràn đầy nhiệt huyết thông qua các hoạt động trải nghiệm sự
            kiện chứa đựng những câu chuyện mới mẻ, đầy cảm hứng.
          </p>
          <p className="text-[14px] sm:text-[24px] md:w-[657px] w-[257px] tracking-[0.5px] sm:leading-[32px] leading-[18px]">
            TEDxHoChiMinhCity mong muốn cùng các bạn trẻ khám phá thế giới qua
            những câu chuyện truyền cảm hứng và nhân văn, mở ra những góc nhìn
            mới và tạo nên những tác động tích cực cho bản thân và cộng đồng.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
