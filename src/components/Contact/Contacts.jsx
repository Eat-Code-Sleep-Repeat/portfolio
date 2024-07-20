import React from 'react'
import "../Contact/styles.css"

function Contacts() {
  return (
    <div style={{height:"400px"}}>
        <h6 style={{fontSize:"35px", paddingTop:"10px"}}>Contact</h6>
        <div>
          <ul className='flex-container'>
            <li className='flex-items'>Email</li>
            <li className='flex-items'>LinkedIn</li>
            <li className='flex-items'>GitHub</li>
          </ul>
        </div>
    </div>
  )
}

export default Contacts
