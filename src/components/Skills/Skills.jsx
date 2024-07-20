import React from 'react'
import "../Skills/styles.css"

function Skills() {
  return (
    <div style={{height:800, backgroundColor:'white'}}>
      <h6 style={{fontSize:"35px", paddingTop:"30px"}}>Skills</h6>
      <div>
        <ul className='flex-container'>
          <li className='flex-item'>ReactJs</li>
          <li className='flex-item'>AngularJs</li>
          <li className='flex-item'>React Native</li>
          <li className='flex-item'>. Net</li>
          <li className='flex-item'>TypeScript</li>
          <li className='flex-item'>C#</li>
          <li className='flex-item'>Git</li>
          <li className='flex-item'>Azure</li>
        </ul>
      </div>
      <button style={{width:"175px", height:"75px", borderRadius:"5px"}}>Get My Resume</button>
    </div>
  )
}

export default Skills
