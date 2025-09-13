import React from 'react'
import './ScrollText.css'


function ScrollText() {
  return (
    <div className="scrolling-text-container">
    {/* Right to Left Scroll */}
    <div className="scroll-text-right-to-left">
      <span>SENIOR WEBSITE DEVELOPER FROM NEW YORK * </span>
    </div>
    
    {/* Left to Right Scroll */}
    <div className="scroll-text-left-to-right">
      <span>LET'S WORK TOGETHER - I AM OPEN FOR NEW PROJECTS * </span>
    </div>
  </div>
  
  )
}

export default ScrollText
