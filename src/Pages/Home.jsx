import React from 'react'
import Skills from '../Components/Skills';
import Services from '../Components/Services';
import Hero from '../Components/Hero';
import Achievments from '../Components/Achievments';
import Reviews from '../Components/Reviews';

function Home(){

 


  return (

    <main className='bg-[#fff]'>

     {/* //profile section */}
          <Hero/>
      {/* //skills and expertise */}
          <Skills/>
      {/* //services */}
         <Services/>
     {/* Reviews */}
        
      <Reviews/>
  {/* ///achievements */}
  <Achievments/>


          
    </main>
  )
}

export default Home