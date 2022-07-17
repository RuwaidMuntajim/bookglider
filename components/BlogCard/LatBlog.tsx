import React, { FC } from 'react';
import Image from 'next/image';
import idiv from '../../assets/img/idiv.jpg';


const LatBlog:FC = () => {
  
  return (
    <div className="w-full h-full bg-white rounded-lg grid grid-cols-2">
      <div className='flex justify-center items-center h-full'>
        <Image src={idiv} alt="" className='object-contain h-full'/>
      </div>
      
      <div className='flex flex-col justify-center items-start gap-y-5 px-3 py-6'>
        <p className='text-gray-400 text-base font-semibold'>Skill Development</p>
        <div className='gap-y-3'>
        <p className='text-3xl font-extrabold'>Sometimes title does the opposite</p>
        <p className='text-xl font-thin'>Apple is rolling out a series of new heart health resources in February to support Apple Watch with the inclusion of activity and workout apps ... </p>
        </div>
        <p className='text-gray-400 text-base font-semibold'>January 31, 2021</p>
      </div>                  
    </div>
  )
}

export default LatBlog;