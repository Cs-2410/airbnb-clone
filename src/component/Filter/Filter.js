import React, { useState } from 'react'
import "./filter.css"
import {links} from "../../photos/filterphoto"

const Filter = () => {
    const [selectItem,setSelectItem] = useState();
  return (
    <div className="filter-div">
         {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i == selectItem && "selected-box"}`}
           onClick={() =>{
            setSelectItem(i)
           }}
        
        >
          <img src={item.imgSrc} className="links-img" />
          <p
            className={`links-label ${i == selectItem && "selected-label"}`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Filter