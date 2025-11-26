import React from 'react'

import { Meteors } from '@/components/ui/Meteor'
import { Spotlight } from '@/components/ui/Spotlight'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import { SparklesCore } from '@/components/ui/sparkles'
import { FaArrowAltCircleLeft, FaArrowCircleLeft, FaArrowLeft } from 'react-icons/fa'


function Banner() {
    return (
        <div className='pt-36'>


            <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0 ">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            </div>
            <div className="h-20 relative hidden lg:block">
                {/* Gradients */}


                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(500px_100px_at_bottom,transparent_20%,white)]"></div>

                <div className="absolute inset-x-30 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px]  blur-sm" />
                <div className="absolute inset-x-30 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px " />
                <div className="absolute inset-x-80 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px]  blur-sm" />
                <div className="absolute inset-x-80 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center
                    text-blue-100 max-w-80'>Personal Website</h2>

                    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Mirza Yousuf' />

                    <div className='flex flex-row'>
                        <a href='/' className='absolute left-10 flex flex-row justify-center items-center gap-2'>
                            <FaArrowLeft size={20} />
                            <span className='hidden lg:block'>Main</span>
                            
                        </a>
                        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                            Check out some more projects below!
                        </p>

                    </div>
                    <a href='#more_projects' className=''>
                        <IoChevronDownCircleOutline size={50} />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Banner