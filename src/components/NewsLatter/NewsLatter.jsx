import React from 'react'
import './NewsLatter.css'

function NewsLatter() {
  return (
    <div className='newslatter'>
        <h1>get exclusive offers on your email</h1>
        <p>subscribe to our newslatter and stay updated</p>
        <div>
            <input type="email" placeholder='your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLatter