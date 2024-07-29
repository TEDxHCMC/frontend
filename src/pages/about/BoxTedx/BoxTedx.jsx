import React from 'react'
import './boxtedx.scss'

const BoxTedx = () => {
  return (
    <section className='about-banner w-full'>
      <div className='sm:flex hidden items-center justify-center'>
        <div className='box flex justify-center items-center h-[462px] w-full bg-[#ec1014]'>
          <h2 className='sm:text-[64px] text-[32px] text-center font-bold'>SỨ <br></br> MỆNH</h2>
        </div>
        <div className='flex justify-center items-center h-[462px] w-full bg-white'>
          <img className="h-16 md:h-20 lg:h-32 xl:h-h32" 
               src="./assets/logo/TEDx-logo/TEDx-Black-Medium.png" alt="TEDxHCMC logo" />
        </div>
        <div className='box flex justify-center items-center h-[462px] w-full bg-black text-white'>
          <h2 className='sm:text-[64px] text-[32px] text-center font-bold'>TẦM <br></br> NHÌN</h2>
        </div>
      </div>

      <div className='sm:hidden container-edit'>
          <div className='box flex justify-center items-center w-full h-[162px] bg-[#ec1014]'>
            <h2 className='sm:text-[64px] text-[32px] text-center font-bold'>SỨ MỆNH</h2>
          </div>

          <div className='box flex justify-center items-center w-full h-[162px] bg-white'>
            <img className="object-cover" 
                 src="./assets/logo/TEDx-logo/TEDx-Black-Medium.png" alt="TEDxHCMC logo" />
          </div>
          
          <div className='box flex justify-center items-center w-full h-[162px] bg-black text-white'>
            <h2 className='sm:text-[64px] text-[32px] text-center font-bold'>TẦM NHÌN</h2>
          </div>
        </div>
    </section>

  );
};

export default BoxTedx;