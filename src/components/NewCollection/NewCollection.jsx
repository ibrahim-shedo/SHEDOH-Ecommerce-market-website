import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/Assets/new_collections'
import new_collections from '../Assets/Assets/new_collections'
import { Item } from '../Item/Item'

function NewCollection() {
  return (
    <div className='newcollections'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,i)=>{
          return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection