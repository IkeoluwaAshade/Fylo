import React from 'react'
import Navbar from './Components/Navigation-Bar/Navbar'
import Hero from './Components/Hero/Hero'
import CTA from './Components/CTA/Cta'
import Footer from './Components/Footer/Footer.js'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero header={'All your files in one secure location, accessible anywhere'} text1={'Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.'}  />


      <Hero header={'Stay productive wherever you are'} text2={'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.'} text3={'Securely share files and folder within friends, family and colleagues for live collaboration. No email attachments required!'}testimonial={'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'} />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
