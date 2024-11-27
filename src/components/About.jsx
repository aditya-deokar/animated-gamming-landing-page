import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger} from "gsap/all"
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP(()=>{
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#clip",
                start:"center center",
                end:"+=800 center",
                scrub:0.5,
                pin:true,
                pinSpacing:true,
            }
        })

        tl.to(".mask-clip-path",{
            width:"100vw",
            height:"100vh",
            borderRadius:'0px'
        })
    })

  return (
    <section id='about' className='w-full min-h-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h1 className='font-general text-sm uppercase md:text-[12px] '>Welcome to Zentry</h1>


                <AnimatedTitle title="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure" 
                containerClass="mt-5 !text-black text-center"/>

               

                <div className='about-subtext'>
                    <p>The Game of Games begins-your life, now an epic MMORPG</p>

                    <p>Zentry unites every player from countless games and platforms</p>
                </div>

            </div>

            <div id='clip' className='h-dvh w-screen ' >
                <div className='mask-clip-path about-image'>
                    <img src="img/about.webp" alt="background"
                    className='absolute left-0 top-0 size-full object-cover' />
                </div>
            </div>
    </section>
  )
}

export default About