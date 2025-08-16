// import React from 'react'
import Header from '../header/header'
import './Home.css'
import TargetCursor from '../Helpers/TargetCursor/Cursor'
import arrowsvg from '../../assets/SVG/arrow.svg'
import Page2 from '../Page 2/Page2'
import Page3 from '../Page 3/Page3'
import Page4 from '../Page 4/Page4'
import Page5 from '../Page 5/Page5'
import Footer from '../Footer/Footer'
import Peep from '../../assets/peep-59 1.svg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react'
function Home() {
    function scrollToBottom() {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth' // For smooth scrolling effect
        });
    }
    const page2ref = useRef(null)
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        
        gsap.to(".name,.homeBox", {
            opacity:0,
            scaleX:0.8,
            scaleY:0.8,
            translateY:"200%",
            scrollTrigger: {
                trigger: ".HomeMain",
                scroller: "body",
                // markers: true,
                start: "top",
                end: `top -700`,
                scrub: true,
                // pin: true,
            }
        })
        // gsap.to(Page2,{
        //     translateY:-100,
        //     scrollTrigger: {
        //         trigger: ".HomeMain",
        //         scroller: "body",
        //         // markers: true,
        //         start: "top",
        //         end: `top -100vh`,
        //         scrub: 2,
        //         // pin: true,
        //     }
        // })
    })
    return (
        <>
            <div className="HomeMain">
                <TargetCursor
                    spinDuration={2}
                    hideDefaultCursor={true}
                />
                <Header></Header>
                {/* <div className="name">SANIDHYA SAHU</div> */}
                <div className="name"><span className='cursor-target' >SANIDHYA</span> <span className='cursor-target' >SAHU</span></div>
                {/* <SplitText
                text="SANIDHYA SAHU"
                className="text-2xl font-semibold text-center name"
                delay={30}
                duration={0.3}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                // onLetterAnimationComplete={handleAnimationComplete}
            /> */}
                <div className="homeBox">
                    <div className="subBox1">
                        <img className='arrowSVG' src={arrowsvg} alt="" />
                        <div className="about">
                            <span>ABOUT&nbsp;</span> I am a Full Stack Developer based in India, passionate about building scalable, self-hosted solutions.
                        </div>
                        <div className="HomeContact">
                            <button onClick={()=>scrollToBottom()} className='cursor-target' >Contact</button>
                        </div>
                    </div>
                    <div className="subBox2">
                        <img className='peep cursor-target' style={{
                            position: "absolute",
                            right: "17vw",
                            // top: "51vh",
                            width: "320px"
                        }} src={Peep} alt="" />
                    </div>
                    <div className="subBox3"></div>
                </div>
            </div>
            <Page2 ref={page2ref}></Page2>
            <Page3></Page3>
            <Page4></Page4>
            <Page5></Page5>
            <Footer></Footer>
        </>
    )
}

export default Home
