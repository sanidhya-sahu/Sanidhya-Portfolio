// import React from 'react'
import "./Page3.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Page3() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const H = document.querySelector(".page3Main").clientHeight;
  
    gsap.to("#serv1", {
      scrollTrigger: {
        trigger: ".page3Main",
        scroller: "body",
        // markers: true,
        start: "top -1%",
        end: `top -1000`,
        scrub: 2,
        pin: true,
      }
    })
    gsap.to("#serv2",{
      translateY : 207,
      scrollTrigger:{
        trigger:"#serv1",
        scroller:"body",
        // markers:true,
        start: "top -30%",
        end: `top -30%`,
        scrub: 2,
        // pin: true,
      }
    })
    gsap.to(".line2",{
      translateY : 205,
      scrollTrigger:{
        trigger:"#serv1",
        scroller:"body",
        // markers:true,
        start: "top -30%",
        end: `top -30%`,
        scrub: 2,
        // pin: true,
      }
    })

    gsap.to("#serv3",{
      translateY : 350,
      scrollTrigger:{
        trigger:"#serv2",
        scroller:"body",
        // markers:true,
        start: "top -30%",
        end: `top -30%`,
        scrub: 2,
        // pin: true,
      }
    })
    gsap.to(".line3",{
      translateY : 348,
      scrollTrigger:{
        trigger:"#serv2",
        scroller:"body",
        // markers:true,
        start: "top -30%",
        end: `top -30%`,
        scrub: 2,
        // pin: true,
      }
    })
    // gsap.to("page3Main",{
    //   height: H - 1000,
    //   scrollTrigger:{
    //     trigger:"#serv2",
    //     scroller:"body",
    //     // markers:true,
    //     start: "top 30%",
    //     end: `top`,
    //     // scrub: 2,
    //     // pin: true,
    //   }
    // })
    
  })
  return (
    <div className='page3Main'>
      <div className="line"></div>
      <div className="serv1" id="serv1">
        <div className="counter1"> 01 </div>
        <div className="serv1data">
          <div className="serv1name">Full-Stack Development</div>
          <div className="serv1desc">From frontend interactions to backend APIs,&nbsp; I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.</div>
          <div className="serv1list">
            <div className="li1">
              <div className="l1">
                <div className="serv1counter1">01</div>
                <div className="serv1list1data" style={{ paddingLeft: "5px" }}>React, Node.js, Express.js</div>
              </div>
              <div className="subline"></div>
              <div className="l2">
                <div className="serv1counter1">02</div>
                <div className="serv1list1data">REST APIs, FAST API, Postman</div>
              </div>
              <div className="subline"></div>
              <div className="l3">
                <div className="serv1counter1">03</div>
                <div className="serv1list1data">Git, GitHub, MongoDB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line line2" style={{ marginTop: "0px" }}></div>
      <div className="serv1" id="serv2">
        <div className="counter1"> 02 </div>
        <div className="serv1data">
          <div className="serv1name">UI/UX & Frontend</div>
          <div className="serv1desc">Design is more than looks — it’s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.</div>
          <div className="serv1list">
            <div className="li1">
              <div className="l1">
                <div className="serv1counter1">01</div>
                <div className="serv1list1data" style={{ paddingLeft: "5px" }}>NextJs, TailwindCSS</div>
              </div>
              <div className="subline"></div>
              <div className="l2">
                <div className="serv1counter1">02</div>
                <div className="serv1list1data">HTML, CSS, JavaScript</div>
              </div>
              <div className="subline"></div>
              <div className="l3">
                <div className="serv1counter1">03</div>
                <div className="serv1list1data">Figma to Code</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line line3" style={{ marginTop: "0px" }}></div>
      <div className="serv1" id="serv3">
        <div className="counter1"> 03 </div>
        <div className="serv1data">
          <div className="serv1name">Frameworks & Integrations</div>
          <div className="serv1desc">I elevate applications by weaving in specialized frameworks and third-party services. From crafting immersive 3D experiences with Three.js to leveraging the power of Google APIs, my focus is on seamlessly extending functionality to create richer, more dynamic, and data-driven solutions.</div>
          <div className="serv1list">
            <div className="li1">
              <div className="l1">
                <div className="serv1counter1">01</div>
                <div className="serv1list1data" style={{ paddingLeft: "5px" }}>Three.js, GSAP</div>
              </div>
              <div className="subline"></div>
              <div className="l2">
                <div className="serv1counter1">02</div>
                <div className="serv1list1data">Socket.IO, WebRTC</div>
              </div>
              <div className="subline"></div>
              <div className="l3">
                <div className="serv1counter1">03</div>
                <div className="serv1list1data">OAuth, Google APIs, OpenAI APIs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page3
