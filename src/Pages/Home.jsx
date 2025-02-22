import React from 'react'
import Skills from '../Components/Skills';
import Services from '../Components/Services';
import Hero from '../Components/Hero';
import Reviews from '../Components/Reviews';
import Contact from './Contact';
import ProjectPage from './ProjectPage';
import Donate from './Donate';

function Home(){

 


  return (

    <main className='bg-[#182B5C] py-10'>

     {/* //profile section */}
          <Hero/>
      {/* //skills and expertise */}
          <Skills/>
      {/* //services */}
         <Services/>
     {/* Reviews */}
        
      <Reviews/>
     {/* Contact */}
     <Contact/>
          {/* projects */}
          <ProjectPage/>
          {/* donate */}
          <Donate/>
    </main>
  )
}

export default Home