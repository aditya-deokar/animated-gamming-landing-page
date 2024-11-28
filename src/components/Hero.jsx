import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    

    const [current, setCurrent] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideoes, setLoadedVideoes] = useState(0);

    const totalVideos=4;
    const nextVideoRef=useRef(null);

    const upcomingVideoIndex = (current % totalVideos)+1;
    


    const handleMiniClick=()=>{
        setHasClicked(true);
        setCurrent(upcomingVideoIndex);
    }

    const getVideoSrc=(index)=>{
        return `videos/hero-${index}.mp4`
    }

    const handleVideoLoadFun=()=>{
        setLoadedVideoes(prev=>prev+1)

    }

    useEffect(() => {
      if(loadedVideoes===totalVideos-1){
        setIsLoading(false)
      }
    }, [loadedVideoes])
    

    useGSAP(()=>{
        if(hasClicked){
            gsap.set('#next-video',{
                visibility:"visible"
            })

            gsap.to('#next-video',{
                transformOrigin:"center center",
                scale:1,
                width:"100%",
                height:"100%",
                duration:1,
                ease:"power1.inOut",
                onStart:()=>nextVideoRef.current.play(),
            });

            gsap.from("#current-video",{
                transformOrigin:"center center",
                scale:0,
                duration:1.5,
                ease:"power1.inOut"
            })
        }
    },{dependencies:[current], revertOnUpdate:true })


    useGSAP(()=>{
        gsap.set("#frame",{
            clipPath:"polygon(16% 16%, 86% 25%, 90% 91%, 0% 100%)",
            // borderRadius:"0 0 40% 0"
        })

        const tl=gsap.timeline();

        tl.from(".special-font",{
            opacity:0,
            y:100,
            stagger:0.2,
            ease:"back.inOut"
        })
        tl.from("#frame",{
            // opacity:0,
            y:100,
            scale:0.5,
            ease:"back.inOut",
            duration:1,
            // borderRadius:"20px"
        })

        gsap.from("#frame",{
            clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            // borderRadius:"0 0 0 0",
            ease:"power1.inOut",
            // scrub:1,
            scrollTrigger:{
                scroller:"body",
                trigger:"#frame",
                start:"80% 70%",
                end:"bottom 80%",
                scrub:true,
                
                // markers:true
            }
        })
    })

    


  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>

        {/* loader */}
        {isLoading && (
            <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
                <div className='three-body'>
                    <div className='three-body__dot'></div>
                    <div className='three-body__dot'></div>
                    <div className='three-body__dot'></div>
                </div>
            </div>
        )}



        <div id='frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                    <div
                    onClick={handleMiniClick}
                     className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                        <video
                        ref={nextVideoRef}
                        src={getVideoSrc(upcomingVideoIndex)}
                        loop muted id='current-video'
                        className='size-64 origin-center scale-150 object-cover object-center'
                        onLoadedData={handleVideoLoadFun}>

                        </video>
                    </div>
                </div>

                <video src={getVideoSrc(current)}
                ref={nextVideoRef}
                
                loop muted id='next-video'
                className='absolute-center invisible absolute z-20 size-64 object-cover object-center '
                onLoadedData={handleVideoLoadFun}></video>


                <video src={getVideoSrc(current===totalVideos-1 ? 1 : current )}
                autoPlay loop muted 
                className='absolute left-0 top-0 size-full object-cover object-center'
                onLoadedData={handleVideoLoadFun}></video>
            </div>

            <h1 className='special-font hero-heading absolute bottom-4 right-5 z-40 text-blue-75'>g<b>a</b>ming</h1>
             <div className='absolute left-0 top-0 z-40 size-full '>
                <div className='mt-24 px-5 sm:px-10 '>
                    
                    <h1 className='special-font hero-heading text-blue-100'>redefi<b>n</b>e
                
                    </h1>
                    <p className='mb-5 max-w-64 font-robert-regular text-blue-100 '>Enter the Metagame Layer <br /> Unleash the play Economy</p>

                    <Button id="watch-tailer" title="Watch Tailer" leftIcon={TiLocationArrow}
                    containerClass="!bg-yellow-300 flex-center gap-1"  />

                </div>
             </div>
        </div>



        {/* black titles */}
        <div className='absolute left-0 top-0  size-full '>
                <div className='mt-24 px-5 sm:px-10 '>
                    
                    <h1 className='special-font hero-heading text-black'>redefi<b>n</b>e
                
                    </h1>
                    <p className='mb-5 max-w-64 font-robert-regular text-black '>Enter the Metagame Layer <br /> Unleash the play Economy</p>

                    <Button id="watch-tailer" title="Watch Tailer" leftIcon={TiLocationArrow}
                    containerClass="!bg-purple-300 flex-center gap-1"  />

                </div>
         </div>
        <h1 className='special-font hero-heading absolute bottom-4 right-5  text-black'>g<b>a</b>ming</h1>
    </div>
  )
}

export default Hero