import React from 'react'

const DisplayList = () => {
    const items =['fruit chat ' , 'Panipuri' , 'Burger', 'GulabJamun']
  return (
    <div>
         <div>Here is List of items</div>
    <ul>
      {items.map((item,index)=>{
        return <li key={index}>{item}</li>
      })}
    </ul>
   
    </div>
  )
}

export default DisplayList
