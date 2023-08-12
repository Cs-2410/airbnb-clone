import React from 'react'
import './card.css'
import {locations} from '../../photos/Card_detail'
import Swiping from './Swiping'



const Card = () => {
  return (
    <div className="cards-flex">
       {locations.map((item,i) => (
         <Swiping item={item} key={i} />
       ))}
    </div>
  )
}

export default Card