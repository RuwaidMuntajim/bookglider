import React, { FC } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import bOOKGLIDERS from '../assets/img/bOOKGLIDERS.svg';
import image6 from '../assets/img/image6.svg'
const Nav:FC = () => {
  return (
    <div style={{backgroundColor: "#1D1D1F", height: "12vh"}} className=' w-screen flex items-center justify-center  px-auto'>
        <div className=' w-10/12 gap-6 flex items-center justify-between text-white'>
            <div className='flex items-center justify-between text-sm font-normal gap-4'>
                <Link href="/">Home</Link>
                <Link href="/blogs">All</Link>
                <Link href="/tags">Tags</Link>
            </div>
            <div  className='flex items-center justify-items-center gap-2 text-3xl font-black'>
                <Image src={image6} height={25} width={25}/>
                <Image src={bOOKGLIDERS} height={25} width={260}/>
            </div>
            <div className='flex items-center justify-center'>
                <button className='border-2 border-white rounded-lg p-2 text-sm font-semibold'><i className="fa-solid fa-magnifying-glass text-white"></i> Search</button>
            </div>
        </div>
    </div>
  )
}

export default Nav;