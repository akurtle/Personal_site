'use client'
import { cn } from "@/utils/cn";
import {GlobeDemo} from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";

import {IoCopyOutline} from "react-icons/io5"


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;
}) => {

  const [copied , setCopied] = useState(false);

  const handleCopy =()=>{
    navigator.clipboard.writeText('myzbaig@mun.ca');
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border-white/[0.1]",
        className
      )}
      style={
        {
            background: 'rgb(2,0,20)',
            backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(4,4,14,1) 80%, rgba(255,255,255,1) 100%)'
        }
      }
    >
        <div className={`${id === 6 && "flex justify-center"} h-full`}>
            <div className="w-full h-full absolute">
                {
                    img && (
                        <img 
                        src={img}
                        alt={img}
                        className={cn(imgClassName,'object-cover,object-center')}
                        
                        />
                    )
                }

            </div>
            <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opactity-80'}`}>
                {spareImg && (
                   
                        <img 
                        src={spareImg}
                        alt={spareImg}
                        className={'object-cover,object-center'}
                        
                        />
                )}
            </div>
           
            <div className={cn(titleClassName,'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
                <div className=" font-light text-neutral-400 text-xl  md:text-xs lg:text-base z-10">
                    {description}
                </div>
                <div className="font-sans font-bold text-lg dark:text-neutral-200 lg:text-3xl max-w-96 z-10">
                    {title}
                </div>
                {id === 2 && <GlobeDemo/>}
                {id === 3 && (
                  <div className="flex gap-1 lg:gap-5 w-fit absolute 
                  -right-4 lg:right-2">

                    <div className="flex flex-col gap-3 lg:gap-8">
                      {["React.js","Next.js", "SQL"].map(
                        (item=>(
                          <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-slate-800">
                            {item}
                          </span>
                        ))
                      )}  
                      <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-8">
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                      {["Python","NodeJS","Express"].map(
                        (item=>(
                          <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-slate-800">
                            {item}
                          </span>
                        ))
                      )}  
                      
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:gap-8">
                    
                      {["Pandas","Numpy","Sci-Kit"].map(
                        (item=>(
                          <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-slate-800">
                            {item}
                          </span>
                        ))
                      )}  
                      <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"/>
                    </div>
                  </div>
                )} 
                {id ===5 && (
                  <div className="mt-5 relative">
                    <a className=" -bottom-5 left-0 min-h-[20px] min-w-[100px] relative inline-block px-8 py-4 text-white font-bold text-lg transition-all duration-300 
                     bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-lg outline-white-100 
                     hover:text-purple-600 hover:shadow-2xl focus:outline-none" href="https://mirza-portfolio-game.vercel.app/">Check it out!</a>
                  </div>
                )}
              {id === 6 && (
                <div className="mt-5 relative">
                  <div className={`absolute -bottom-5 right-0`}>
                    <Lottie options={{
                      loop: copied,
                      autoplay:copied,
                      animationData,
                      rendererSettings:{
                        preserveAspectRatio:'xMidYMid slice',

                      }
                    }}/>
                  </div>
                  <MagicButton 
                    title={copied ? 'Email copied' : "Copy my email!"}
                    icon={<IoCopyOutline/>}
                    position="left"
                    handleClick={handleCopy}
                  />
                </div>
              )}
        </div>
      </div>
    </div>
  );
};
