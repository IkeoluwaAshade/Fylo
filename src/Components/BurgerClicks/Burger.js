import React from 'react'
import './Burger.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'

const Burger = () => {
  return (
    <div>
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

    </div>
  )
}

export default Burger