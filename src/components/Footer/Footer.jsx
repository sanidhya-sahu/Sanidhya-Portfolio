import "./Footer.css"
import fooPeep from "../../assets/SVG/fooPeep.svg"
import Clock from "../Helpers/clock/Clock"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Footer() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling effect
        });
    }
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {

        gsap.from(".fooHead,.fooBody", {
            opacity: 0,
            scaleX: 0.8,
            scaleY: 0.8,
            translateY: "200%",
            scrollTrigger: {
                trigger: ".footerMain",
                scroller: "body",
                // markers: true,
                start: "top 400",
                end: `top`,
                scrub: true,
                // pin: true,
            }
        })
    })
    function linkRedirect(target) {
        if (target == "insta") {
            const urlToOpen = 'https://www.instagram.com/sanidhya_914/';
            window.open(urlToOpen, '_blank', 'noopener,noreferrer');
        }
        else if (target == "git") {
            const urlToOpen = 'https://github.com/sanidhya-sahu';
            window.open(urlToOpen, '_blank', 'noopener,noreferrer');
        }
        else if (target == "li") {
            const urlToOpen = 'https://www.linkedin.com/in/sanidhyasprofile/';
            window.open(urlToOpen, '_blank', 'noopener,noreferrer');
        }
    }
    return (
        <div className="footerMain">
            <div className="fooHead">
                Let's Talk
            </div>
            <div className="fooBody">
                <div className="email">sanidhyasahu.dev@gmail.com</div>
                <div className="socials">
                    <button onClick={() => linkRedirect("insta")} className="social cursor-target">Instagram</button>
                    <button onClick={() => linkRedirect("git")} className="social cursor-target">GitHub</button>
                    <button onClick={() => linkRedirect("li")} className="social cursor-target">Linkedin</button>
                </div>
                <div className="fooExtras">
                    <div className="fooPeep cursor-target">
                        <img src={fooPeep} alt="" />
                    </div>
                    <div className="location">CSN , <Clock></Clock></div>
                    <div onClick={() => scrollToTop()} className="scrollToTop cursor-target">↑</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
