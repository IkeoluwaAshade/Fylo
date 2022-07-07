import React from 'react'
import './Hero.css'
import images from '../Media/images/illustration-1.svg'

const Hero = () => {
  return (
    <div className='heroSection'>
        <div className='heroText-illustration'>
            <div className='heroText'>
             <h1 className=''>
                All your files in one secure location, accessible anywhere
             </h1>

             <p className=''>
                Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends,family, and co-workers.
             </p>

               {/* <div className='email'>
                  <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email...' />
               </div>

               <div className='password'>
                  <input onChange={(e) => setPassword (e.target.value)} type='password' placeholder='Enter your Password' />
               </div> */}

            </div>

            <div className='illustration'>
             { <img src={images} alt='' /> } 
             </div>

        </div>

        
    </div>
  )
}

export default Hero