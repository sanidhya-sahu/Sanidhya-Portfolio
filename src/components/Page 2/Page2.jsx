// import React from 'react'
// import BlurText from "../Helpers/Blur text/BLur"
import "./Page2.css"
function Page2() {
    return (
        <div className='Page2Main'>
            <div className="sec1">
                <div className="whatIdo">
                    {/* <BlurText
                        text="WHAT I DO /"
                        delay={150}
                        animateBy="words"
                        direction="bottom"
                        className="text-2xl mb-8"
                    /> */}
                    WHAT I DO <span>/</span>
                </div>
            </div>
            <div className="sec2">
                <div className="ghost1"></div>
                <div className="para">
                    I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether it's for a business, a startup, or a product team.
                </div>
                <div className="serv">
                    (SERVICES)
                </div>
            </div>
        </div>
    )
}

export default Page2
