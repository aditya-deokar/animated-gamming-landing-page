import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import { BentoTilt } from './Features'
import Button from './Button'


const Story = () => {
  return (
    <section id='story' className='h-[150vh]  w-screen bg-black text-blue-50'>
        <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[12px] '>The Multiversal is world</p>

            <div className='relative size-full '>
                <AnimatedTitle 
                title="the St<b>o</b>ry of hidd<b>e</b>n real<b>m</b>" 
                containerClass='mt-5 pointer-event-none mix-blend-differnce relative z-10 '
                />

                <BentoTilt className=' mt-20 h-dvh w-screen overflow-hidden'>
                    <img className='max-sm:absolute left-0 top-0 size-full object-cover' src="/img/entrance.webp" alt="img" />
                </BentoTilt>
            </div>

            <div className='-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end relative z-20'>
                <div className='flex h-full w-fit flex-col items-center md:items-start'>
                    <p className='mt-3 max-w-sm font-circular-web text-center text-violet-50 md:text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dolorum accusantium cumque?</p>

                    <Button id="realm-button" title="discover prologue" containerClass="mt-5"/>
                </div>
            </div>

           
            
        </div>
    </section>
  )
}

export default Story