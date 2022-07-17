import React, { FC } from 'react'

const SearchBar:FC = () => {
  return (
    <div className='w-screen h-24 py-3 flex justify-center items-center gap-2'>
        <button className='text-lg text-gray-300 fa-solid fa-magnifying-glass'></button>
        <input
         style={{outline: 'none'}}
         className='px-4 w-5/12 h-1/2 rounded-lg border-2 border-gray-300 caret-gray-300' type="text" name="search" placeholder={`Search Whatever you want`} />
    </div>
  )
}

export default SearchBar;