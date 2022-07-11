import React from 'react'
import './Hero.css'
import images from '../Media/images/illustration-1.svg'

const Hero = ({header, text1, email, text2, text3, testimonial}) => {
  return (
    <div className='heroSection'>
        <div className='heroText-illustration'>
            <div className='heroText'>
             <h1 className=''>
                 {header}
             </h1>

             <p className=''>
                 {text1}
             </p>

             <div>
                {email}
             </div>

             <p className=''>
                 {text2}
             </p>
            
             <p className=''>
                 {text3}
             </p>

             <div className='testimonialSection'>
                {testimonial}
             </div>

                {/* <div className='email'>
                  <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email...' />
               </div>

               <div className='password'>
                  <input onChange={(e) => setPassword (e.target.value)} type='password' placeholder='Enter your Password' />
               </div>  */}

            </div>

            <div className='illustration'>
             { <img src={images} alt='' /> } 
             </div>

        </div>

        
    </div>
  )
}

export default Hero