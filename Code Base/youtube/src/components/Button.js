import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
        <button className='border bg-gray-200 rounded px-3 py-1 m-2 font-bold'>{name}</button>
    </div>
  )
}

export default Button