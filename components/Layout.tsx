import React, { FC } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import SearchBar from './SearchBar'

const Layout:FC = ({children}) => {
  return (
    <div className='overflow-y-hidden overflow-x-hidden'>
        <Nav/>
        <div style={{height: "88vh"}} className='overflow-y-scroll overflow-x-hidden'>
          {children}  
        </div>   
        
    </div>
  )
}

export default Layout;