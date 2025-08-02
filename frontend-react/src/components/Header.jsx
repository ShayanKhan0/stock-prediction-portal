import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-light-dark pt-3 pb-3 align-items-start pe-5'>
        <div className='container'>
            <a className='navbar-brand text-light-blue' href=''>Stock Prediction Portal</a>
        </div>
        <div>
            <Button class='btn-outline-info' text='Login' />
            &nbsp; &nbsp;
            <Button class='btn-info' text='Register' />
        </div>
    </nav>
  )
}

export default Header