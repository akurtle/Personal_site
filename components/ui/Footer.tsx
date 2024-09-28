import React from 'react'

const Footer = () => {
  return (
    <div>
        <h1 className="heading" id="contact">
            Lets <span className="text-purple">connect!</span>
        </h1>
    
        <div className='flex justify-center text-center gap-10 my-10'>
            <a href='https://www.linkedin.com/in/mirza-yousuf-myzab/'>LinkedIn</a>
            <a href='https://github.com/akurtle'>GitHub</a>
            <a href='mailto:myzbaig@mun.ca'>Gmail</a>
            <a href=''>Resume</a>
        </div>
    </div>

    
  )
}

export default Footer