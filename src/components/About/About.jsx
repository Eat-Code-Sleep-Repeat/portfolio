import React from 'react'
import { aboutMe,secondParaAboutMe,lastParaAboutMe } from '../constants'
import "../About/styles.css"

function About() {
  return (
    <div style={{height:"800px", backgroundColor:"#CDCBCB"}}>
      <h3 style={{marginBottom:"45px", paddingTop:"100px"}}>About</h3>
      <p className='about'>
        {aboutMe}
      </p>
      <p className='about'> 
      <span style={{}}>{secondParaAboutMe}</span>
      </p>
      <p className='about'> 
      {lastParaAboutMe}
      </p>
    </div>
  )
}

export default About
