import React, { useState } from 'react'
import './Navbar.css'
import images from '../Media/images/logo.svg'
import Burger from '../BurgerClicks/Burger'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const toggleChange = () =>{
    setToggle(!toggle)
  }
  return (
    <div className='mainHeader'>
      <div className='headerHold'>
        <div className='logoDiv'>
          { <img src={images} alt='Logo Pics'/> }
        </div>


        <div className='navDivs'>

          <div className='Navigation'>
            <span>Feature</span>
          </div>

          <div className='Navigation'>
            <span>Teams</span>
          </div>
          
          <div className='Navigation'>
            <span>Sign in</span>
          </div>
        </div>

        
        <div className='burgerIconHold' onClick={toggleChange}>
          {toggle ? (
          <MdCancel size='25px' />
          ) : (
          <GiHamburgerMenu size='25px' />
          )} 

          <div className='burgerContentHold'>
            {toggle ? <Burger /> : null}
          </div>
        
        </div>

      </div>
      
      

    </div>
  )
}

export default Navbar