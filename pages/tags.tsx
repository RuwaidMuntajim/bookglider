import { NextPage } from 'next'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import TagTitle from '../components/Title/TagTitle'
import Tags from '../components/Tags/Tags'
const tags:NextPage = () => {

  



  let list: (number | null)[];
  list = []
  for (let i = 0; i <= 600; i++) {
    list.push(i)
  }

  return (
    <div className='py-5'>
        <SearchBar/>
        <main className='w-screen flex flex-col justify-center items-center gap-y-10 pt-8'>
            <TagTitle/>
            <div className='blogs md:w-10/12 lg:w-9/12 gap-y-3'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-4  '>
                {
                  list.map(a => (
                    <Tags key={a}/>
                  ))
                }
            </div>
            </div>
        </main>
    </div>
  )
}

export default tags;