import React from 'react'
import './Footer.css'
import images from '../Media/images/logo.svg'
import {BiPhoneCall} from 'react-icons/bi'
import {SiGmail} from 'react-icons/si'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footerSection'>
        <div className='footerHold'>
          
          <div className='footerContent'>

            <div className='footerLogo'>
              { <img src={images} alt='Logo Pics'/> }
            </div>

            <div className='contactAndabout'>
              <div>
                <p>
                  <BiPhoneCall /> Phone: +1-543-123-4567 <br/>
                  <SiGmail /> example@fylo.com
                </p>
              </div>

              <div>
                Jobs <br/>
                Press <br/>
                Blog <br/> 
                About Us <br/>
              </div>

              <div>
                Contact Us <br/>
                Terms <br/>
                Privacy <br/> 
              </div>

              <div className='Socials'>
                <BsFacebook  />
                <AiFillTwitterCircle  />
                <AiFillInstagram  />
              </div>

            </div>
            
          </div>
        </div>
       
    </div>
  )
}

export default Footer