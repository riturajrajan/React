import React from 'react'
import Button from './Button';

const ButtonList = () => {
  const btnList = ['All', 'Game', 'Cricket', 'News', 'ChatGpt', 'Web', 'Reactjs', 'Angular', 'Java', 'SpringBoot'];
  return (
    <div className='flex'>
      {btnList.map(btnname => <Button name={btnname} key={Math.random()}/>)}
    </div>
  )
}

export default ButtonList;