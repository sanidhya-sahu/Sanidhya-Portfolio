import React from 'react'
import Header from '../header/header'
import './Home.css'
import TargetCursor from '../Helpers/TargetCursor/Cursor'
import SplitText from '../Helpers/SplitText/SplitText'
import arrowsvg from '../../assets/SVG/arrow.svg'
import Page2 from '../Page 2/Page2'
import Page3 from '../Page 3/Page3'
function Home() {

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
                            <button className='cursor-target' >Contact</button>
                        </div>
                    </div>
                    <div className="subBox2"></div>
                    <div className="subBox3"></div>
                </div>
            </div>
            <Page2></Page2>
            <Page3></Page3>
        </>
    )
}

export default Home
