import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <img src='https://hng.tech/img/brand-logo.png' alt='' />
      </div>
      <div className='image'>
        <img
          src='https://avatars.githubusercontent.com/u/62754095?v=4'
          alt=''
          className='profile-image'
        />
      </div>
      <div className='text'>
        <h1 className='h1'>Udosinachi Ofoegbu</h1>
        <p className='p1'>Front-End Developer</p>
      </div>
    </div>
  )
}

export default Header
