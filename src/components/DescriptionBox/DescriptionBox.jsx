import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description </div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae itaque at minus officiis asperiores, placeat, quod consequatur aliquam nemo aperiam <br /> suscipit in omnis ad est doloribus! Nihil voluptates dicta aliquam?
        </p>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae itaque at minus officiis asperiores, placeat, quod consequatur aliquam nemo aperiam <br /> suscipit in omnis ad est doloribus! Nihil voluptates dicta aliquam?
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox