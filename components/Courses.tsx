import React from 'react'
import { HoverEffect } from './ui/CardHover'
import { courses } from '@/data'

const Courses = () => {
  return (
    <div>
        <h1 className="heading" id="courses">
            University <span className="text-purple">courses</span> that I loved
        </h1>
        <div className='flex justify-center items-center gap-6'>
            <HoverEffect
            items={courses}
            />  
        </div>
    </div>
  )
}

export default Courses