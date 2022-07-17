import React, { FC } from 'react'
import Image from 'next/image'
import idiv from '../../assets/img/idiv.jpg'

interface blogCardProp {
  
}


const BlogCard:FC = () => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center bg-white rounded-xl'>
      <Image src={idiv} alt="" height={300} width={200} className='object-contain rounded-xl'/>
      <div className='flex flex-col  justify-center items-start p-7 gap-1'>
        <p className='text-gray-400 text-xs lg:text-sm font-semibold'>Skill Development</p>
        <div className='gap-y-3 text-start pr-3'>
          <p className='md:text-xl lg:text-2xl font-extrabold'>Sometimes title does the opposite</p>
          <p className='md:text-base lg:text-lg font-thin'>Apple is rolling out a series of new heart health resources in February to support Apple Watch with the inclusion of activity and workout apps ... </p>
        </div>
        <p className='text-gray-400 text-xs lg:text-sm font-semibold'>January 31, 2021</p>
      </div>
  
    </div>
  )
}

export default BlogCard