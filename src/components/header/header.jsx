// import React from 'react'
import './header.css'
function header() {
  function linkRedirect() {
    const urlToOpen = 'https://github.com/sanidhya-sahu/Resume/blob/main/Sanidhya_Resume.pdf';
    window.open(urlToOpen, '_blank', 'noopener,noreferrer');
  }
  return (
    <div className='headerMain'>
      <div className="pos">
        FULL-STACK DEVELOPER
      </div>
      <div className="headerContact">
        <button onClick={()=>linkRedirect()} className='cursor-target'>Resume &nbsp; <span>↓</span></button>
      </div>
    </div>
  )
}

export default header
