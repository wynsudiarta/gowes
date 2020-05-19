/* eslint jsx-a11y/anchor-is-valid:0 */
import React from 'react'

import logo from '../../logo.svg'
import pic from '../../pic.png'

const style = {
  logo: {
    width: '100px',
    display: 'inline-block',
  }
}

const AppHeader = ({ title }) => {
  return (
    <header className='AppHeader center'>
      <h1 style={{ display: 'block', width: '100%'}}>
        <img src={pic} alt="React logo" style={style.logo}/>
        <span>Cycling, Exploring and Culinary</span>
      </h1>
    </header>
  )
}

export default AppHeader

