import "./Page4.css"
import { useState } from 'react'
import Counter from "../Helpers/Counter/Counter"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Page4() {
  const [CounterValue, setCounterValue] = useState(1)
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const H = document.getElementById("workTiles").clientHeight
    gsap.to(".workcounter", {
      // paddingRight:50,
      scrollTrigger: {
        trigger: ".workcounter",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: `top ${-H + 500}`,
        scrub: 2,
        pin: true,
      }
    })
    gsap.to(".workcounter",{
      scrollTrigger: {
          trigger: "#work2",
          scroller: "body",
          // markers: true,
          start: "top 250",
          end: `top 250`,
          onEnter: () => setCounterValue(2),
          onLeaveBack: () => setCounterValue(1)
        },
    })
    gsap.to(".workcounter",{
      scrollTrigger: {
          trigger: "#work3",
          scroller: "body",
          // markers: true,
          start: "top 250",
          end: `top 250`,
          onEnter: () => setCounterValue(3),
          onLeaveBack: () => setCounterValue(2)
        },
    })
    gsap.to(".workcounter",{
      scrollTrigger: {
          trigger: "#work4",
          scroller: "body",
          // markers: true,
          start: "top 250",
          end: `top 250`,
          onEnter: () => setCounterValue(4),
          onLeaveBack: () => setCounterValue(3)
        },
    })
    gsap.to(".workcounter",{
      scrollTrigger: {
          trigger: "#work5",
          scroller: "body",
          // markers: true,
          start: "top 250",
          end: `top 250`,
          onEnter: () => setCounterValue(5),
          onLeaveBack: () => setCounterValue(4)
        },
    })
  })
  function linkRedirect(target) {
        if (target == "AIC") {
            const urlToOpen = 'https://github.com/sanidhya-sahu/Website-v2';
            window.open(urlToOpen, '_blank', 'noopener,noreferrer');
        }
        else if (target == "HN") {
            const urlToOpen = 'https://github.com/sanidhya-sahu/Health-Net';
            window.open(urlToOpen, '_blank', 'noopener,noreferrer');
        }
        else if (target == "3P") {
            const urlToOpen = 'https://github.com/sanidhya-sahu/3D-Planets';
            window.open(urlToOpen, '_blank', 'noopener,noreferrer');
        }
        else if (target == "DR") {
            const urlToOpen = 'https://github.com/sanidhya-sahu/Donate-Red';
            window.open(urlToOpen, '_blank', 'noopener,noreferrer');
        }
        else if (target == "CJ") {
            const urlToOpen = 'https://github.com/sanidhya-sahu/Code-jumangi';
            window.open(urlToOpen, '_blank', 'noopener,noreferrer');
        }
    }
  return (
    <div className='page4Main' >
      <div className="page4head">
        Works <span>/</span>
      </div>
      <div className="workBody">
        <div className="workcounter">
          <div className="workGhost"></div>
          <Counter
            value={CounterValue}
            places={[10, 1]}
            fontSize={400}
            padding={5}
            gap={5}
            textColor="#c5c5c5"
            fontWeight={900}
            gradientHeight={0}
          />
        </div>
        <div className="workTiles" id="workTiles">
          <div className="workdesc">
            <div className="work">(PROJECTS)</div>
            <div className="workPara">Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, andrefined.</div>
          </div>
          <div className="WorkTile" id="work1">
            <div onClick={()=>linkRedirect("AIC")} className="workVid cursor-target " id="vid1">
              <div className="blurlayer">
                <video className="workvidele" loop autoPlay muted>
                  <source src="/WorkVids/aiclub.webm" type="video/webm" />
                </video>
              </div>
            </div>
            <div className="workDetails">
              <div className="workDetailBox1">
                <div className="aboutwork">AI Club's Website</div>
                <div className="workname">AI Club</div>
              </div>
              <div className="workDetailBox2">
                <div className="subDetail1">Development</div>
                <div className="subDetail2">2024</div>
              </div>
            </div>
          </div>
          <div className="WorkTile" id="work2">
            <div onClick={()=>linkRedirect("HN")} className="workVid cursor-target " id="vid2">
              <div className="blurlayer">
                <video className="workvidele" loop autoPlay muted>
                  <source src="/WorkVids/healthnet.webm" type="video/webm" />
                </video>
              </div>
            </div>
            <div className="workDetails">
              <div className="workDetailBox1">
                <div className="aboutwork">AI powered platform efficient healthcare.</div>
                <div className="workname">Health Net</div>
              </div>
              <div className="workDetailBox2">
                <div className="subDetail1">Development</div>
                <div className="subDetail2">2025</div>
              </div>
            </div>
          </div>
          <div className="WorkTile" id="work3">
            <div onClick={()=>linkRedirect("3P")} className="workVid cursor-target " id="vid3">
              <div className="blurlayer">
                <video className="workvidele" loop autoPlay muted>
                  <source src="/WorkVids/3plantes.webm" type="video/webm" />
                </video>
              </div>
            </div>
            <div className="workDetails">
              <div className="workDetailBox1">
                <div className="aboutwork">3D Visualization of Planets.</div>
                <div className="workname">3D Planets</div>
              </div>
              <div className="workDetailBox2">
                <div className="subDetail1">Development</div>
                <div className="subDetail2">2023</div>
              </div>
            </div>
          </div>
          <div className="WorkTile" id="work4">
            <div onClick={()=>linkRedirect("DR")} className="workVid cursor-target " id="vid4">
              <div className="blurlayer">
                <video className="workvidele" loop autoPlay muted>
                  <source src="/WorkVids/donatered.webm" type="video/webm" />
                </video>
              </div>
            </div>
            <div className="workDetails">
              <div className="workDetailBox1">
                <div className="aboutwork">Website for easing blood donation.</div>
                <div className="workname">Donate Red</div>
              </div>
              <div className="workDetailBox2">
                <div className="subDetail1">Development</div>
                <div className="subDetail2">2023</div>
              </div>
            </div>
          </div>
          <div className="WorkTile" id="work5">
            <img onClick={()=>linkRedirect("CJ")} className="cursor-target" id="vid5" src="/WorkIMG/Mockup.png" alt="" srcset="" />
            <div className="workDetails">
              <div className="workDetailBox1">
                <div className="aboutwork">Treasure hunt event platform.</div>
                <div className="workname">Code Jumanji</div>
              </div>
              <div className="workDetailBox2">
                <div className="subDetail1">Development</div>
                <div className="subDetail2">2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page4
