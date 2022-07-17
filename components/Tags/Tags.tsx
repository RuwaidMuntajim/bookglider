import React, { FC } from 'react'
import Link from 'next/link'

interface tagsProp {
  key: number | null
}

const Tags:FC<tagsProp> = ({key}) => {
  return (
    <p className='text-base text-center font-medium'>Skill Development</p>
  )
}

export default Tags