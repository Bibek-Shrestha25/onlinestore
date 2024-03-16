import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='p-10 border-collapse3 border-blue-950 m-5'>
        <h1>Name:{props.name}</h1>
        <h2>Address:{props.address}</h2>
        {/* <Link to {''} >View Details</Link><br/> */}
    </div>
  )
}

export default Card
