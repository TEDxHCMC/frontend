import React from 'react'
import './boxtedx.scss'

const BoxTedx = () => {
  return (
    <div>
      <div className='container-edit max-w-sreen-2xl flex items-center justify-center'>
        <div className='box-edit flex flex-col justify-center items-center h-[462px] w-full bg-red'>
          <h2 className='text-[54px] font-bold'>OUR</h2>
          <h2 className='text-[54px] font-bold'>MISSION</h2>
        </div>
        <div className='box-edit flex flex-col justify-center items-center h-[462px] w-full bg-white'>
          <img className="h-28 sm:w-32 md:w-72 xl:w-96" src="./assets/logo/TEDx-logo/TEDx-Black-Medium.png" alt="TEDxHCMC logo" />
        </div>
        <div className='box-edit flex flex-col justify-center items-center h-[462px] w-full bg-black text-white'>
          <h2 className='text-[54px] font-bold'>OUR</h2>
          <h2 className='text-[54px] font-bold'>VISION</h2>
        </div>
      </div>
    </div>

  );
};

export default BoxTedx;