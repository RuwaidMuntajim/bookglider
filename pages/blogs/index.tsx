import { NextPage } from 'next';
import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard';
import SearchBar from '../../components/SearchBar';
import AllTitle from '../../components/Title/AllTitle';
const Blogs:NextPage = () => {
  return (
    <div className='py-5'>
        <SearchBar/>
        <main className='w-screen flex flex-col justify-center items-center gap-y-10 pt-8'>
            <AllTitle/>
            <div className='blogs md:w-10/12 lg:w-9/12 gap-y-3'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-4'>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
            </div>
        </main>
    </div>
  )
}

export default Blogs;